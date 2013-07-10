define.oldSkin({
    name: 'wysiwyg.viewer.skins.page.TransparentPageSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _params: [
            {'id':'pos','type':Constants.SkinParamTypes.OTHER, 'defaultValue':'position:absolute; top:0; bottom:0; left:0; right:0;'}
        ],
        _html: '<div skinPart="bg"></div><div skinPart="inlineContent"></div>',
        _css: [

            '%bg% {[pos]}',
            '%inlineContent% {[pos]}'
        ]
    }
});

