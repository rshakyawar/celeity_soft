define.oldSkin({
    name: 'wysiwyg.viewer.skins.dropmenu.VerticalRibbonsMenuNSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        compParts: {
            'repeaterButton':{ skin:'wysiwyg.viewer.skins.dropmenubutton.VerticalRibbonsMenuButtonNSkin', styleGroup:'inherit' },
            'moreButton':{ skin:'wysiwyg.viewer.skins.dropmenubutton.VerticalRibbonsMenuButtonNSkin', styleGroup:'inherit' }
        },
        _params: [
            {'id':'bg',  'type':Constants.SkinParamTypes.BG_COLOR,'defaultTheme':'color_11'},
            //{'id':'rd',  'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue':'10px'},
            {'id':'bgDrop', 'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_11'},

            {'id':'els', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '10', 'noshow':true},
            {'id':'boxModel', 'type':Constants.SkinParamTypes.OTHER, 'defaultValue':'-moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box;'},
            {'id':'gapFromMenu', 'type':Constants.SkinParamTypes.OTHER, 'defaultValue':'7px'},
            {'id':'shd', 'type':Constants.SkinParamTypes.BOX_SHADOW, 'defaultValue':'0 2px 3px rgba(0, 0, 0, 0.7);'}
        ],
        _html:
                '<div class="bar"></div>' +
                '<div skinPart="itemsContainer"></div>' +
                '<div skinPart="moreButton"></div>' +
                '<div skinPart="dropWrapper"><div skinPart="moreContainer"></div></div>',

        _css: [
            '%.bar% { position:absolute; top:[els]; bottom:[els]; left:0; right:0; [bg][shd]}',
            '%itemsContainer% { position:relative; overflow:hidden; }',

            '%dropWrapper% { visibility:hidden; position:absolute; margin-top:[gapFromMenu]; [boxModel] }',
            '%dropWrapper%[dropMode=dropUp] { margin-top:0; margin-bottom:[gapFromMenu]; }',
            '%moreContainer% { [bgDrop][shd] }'
        ]
    }
});