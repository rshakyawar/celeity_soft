define.oldSkin({
    name: 'wysiwyg.viewer.skins.line.SolidLine',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _params: [
            {'id':'lnw', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '2px'},
            //{'id':'mrg', 'type':Constants.SkinParamTypes.SIZE, 'mutators':['multiply', -0.5], 'defaultParam': 'lnw'},
            {'id':'brd','type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'}
        ],
        _html:
            '<div skinPart="line"></div>',
        _css: [ '{  border-bottom:[lnw] solid [brd]; height:0 !important; min-height:0 !important;}' ]
    }
});