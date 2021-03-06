var WQuickActions = {
    MOBILE_MAX_WIDTH: 600,
    element         : document.getElementById('quick-actions'),
    dragElement     : document.getElementById("quick-actions-drag-handle"),

    initialize: function(email, phone, address){
        this.links = document.getElementsByClassNameForMobile('quick-actions-button');
        var menu = document.getElementById('qa-menu');
        if (menu.childElementCount > 0){
            this.setInitZoom(); //* this.getZoom();
            this.fixZoom();

            var debounce = function (func, threshold, execAsap) {

                var timeout;

                return function debounced () {
                    var context = this, args = arguments;
                    function delayed () {
                        if (!execAsap){ func.apply(context, args); }
                        timeout = null;
                    }
                    if (timeout){ clearTimeout(timeout); }
                    else if (execAsap){
                        func.apply(context, args);
                    }

                    timeout = setTimeout(delayed, threshold || 100);
                };

            };

            window.addEventListener('touchmove', this.handleTouchMove.bindContextForMobile(this));
            window.addEventListener('orientationchange', this.delayedFixZoom.bindContextForMobile(this));
            window.addEventListener('touchstart', debounce(this.delayedFixZoom.bindContextForMobile(this)), 500);

            for(var i = 0; i < this.links.length; i++){
                this.links[i].addEventListener('click', this.stopLinkIfDisabled.bindContextForMobile(this));
            };

            Hammer(document.body)
                .on('doubletap', this.handleZoom.bindContextForMobile(this));

            Hammer(this.element)
                .on('dragstart', this.moveActionsStart.bindContextForMobile(this))
                .on('drag', this.moveActions.bindContextForMobile(this))
                .on('dragend', this.moveActionsEnd.bindContextForMobile(this));

//            Hammer(this.dragElement)
//                .on('tap', this.toggleActionsVisibility.bindContextForMobile(this));

            this.dragElement.addEventListener('click', this.toggleActionsVisibility.bindContextForMobile(this));

            var actionsBar = document.getElementById('quick-actions-bar');
            this.height = (actionsBar) ? actionsBar.offsetHeight : 0;
            this.bottom = 0;
            this.newBottom = 0;
            this.distance = 0;
            this.dragStartY = 0;

            this._setHref("quick-actions-email", (email) ? "mailto:" + email : '');
            this._setHref("quick-actions-call", (phone) ? "tel:" + phone : '');
            this._setHref("quick-actions-location", (address) ? "http://maps.apple.com/?q=" + address : '');

            this.isLinksEnabled = true;

            this._resetSocialLinksPosition();
            this._fixSocialLinkNames();
        } else {
            this.element.style.display = 'none';
        }
    },

    stopLinkIfDisabled: function(e){
        if (!this.isLinksEnabled){
            e.preventDefault();
            e.stopPropagation();
        }
    },

    handleZoom: function(e){
        if (this.zooming){
            this.wait4zoom();
        } else {
            this.startZooming();
        }
    },

    handleTouchMove: function(e){
        if (this.isMultiTouch(e)){
            this.handleZoom(e);
        } else {
            if (this.zooming){
                this.endZooming();
            }
        }
    },

    delayedFixZoom: function(e){
        setTimeout(this.fixZoom.bindContextForMobile(this), 300);
    },

    startZooming: function(){
        this.hideBar();
        this.zooming = true;
        this._zoomEndTimeout = setTimeout(this.endZooming.bindContextForMobile(this), 1000);
    },

    wait4zoom: function(){
        if (this._zoomEndTimeout){
            clearTimeout(this._zoomEndTimeout);
            this._zoomEndTimeout = setTimeout(this.endZooming.bindContextForMobile(this), 500);
        }
    },

    endZooming: function(){
        this.fixZoom();
        this.showBar();
        if (this.zooming){
            this._zoomEndTimeout = setTimeout(this.endZooming.bindContextForMobile(this), 1000);
        }
        this.zooming = false;

    },

    showBar: function(){
        this.element.style.display = 'block';
        this.removeClass(this.element, 'no-pointer-events');
    },

    hideBar: function(){
        this.element.style.display = 'none';
        this.addClass(this.element, 'no-pointer-events');
    },

    moveActionsStart: function(e){
        this.disableLinks();
        this.dragStartY = e.gesture.center.pageY;
        this.bottom = this.hasClass(this.element, 'quick-actions-hidden') ? (0 - this.height) : 0;

        e.gesture.preventDefault();
        e.stopPropagation();
    },

    moveActions: function(e){
        this.distance = e.gesture.center.pageY - this.dragStartY;
        this.newBottom = Math.min(Math.max(this.bottom - this.distance, 0 - this.height), 0);
        this.element.style.bottom = this.newBottom + 'px';

        e.gesture.preventDefault();
    },

    moveActionsEnd: function(e){
        if (this.newBottom != this.bottom){
            this.toggleClass(this.element, 'quick-actions-hidden');
        }
        this.element.style.bottom = "";
        setTimeout(this.enableLinks.bindContextForMobile(this), 500);

        e.gesture.preventDefault();
    },

    toggleActionsVisibility: function(e){
//        e.gesture.preventDefault();
        e.preventDefault();
        e.stopPropagation();
        this.disableLinks();
        setTimeout(this.enableLinks.bindContextForMobile(this), 500);
//        setTimeout(function(){
        this.toggleClass(this.element, 'quick-actions-hidden');
//        }.bindContextForMobile(this), 100);
        return false;
    },

    setInitZoom: function(){
        this.initZoom = MobileUtils.getScreenWidth() / document.body.offsetWidth;
        return this.initZoom;
    },

    fixZoom: function(){
        if(!this.initZoom || this.initZoom < 0 || this.initZoom > 5){
            this.setInitZoom();
        }
        this.element.style.zoom = this.initZoom / this.getZoom();
    },

    getZoom: function(){
        var screenWidth = (Math.abs(window.orientation) === 90) ? Math.max(screen.height, screen.width) : Math.min(screen.height, screen.width);
        return (screenWidth / window.innerWidth);
    },

    isMultiTouch: function(e){
        return e.touches.length > 1;
    },

    _setHref: function(elementId, newRef){
        var refElement = document.getElementById(elementId);
        if (refElement){
            refElement.href = newRef;
        }
    },

    enableLinks: function(){
        var bottom = window.getComputedStyle(this.element, null).getPropertyValue("bottom");
        var isHidden = parseInt(bottom, 10);
        if (!isHidden){
            this.isLinksEnabled = true;
        }
    },

    disableLinks: function(){
        this.isLinksEnabled = false;
    },

    openSocial: function(){
        var socialLinks = document.getElementById("quick-actions-social-links");
        var index = socialLinks.selectedIndex;
        if(index === 0 ) {
            return;
        }
        var selectedLink = socialLinks.options[index].value;
        // set position back to the first element
        this._resetSocialLinksPosition();
        // redirect since new window onchage is treated as popup
        window.location.href = selectedLink;
    },

    _resetSocialLinksPosition: function () {
        setTimeout(function(){
            var socialLinks = document.getElementById("quick-actions-social-links");
            if (socialLinks) {
                socialLinks.selectedIndex = 0;
                socialLinks.options[0].selected = true;
            }
        }, 1000);
    },

    /**
     * Helper functions
     */

    hasClass: function(el, name){
        return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
    },

    addClass: function(el, name){
        if (!this.hasClass(el, name)){
            el.className += (el.className ? ' ' : '') + name;
            return true;
        }
    },

    removeClass: function(el, name){
        if (this.hasClass(el, name)){
            el.className = el.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
            return true;
        }
    },

    toggleClass: function(el, name){
        var classRemoved = this.removeClass(el, name);
        if (!classRemoved){
            this.addClass(el, name);
        }
    },

    _fixSocialLinkNames:function(){
        var socialNameMap = {
            'See me on...':'See me on...',
            'facebook':'Facebook',
            'twitter':'Twitter',
            'pinterest':'Pinterest',
            'google_plus':'Google+',
            'tumblr':'Tumblr',
            'blogger':'Blogger',
            'linkedin':'LinkedIn',
            'youtube':'YouTube',
            'vimeo':'Vimeo',
            'flickr':'Flickr'
        };

        var socialLinks = document.getElementById("quick-actions-social-links");
        if (socialLinks){
            var options = socialLinks.options;
            for(var i=0; i<options.length; i++){
                var option = options[i];
                var key = option.innerHTML;
                var value = socialNameMap[key];
                option.innerHTML = value;
            }
        }
    }
};