define.oldSkin({
    name: 'wysiwyg.viewer.skins.line.VerticalDottedLine',
    Class: { Extends:'mobile.core.skins.BaseSkin',
        _params: [
            {'id':'lnw', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '3px'},
            {'id':'mrg', 'type':Constants.SkinParamTypes.SIZE, 'mutators':['multiply', -0.5], 'defaultParam': 'lnw'},
            {'id':'brd','type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'}
        ],
        _html:  '<div skinPart="line"></div>',
        _css: [ '{  border-left:[lnw] dotted [brd]; margin-left:[mrg];  width:0 !important; min-width:0 !important;}' ]
    }
});