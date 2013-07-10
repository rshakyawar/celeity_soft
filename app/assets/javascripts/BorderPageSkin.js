define.oldSkin({
    name: 'wysiwyg.viewer.skins.page.BorderPageSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _params: [

            {'id':'bg','type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_11'},
            {'id':'brd',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'},
            {'id':'brw', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '1px'},
            {'id':'rd', 'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '5px'},
            {'id':'shd','type':Constants.SkinParamTypes.BOX_SHADOW, 'defaultValue':'0 1px 4px rgba(0, 0, 0, 0.6);'},

            {'id':'pos','type':Constants.SkinParamTypes.OTHER, 'defaultValue':'position:absolute; top:0; bottom:0; left:0; right:0;'}
        ],
        _html: '<div skinPart="bg"></div><div skinPart="inlineContent"></div>',
        _css: [

            '%bg% {border:[brw] solid [brd];[pos][bg][rd][shd] }',
            '%inlineContent% {[pos] bottom:20px;}'
        ]
    }
});

