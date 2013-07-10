define.oldSkin({
    name: 'wysiwyg.viewer.skins.dropmenubutton.VerticalRibbonsMenuButtonNSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _params: [
            {'id':'txt',  'type':Constants.SkinParamTypes.COLOR,'defaultTheme':'color_15'},
            {'id':'txth',  'type':Constants.SkinParamTypes.COLOR,'defaultTheme':'color_15'},
            {'id':'txts',  'type':Constants.SkinParamTypes.COLOR,'defaultTheme':'color_15'},
            {'id':'fnt',  'type':Constants.SkinParamTypes.FONT,'defaultTheme':'font_1'},
            {'id':'bgh', 'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_17'},
            {'id':'bgs', 'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_18'},
            {'id':'pad', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '5px'},
//            {'id':'els', 'type':Constants.SkinParamTypes.SIZE, mutators: ['increase', 10], 'defaultValue': '0', 'lang':'fold'},

            {'id':'elmOver',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultParam':'bgh', 'mutators':['luminous',70], 'noshow':true},
            {'id':'elmSelected',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultParam':'bgs', 'mutators':['luminous',70], 'noshow':true},
            {'id':'els', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '10', 'noshow':true},
            {'id':'bgDrop', 'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_11'},
            {'id':'ribbonShd','type':Constants.SkinParamTypes.BOX_SHADOW, 'noshow':true, 'defaultValue':'2px 0 2px 0 rgba(0, 0, 0, 0.2);'},
            {'id':'trans','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'background-color 0.2s ease 0s'},
            {'id':'trans1','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'background-color 0.2s ease 0s, top 0.2s ease 0s, bottom 0.2s ease 0s'},
            {'id':'trans1R','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'background-color 0.2s ease 0s, top 0.2s ease 0s, bottom 0.2s ease 0s'},
            {'id':'trans2','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'color 0.2s ease 0s'},
//            {'id':'trans2R','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'color 0.1s ease 0.1s'},
            {'id':'trans3','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'border-width 0.2s ease 0.2s'}
//            {'id':'trans3R','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'border-width 0.1s ease 0s'}
        ],
        _html:
            '<div class="bgWrapper">' +
                '<div class="ribbon"></div>' +
                '<div class="fold top"></div><div class="fold bottom"></div>' +
            '</div>' +
                '<div skinPart="bg"><p skinPart="label"></p></div>',
        _css: [
            '{ cursor:pointer; display:inline-block; padding-left:[pad]; }',
            '%bg% { margin: 0 [els]; }',
            '%label% { position:relative; display:inline-block; padding: 0px 0.5em; [fnt] color:[txt]; [trans2R] }',

            '%.bgWrapper% { position:absolute; top:0; bottom:0; left:[pad]; right:0; }',
            '%.ribbon% { background-color:transparent; position:absolute; top:[els]; bottom:[els]; left:[els]; right:[els]; [trans1R] }',
            '%.fold% { position:absolute; margin-left:0;  width:0; height:0; border:solid 0px transparent; border-left-width:[els]; }',
            '%.top% { position:absolute; top:0; left:0; border-bottom:solid 0 [elmOver]; [trans3R] }',
            '%.bottom% { position:absolute; bottom:0; left:0; border-top:solid 0 [elmOver]; [trans3R] }',

            // ===> the buttons on the drop down menu  <====
            '[container=drop] { width:100%; display:block; padding:0; }',
            '[container=drop] %.bgWrapper% { display:none; }',
            '[container=drop] %bg% { [bgDrop] [trans] margin:0; }',
            // hover & selected, drop down
            '[container=drop][state=over] %bg% { [bgh] [trans] }',
            '[container=drop][state=selected] %bg% { [bgs] [trans] }',


            // hover
            '[state=over] %.ribbon% { [ribbonShd] [bgh] top:0; bottom:0; [trans1] }',
            '[state=over] %.top% { border-bottom-width:[els]; border-bottom-color:[elmOver]; [trans3] }',
            '[state=over] %.bottom% { border-top-width:[els]; border-top-color:[elmOver]; [trans3] }',
            '[state=over] %label% { color:[txth]; [trans2] }',
            // selected
            '[state=selected] %.ribbon% { [ribbonShd] [bgs] top:0; bottom:0; [trans1] }',
            '[state=selected] %.top% { border-bottom-width:[els]; border-bottom-color:[elmSelected]; [trans3] }',
            '[state=selected] %.bottom% { border-top-width:[els]; border-top-color:[elmSelected]; [trans3] }',
            '[state=selected] %label% { color:[txts]; [trans2] }'
        ]
    }
});