//noinspection JSHint
W.Apps.registerAppDescriptor({
	id: 'e4c4a4fb-673d-493a-9ef1-661fa3823ad7',
    packageName: "menu",
    "name": "Restaurant Menu",
	"appIcon": "images/menu-icon.png",
	"pictures": [
		"images/menu-screen-1.jpg",
		"images/menu-screen-2.jpg",
		"images/menu-screen-3.jpg"
	],
	"description": "@MENU_MAIN_APP_DESCRIPTION@",
    "version": 1,
	helpId: '/node/8298',
    "parts": [
        {
            "id": "1660c5f3-b183-4e6c-a873-5d6bbd918224",
            "name": "@MENU_PARTS_NAME@",
            "description": "@MENU_PARTS_DESCRIPTION@",
	        "widgetIcon": "images/menu-icon.png",
	        "pictures": [],
		    defaultWidth: 400, defaultHeight: 100,
	        allowRtl: true,
	        "logic": {
                "display": { "type": "wixapps.core.logics.TwoLevelCategoryLogic", "options": { "collectionId": "Menus", "itemId": "SampleMenu1" } },
                "seo": { "type": "SingleItem", "options": { "collectionId": "Menus", itemId: 'SampleMenu1' } }
            },
            "views": [ "Center", "Left", "Inline", "LeftImage", "LeftThumb", "Gallery" ]
        }
    ],
    "viewDescriptions": [
        {
            "id": "Center",
            "name": "@MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME@",
            "description": "Centered menu without images",   // dont't xl8
            "icon": "generalviews/list-center.png"
        },
        {
            "id": "Left",
            "name": "@MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME@",
            "description": "Left aligned menu with large images",       // dont't xl8
            "icon": "generalviews/list-left.png"
        },
        {
            "id": "LeftThumb",
            "name": "@MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME@",
            "description": "Left aligned menu with small images",       // dont't xl8
            "icon": "generalviews/list-thumb.png"
        },
	    {
		    "id": "LeftImage",
		    "name":"@MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME@" ,
		    "description": "Menu with large images",       // dont't xl8
		    "icon": "generalviews/list-image.png"
	    },
	    {
            "id": "Gallery",
            "name": "@MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME@",
            "description": "Menu items presented in a gallery",      // dont't xl8
            "icon": "generalviews/matrix.png"
        },
	    {
		    "id": "Inline",
		    "name": "@MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME@",
		    "description": "Will present the full items without images with title and description inline",      // dont't xl8
		    "icon": "generalviews/list-inline.png"
	    }
    ],
    "links": [],
    "collections": [
        { "id": "Menus", "allowedTypes": [ "Menu" ], "name": "Menus" },
        { "id": "Sections", "allowedTypes": [ "Section" ], "name": "Sections" },
        { "id": "Items", "allowedTypes": [ "Item" ], "name": "Items" }
    ],
    "types": [
        {
            "_iid": "Menu",
            "_type": "wix:Type",
            "fields": [
                { "_type": "wix:Field", "name": "title", "type": "String", "defaultValue": "",validations: [{func:'minLength', params:[2]}] },
                { "_type": "wix:Field", "name": "description", "type": "String", "defaultValue": "" },
                { "_type": "wix:Field", "name": "items", "type": "Array<wix:Ref<Section>, wix:Ref<Item>>", "defaultValue": [] }
            ],
            permissions: { '*': { "Read": "Anonymous", "Create": "SiteOwner", "Update": "SiteOwner", Delete: 'SiteOwner' }  }
        },
        {
            "_iid": "Section",
            "_type": "wix:Type",
            "fields": [
                { "_type": "wix:Field", "name": "title", "type": "String", "defaultValue": "" ,validations: [{func:'minLength', params:[2]}]},
                { "_type": "wix:Field", "name": "description", "type": "String", "defaultValue": "" },
	            { "_type": "wix:Field", "name": "image", "type": "wix:Image", "defaultValue": { "_type": "wix:Image", "title": "Default image", "src": "2f7b76_0a5a22e60c65e780a8ea73b49d1893a4.png", "width": 1280, "height": 960 } },
	            { "_type": "wix:Field", "name": "items", "type": "Array<wix:Ref<Item>>", "defaultValue": [] },
	            { "_type": "wix:Field", "name": "parentRef", "type": "wix:Ref<Menu>", "defaultValue": {_type:"wix:Ref", collectionId: 'VOID_REF', itemId: 'VOID_REF' } }
            ],
            permissions: { '*': { "Read": "Anonymous", "Create": "SiteOwner", "Update": "SiteOwner", Delete: 'SiteOwner' }  }
        },
        {
            "_iid": "Item",
            "_type": "wix:Type",
            "fields": [
                { "_type": "wix:Field", "name": "title", "type": "String" ,validations: [{func:'minLength', params:[2]}]},
                { "_type": "wix:Field", "name": "description", "type": "String", "defaultValue": "" },
                { "_type": "wix:Field", "name": "image", "type": "wix:Image", "defaultValue": { "_type": "wix:Image", "title": "Default image", "src": "2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png", "width": 1280, "height": 960 } },
                { "_type": "wix:Field", "name": "price", "type": "String", "defaultValue": "" },
                { "_type": "wix:Field", "name": "parentRefs", "type": "Array<wix:Ref<Section>, wix:Ref<Menu>>", "defaultValue": [] }
            ],
            permissions: { '*': { "Read": "Anonymous", "Create": "SiteOwner", "Update": "SiteOwner", Delete: 'SiteOwner' }  }
        }
    ],
    dataEditing: {
	    logicParams: {
		    dataSelection: {
                    noCategoriesLabel: "@DATA_EDITING_NO_CATEGORIES_LABEL@",
                    addFirstCategoryLabel: "@DATA_EDITING_ADD_FIRST_CATEGORY_LABEL@",
                    anotherCategoryLabel: "@DATA_EDITING_ANOTHER_CATEGORY_LABEL@",
                    inlineHelp: "@DATA_EDITING_INLINE_HELP@",
                    newItemType: "Menu",
                    newItemCollection: "@DATA_EDITING_NEW_ITEM_COLLECTION@",
                    topLevelItemType: "@DATA_EDITING_TOP_LEVEL_ITEM_TYPE@",
                    midLevelItemType: "Section",
                    topLevelCollection: "@DATA_EDITING_TOP_LEVEL_COLLECTION@",
                    midLevelCollection: "@DATA_EDITING_MIDLEVEL_COLLECTION@",

                    //categoriesSelectionFilter: null,
                    categoriesSelectionSort: { title: 1 },
                    //categoriesSelectionSkip: null,
                    //categoriesSelectionLimit: null,


                    newItemOverrides: { title: "@NEW_ITEM_OVERRIDES_TITLE@", description: "@NEW_ITEM_OVERRIDES_DESCRIPTION@" },
                    newItemErrorTitle: "@NEW_ITEM_ERROR_TITLE@",
                    newItemErrorDescription: "@NEW_ITEM_ERROR_DESCRIPTION@"
		    }
	    },
	    dataSelectionLabel:"@DATA_SELECTION_LABEL@",
	    dataEditingLabel:"@DATA_EDITING_LABEL@",
	    helpId: '/node/8746',
        itemEditingHelpId: '/node/8746',
        categories: [
            {
                "name": "@DATA_EDITING_CATEGORIES_ALL_MENUS@",
                "newTypes": [ "Menu" ],
                "height":300,
                "items": [
                    { "type": "tree", "name": "Menu tree", treeId: 'menuTree' }
                ]
            },
            {
                "name": "@DATA_EDITING_CATEGORIES_SECTIONS@",
	            "newTypes": [  ],
	            "items": [
                    { "type": "query", "name": "@DATA_EDITING_CATEGORIES_ALL_SECTIONS@", "collectionId": "Sections", "filter": {}, "sort": {"title":1}, "skip": 0, "limit": -1, "isDefault":true ,defaultChildType: 'Section', noResultsMessage: "@DATA_EDITING_NO_SECTIONS_DEFINED@" }, // use allowedChildTypes:['Section', 'Item'] to allow multiple
                    { "type": "query", "name": "@DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS@", "collectionId": "Sections", "filter": {'parentRef.itemId':'VOID_REF'}, "sort": {"title":1}, "skip": 0, "limit": -1 ,defaultChildType: 'Section', noResultsMessage: "@DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS@"}
                ]
            },
            {
                "name": "@DATA_EDITING_CATEGORIES_DISHES@",
	            "newTypes": [  ],
	            "items": [
                    { "type": "query", "name": "@DATA_EDITING_CATEGORIES_ALL_DISHES@", "collectionId": "Items", "filter": {}, "sort": {"title":1}, "skip": 0, "limit": -1, "isDefault":true ,defaultChildType: 'Item', noResultsMessage: "@DATA_EDITING_CATEGORIES_NO_DISHES@"},
                    { "type": "query", "name": "@DATA_EDITING_CATEGORIES_HIDDEN_DISHES@", "collectionId": "Items", "filter": {"parentRefs":{"$size":0}}, "sort": {"title":1}, "skip": 0, "limit": -1 ,defaultChildType: 'Item', noResultsMessage: "@DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES@"}
                ]
            }
        ],
	    trees: {
			menuTree: { collectionId: "Menus", includedTypes: ["Menu","Section"], topLevelSorting: { title:1 } }
	    },
	    typeMetaData: {
		    Item: {
                friendlyName:'@TYPE_META_DATA_DISH@',
                validationMessages:{
                  title:'@TYPE_META_DATA_DISH_VALIDATION@'
                },
			    newItemTemplate: {
				    _type: "Item",
				    title: "",
				    description: "",
				    price: "",
				    parentRefs: []
			    },
			    parentField: 'parentRefs',
			    parentsTreeId: 'menuTree',
			    collectionId: 'Items'
		    },
		    Section: {
                friendlyName:'@TYPE_META_DATA_SECTION@',
                validationMessages:{
                  title:'@TYPE_META_DATA_SECTION_VALIDATION@'
                },
			    newItemTemplate: {
				    _type: 'Section',
				    title: "",
				    description: "",
				    items: []
			    },
			    childrenField: 'items',
			    parentField: 'parentRef',
			    parentsTreeId: 'menuTree',
			    collectionId: 'Sections',
			    noChildrenMessage: "@TYPE_META_DATA_EMPTY_SECTION@"
		    },
		    Menu: {
                friendlyName:'@TYPE_META_DATA_MENU@',
                validationMessages:{
                  title:'@TYPE_META_DATA_MENU_VALIDATION@'
                },
			    newItemTemplate: {
					_type: "Menu",
					title: "",
					description: "",
					items: []
				},
			    childrenField: 'items',
			    parentField: 'parentRef',
			    parentsTreeId: 'menuTree',
			    collectionId: 'Menus',
			    noChildrenMessage: "@TYPE_META_DATA_EMPTY_MENU@"
		    }
	    }
    },
    "preLoadedData": {
        "Items": [
			{
		        "_iid" : "2D3807BB-D954-48B7-A261-145B160629B1",
		        "_type" : "Item",
		        "title" : "I'm a dish.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text. I'm a great place to say how delicious I am so your customers will want to eat me.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection4"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_13ac2d6d51698048912e81166fbabace.jpg",
			        "width" : 400,
			        "height" : 300
		        }
		    },
	        {
		        "_iid" : "4E991DCC-BE76-4F7E-9513-C954A2CFA26C",
		        "_type" : "Item",
		        "title" : "I'm a dish.",
		        "description" : "",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection1"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "Default image",
			        "src" : "2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png",
			        "width" : 1280,
			        "height" : 960
		        }
		    },
	        {
		        "_iid" : "51511FD3-5E45-4F26-AB4B-28B8C7218A6F",
		        "_type" : "Item",
		        "title" : "I'm a dish.",
		        "description" : "",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection1"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "Default image",
			        "src" : "2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png",
			        "width" : 1280,
			        "height" : 960
		        }
		    },
	        {
		        "_iid" : "6FB1F211-1E0E-47AA-AB8C-04046CD13C3E",
		        "_type" : "Item",
		        "title" : "I'm a dish.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text. I'm a great place to say how delicious I am so your customers will want to eat me.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection4"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_f09995d80376386f8b02e668822b7415.jpg",
			        "width" : 400,
			        "height" : 300
		        }
		    },
	        {
		        "_iid" : "83213601-BA0D-4A13-8616-79A7D1C3C50F",
		        "_type" : "Item",
		        "title" : "I'm a dish. Eat me.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection5"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_5c2e5b8ae80aeaf4396a5c7a15d073ac.jpg",
			        "width" : 591,
			        "height" : 591
		        }
		    },
	        {
		        "_iid" : "F29349A4-B687-4595-9B8C-AD6A12C35DF4",
		        "_type" : "Item",
		        "title" : "I'm a dish. Click to edit me.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection5"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_41c2a9575c4fceff6a08af72109b73b1.jpg",
			        "width" : 506,
			        "height" : 338
		        }
		    },
	        {
		        "_iid" : "FBE820B5-7457-4D90-8A17-E3947E736272",
		        "_type" : "Item",
		        "title" : "I'm a dish. Drink me.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection3"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "Default image",
			        "src" : "2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png",
			        "width" : 1280,
			        "height" : 960
		        }
		    },
	        {

		        "_iid" : "SampleItem1",
		        "_type" : "Item",
		        "title" : "I'm a dish. Click to edit me.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text. I'm a great place to say how delicious I am so your customers will want to eat me.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection4"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_94f56aee5d9cfe22fbaa71a368afa0fe.jpg",
			        "width" : 400,
			        "height" : 300
		        }
		    },
	        {

		        "_iid" : "SampleItem4",
		        "_type" : "Item",
		        "title" : "I'm a dish. Order me.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection4"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_8fd32894d9ed4fe2b1ebc0fd619a26c7.jpg",
			        "width" : 400,
			        "height" : 300
		        }
		    },
	        {

		        "_iid" : "SampleItem5",
		        "_type" : "Item",
		        "title" : "I'm a dish. Click to edit me.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection3"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "Default image",
			        "src" : "2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png",
			        "width" : 1280,
			        "height" : 960
		        }
		    },
	        {

		        "_iid" : "SampleItem6",
		        "_type" : "Item",
		        "title" : "I'm a dish. Drink me.",
		        "description" : "I'm a dish description. Click \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "price" : "$9.99",
		        "parentRefs" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection1"
		        }],
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "Default image",
			        "src" : "2f7b76_f3e0b18a805017bb5c34c633f3fd93bc.png",
			        "width" : 1280,
			        "height" : 960
		        }
		    }
        ],
        "Sections": [
	        {
		        "_iid" : "SampleSection1",
		        "_type" : "Section",
		        "title" : "I'm a menu section.",
		        "description" : "",
		        "items" : [{
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "51511FD3-5E45-4F26-AB4B-28B8C7218A6F"
		        }, {
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "SampleItem6"
		        }, {
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "4E991DCC-BE76-4F7E-9513-C954A2CFA26C"
		        }],
		        "parentRef" : {
			        "_type" : "wix:Ref<Menu>",
			        "collectionId" : "Menus",
			        "itemId" : "SampleMenu2"
		        },
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_f0eb00fce4cff3e88405d8e0819b5517.jpg",
			        "width" : 1000,
			        "height" : 250
		        }
	        },
	        {
		        "_iid" : "SampleSection3",
		        "_type" : "Section",
		        "title" : "I'm a menu section.",
		        "items" : [{
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "SampleItem5"
		        }, {
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "FBE820B5-7457-4D90-8A17-E3947E736272"
		        }],
		        "parentRef" : {
			        "_type" : "wix:Ref<Menu>",
			        "collectionId" : "Menus",
			        "itemId" : "SampleMenu2"
		        },
		        "description" : "",
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_cbbde4b93c1f859263af76a36ea63859.jpg",
			        "width" : 1000,
			        "height" : 250
		        }	        },
	        {
		        "_iid" : "SampleSection4",
		        "_type" : "Section",
		        "title" : "I'm a menu section.",
		        "items" : [{
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "SampleItem1"
		        }, {
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "SampleItem4"
		        }, {
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "6FB1F211-1E0E-47AA-AB8C-04046CD13C3E"
		        }, {
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "2D3807BB-D954-48B7-A261-145B160629B1"
		        }],
		        "parentRef" : {
			        "_type" : "wix:Ref<Menu>",
			        "collectionId" : "Menus",
			        "itemId" : "SampleMenu1"
		        },
		        "description" : "I'm a description. Click me and \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_964cc8d764266ce878cfaf06d21f7c1e.jpg",
			        "width" : 1000,
			        "height" : 250
		        }
	        },
	        {
		        "_iid" : "SampleSection5",
		        "_type" : "Section",
		        "title" : "I'm a menu section.",
		        "items" : [{
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "F29349A4-B687-4595-9B8C-AD6A12C35DF4"
		        }, {
			        "_type" : "wix:Ref<Item>",
			        "collectionId" : "Items",
			        "itemId" : "83213601-BA0D-4A13-8616-79A7D1C3C50F"
		        }],
		        "parentRef" : {
			        "_type" : "wix:Ref<Menu>",
			        "collectionId" : "Menus",
			        "itemId" : "SampleMenu1"
		        },
		        "description" : "",
		        "image" : {
			        "_type" : "wix:Image",
			        "title" : "",
			        "src" : "2f7b76_9df199422501d9cfe7ec8aa161f3a1fc.jpg",
			        "width" : 1000,
			        "height" : 250
		        }
	        }
        ],
        "Menus": [
	        {
		        "_iid" : "SampleMenu1",
		        "_type" : "Menu",
		        "title" : "I'm a menu title 1",
		        "description" : "I'm a description for a section of your menu. Click me and then Menu\" to open the Restaurant Menu editor and change my text.",
		        "items" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection4"
		        }, {
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection5"
		        }]
	        },
	        {
		        "_iid" : "SampleMenu2",
		        "_type" : "Menu",
		        "title" : "I'm a menu title 2",
		        "description" : "I'm a menu description. Click me and then \"Edit Menu\" to open the Restaurant Menu editor and change my text.",
		        "items" : [{
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection1"
		        }, {
			        "_type" : "wix:Ref<Section>",
			        "collectionId" : "Sections",
			        "itemId" : "SampleSection3"
		        }]
	        }
        ]
    },
    "views": [
        {
            "forType": "Menu",
            "name": ["Center",'Left','LeftThumb','LeftImage','Gallery','Inline'],
	        id: 'wholeMenu',
            comp: {
                "name": "VBox",
                "items": [
                    { "data": "title", comp: { name: "Label" } },
                    { "data": "description", comp: { name: "Label" } },
                    { "data": "items", comp: { name: "VerticalList", "isStyleEditable":"false", templates: { item: {} }}, layout: { spacerBefore: 40 } }
                ]
            },
	        "customizations":[
//		        { priority: 30, "fieldId": "wholeMenu", "mode": "*", "key": "comp.cssClass", "input":{"name":"textfield","label":"Css class" } }
                /*{ priority: 30, "fieldId": "wholeMenu", "mode": "*", "key": "comp.css.direction", "input":{"name":"radioimages","label":"Text Direction",defaultVal:'inherit',"options":[
                    {value: 'inherit',   image: 'radiobuttons/radio_button_states.png', dimensions: {w: '35px', h: '33px'}, icon: 'radiobuttons/alignment/left.png'},
                    {value: 'rtl',  image: 'radiobuttons/radio_button_states.png', dimensions: {w: '35px', h: '33px'}, icon: 'radiobuttons/alignment/right.png'}
                ]} }*/
	        ]
        },
        {
            "forType": "Section",
            "name": ["CenterUnderMenu","LeftUnderMenu",'LeftThumbUnderMenu','LeftImageUnderMenu','GalleryUnderMenu','InlineUnderMenu'],
            "comp": {
                "name": "VBox",
                "items": [
	                { id: 'sectionView', layout: { spacerAfter:25 } },
		            { id: 'h-line', comp: { name: 'HorizontalLine', style: 'hl2' }, layout: { width: '100%', spacerAfter:35 } }
//	                { comp: { name: 'Css', css:{"text-align": "center" }, items: [
//		                { id: 'h-line', comp: { name: 'HorizontalLine', style: 'hl2' }, layout: { width: "100%", display: "inline-block" } }
//	                ] }, layout: { spacer: 20 } }
                ]
            },
	        "customizations":[
//		        {"fieldId": "h-line", "mode": "*", "key": "layout.width", "input":{"name":"slider", unit:'%',"label":"Section separator width","minVal":0,"maxVal":100} }
		        { priority: 10, fieldId: "h-line", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show section separator",trueVal:false,falseVal:true,defaultVal:false } }
	        ]
        },
	    {
            "forType": "Section",
            "name": ['Center','Left','LeftThumb','LeftImage','Inline'],
            "comp": {
                "name": "VBox",
                "items": [
                    { "data": "title", comp: { name: "Label" } },
                    { "data": "description", comp: { name: "Label" } },
                    { "data": "image", comp: { name: "Image", imageMode: 'fill'}, layout: { height: 120, spacerBefore:10 } },
	                { "data": "items", comp: { name: "VerticalList", "isStyleEditable":"false" }, layout: { spacerBefore: 25 } }
                ]
            },
		    "customizations":[
                { priority: 11, fieldId: "image", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show section image",trueVal:false,falseVal:true,defaultVal:false } },
			    { priority: 12, "fieldId": "image", "mode": "*", "key": "layout.height", "input":{"name":"slider","label":"Section image height","minVal":80,"maxVal":450} }
//                { fieldId: "image", "mode": "*", "key": "comp.imageMode", "input":{"name":"combobox","label":"Image mode",
//                    "options":[
//                        { value: 'fill', label: 'Fill' },
//                        { value: 'full', label: 'Full' },
//                        { value: 'stretch', label: 'Stretch' },
//                        { value: 'fitWidth', label: 'Fit Width' },
//                        { value: 'fitHeight', label: 'Fit Height' }
//                    ]
//                }}
            ]
        },
	    {
		    "forType": "Item",
		    "name": 'InlineUnderMenu',
		    "comp": { name: 'Inline' }
	    },
	    {
		    "forType": "Item",
		    "name": "Inline",
		    "comp": {
			    name: 'VBox', items: [
				    { comp: { name: 'HBox', items: [
					    { comp: { name: 'Css', items: [
						    { "data": "title", comp: { name: 'InlineText' } },
						    { id: 'spc1', comp: { name: 'InlineSpacer', size: 5 } },
						    { "data": "description", comp: { name: 'InlineText' } }
					    ]}, layout: { 'box-flex': 1, 'white-space': 'normal' }},
					    { "data": "price", comp: { name: "Label" }, layout: { spacerBefore:10 } }
				    ]}},
				    { id: 'item-spacer' }
			    ]
		    },
		    "customizations":[
			    { priority: 9, fieldId: "description", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish description",trueVal:false,falseVal:true,defaultVal:false } },
			    { priority: 8, fieldId: "price", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish price",trueVal:false,falseVal:true,defaultVal:false } },
			    { priority: 7, "fieldId": "item-spacer", "mode": "*", "key": "comp.size", "input":{"name":"slider","label":"Item spacing","minVal":0,"maxVal":300} },
			    { priority: 6, "fieldId": "spc1", "mode": "*", "key": "comp.size", "input":{"name":"slider","label":"Title and description spacing","minVal":0,"maxVal":50} }
		    ]
	    },
	    {
		    "forType": "Item",
		    "name": 'CenterUnderMenu',
		    "comp": { name: 'Center' }
	    },

        {
            "forType": "Item",
            "name": "Center",
            "comp": {
                "name": "VBox",
                "items": [
                            { comp: { name: 'Css', items: [
                                { data: "title", comp: { "name": "InlineText" } },
                                { comp: { "name": "InlineSpacer", size: 10 } },
                                { data: "price", comp: { "name": "InlineText" } }
                            ]}, "layout": { "white-space": "normal", "text-align": "center"  }},
                    { data: "description", comp: { name: "Label" }, "layout": { "text-align": "center", spacerBefore: 3 } },
                    { id: 'item-spacer' }
                ]
            },
	        "customizations":[
		        { priority: 9, fieldId: "description", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish description",trueVal:false,falseVal:true,defaultVal:false } },
		        { priority: 8, fieldId: "price", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish price",trueVal:false,falseVal:true,defaultVal:false } },
		        { priority: 7, "fieldId": "item-spacer", "mode": "*", "key": "comp.size", "input":{"name":"slider","label":"Item spacing","minVal":0,"maxVal":300} }
	        ]
        },

        {
            "forType": "Item",
            "name": 'LeftUnderMenu',
            "comp": { name: 'Left' }
        },
        {
            "forType": "Item",
            "name": "Left",
            "comp": { name: 'HBox', "box-align": "left", items: [
                { comp: { name: 'VBox', items: [
                    { data: 'title', comp: { name: "Label" } },
	                { data: 'description', comp: { name: "Label" }, layout: { spacerBefore:3 } },
		            { id: 'item-spacer' }
                ] }, layout: { 'box-flex': 1 }},
	            { data: 'price', comp: { name: "Label" }, layout: { spacerBefore:10 } }
            ]},
	        "customizations":[
		        { priority: 9, fieldId: "description", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish description",trueVal:false,falseVal:true,defaultVal:false } },
		        { priority: 8, fieldId: "price", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish price",trueVal:false,falseVal:true,defaultVal:false } },
		        { priority: 7, "fieldId": "item-spacer", "mode": "*", "key": "comp.size", "input":{"name":"slider","label":"Item spacing","minVal":0,"maxVal":300} }
	        ]
        },
	    {
		    "forType": "Item",
		    "name": 'LeftThumbUnderMenu',
		    "comp": { name: 'LeftThumb' }
	    },
	    {
            "forType": "Item",
            "name": "LeftThumb",
            "comp": { name: 'VBox', items: [
	            { comp: { "name": "HBox", "items": [
                    { "data": "image", "comp": { name: "Image", imageMode: 'fill' }, layout: { spacerAfter: 10, width: 75, height: 57 } },
		            { comp: { name: 'VBox', items: [ { data: 'title', comp: { name: "Label" }, layout: { spacer: '*' } } ] }, layout: { 'box-flex': 1 } },
		            { comp: { name: 'VBox', items: [ { data: 'price', comp: { name: "Label" }, layout: { spacer: '*' } } ] }, layout: { spacerBefore:10 } }
                ]}},
	            { data: 'description', comp: { name: "Label", hidden: true }, layout: { spacerBefore: 10 } },
	            { id: 'h-line', comp: { name: 'HorizontalLine', style: 'hl2' }, layout: { width: '100%', spacer:10 } }
            ]},
	        "customizations":[
		        { priority: 9, fieldId: "description", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish description",trueVal:false,falseVal:true,defaultVal:false } },
		        { priority: 8, fieldId: "price", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish price",trueVal:false,falseVal:true,defaultVal:false } },
		        { priority: 7, "fieldId": "image", "mode": "*", "key": "layout.width", "input":{"name":"slider","label":"Item's thumb width","minVal":25,"maxVal":100 } },
		        { priority: 6, "fieldId": "image", "mode": "*", "key": "layout.height", "input":{"name":"slider","label":"Item's thumb height","minVal":25,"maxVal":75 } },
		        { priority: 5, "fieldId": "h-line", "mode": "*", "key": "layout.spacer", "input":{"name":"slider","label":"Item spacing","minVal":0,"maxVal":300} }
	        ]
        },
	    {
		    "forType": "Item",
		    "name": 'LeftImageUnderMenu',
		    "comp": { name: 'LeftImage' }
	    },
	    {
		    "forType": "Item",
		    "name": "LeftImage",
		    "comp": { name: 'VBox', items: [
			    { comp: { "name": "HBox", "items": [
				    { "data": "image", "comp": { name: "Image", imageMode: 'fill' }, layout: { spacerAfter: 20, width: 120, height: 90 } },
				    { "layout": { "box-flex": 1 }, "comp": { "name": "VBox", "items": [
						    { data: 'title', comp: { name: "Label" } },
					        { data: 'description', comp: { name: "Label" }, layout: { spacerBefore:3 } }
					    ] }},
					{ data: 'price', comp: { name: "Label" }, layout: { spacerBefore:20 } }
			    ]}},
			    { id: 'item-spacer' }
		    ]},
		    "customizations":[
			    { priority: 9, fieldId: "description", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish description",trueVal:false,falseVal:true,defaultVal:false } },
			    { priority: 8, fieldId: "price", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish price",trueVal:false,falseVal:true,defaultVal:false } },
			    { priority: 7, "fieldId": "image", "mode": "*", "key": "layout.width", "input":{"name":"slider","label":"Item's image width","minVal":50,"maxVal":200} },
			    { priority: 6, "fieldId": "image", "mode": "*", "key": "layout.height", "input":{"name":"slider","label":"Item's image height","minVal":50,"maxVal":150} },
			    { priority: 5, "fieldId": "item-spacer", "mode": "*", "key": "comp.size", "input":{"name":"slider","label":"Item spacing","minVal":0,"maxVal":300} }
		    ]
	    },
	    {
		    "forType": "Section",
		    "name": 'Gallery',
		    "comp": {
			    "name": "VBox",
			    "items": [
				    { "data": "title", comp: { name: "Label" } },
				    { "data": "description", comp: { name: "Label" } },
				    { "data": "items", "comp": { "name": "Gallery",
					    "columns": 2, "rows": 2, "gap": 20, "transition": "horizSwipeAllAtOnce", "isStyleEditable":"false" }, layout: { height: 480, spacerBefore: 25 } }
			    ]
		    },
		    "customizations":[
                { priority: 6, "fieldId": "items", "mode": "*", "key": "layout.height", "input":{"name":"slider","label":"Gallery height","minVal":10,"maxVal":800} },
			    { priority: 7, "fieldId": "items", "mode": "*", "key": "comp.rows", "input":{"name":"slider","label":"Rows","minVal":1,"maxVal":4} },
			    { priority: 8, "fieldId": "items", "mode": "*", "key": "comp.columns", "input":{"name":"slider","label":"Columns","minVal":1,"maxVal":4} },
			    { priority: 9, "fieldId": "items", "mode": "*", "key": "comp.transition", "input":{"name":"combobox","label":"Transition","options":[
				    { value: 'none', label: '@CUST_LABEL_NONE@' },
				    { value: 'horizSwipeAllAtOnce', label: '@CUST_LABEL_HORIZONTAL@' },
				    { value: 'vertSwipeAllAtOnce', label: "@CUST_LABEL_VERTICAL@" },
				    { value: 'crossFadeAllAtOnce', label: '@CUST_LABEL_CROSSFADE@' },
				    { value: 'crossFadeHorizWave', label: '@CUST_LABEL_CROSSFADE_HORIZ@' },
				    { value: 'crossFadeVertWave', label: '@CUST_LABEL_CROSSFADE_VERTI@' },
				    { value: 'seq_crossFade_Diagonal', label: '@CUST_LABEL_CROSSFADE_DIAGO@' },
				    { value: 'seq_swipe_alternate', label: '@CUST_LABEL_HORIZONTAL_ALTERNATE@' },
				    { value: 'seq_swipe_alternate', label: '@CUST_LABEL_ALTERNATE@' }
			    ]} }
		    ]
	    },
	    {
		    "forType": "Item",
		    "name": 'GalleryUnderMenu',
		    "comp": { name: 'Gallery' }
	    },
	    {
            "forType": "Item",
            "name": "Gallery",
            "comp": {
                "name": "VBox",
                "items": [
                    { "data": "image", "comp": { name: "Image", imageMode: 'fill' }, layout: { "box-flex" : 1 } },
                    { "data": "title", comp: { name: "Label" }, layout: { spacerBefore:5 } },
                    { "data": "price", comp: { name: "Label" } }
                ]
            },
		    customizations: [
			    { priority: 12, fieldId: "price", "mode": "view", "key": "comp.hidden", "input":{"name":"checkbox","label":"Show dish price",trueVal:false,falseVal:true,defaultVal:false } }
		    ]
        },
        {
            "forType": "Item",
            "name": "GalleryRollover",
            "layout": { },
	        "comp": {
		        "name": "VBox",
		        "items": [
			        { "data": "title", comp: { name: "Label" } },
			        { "data": "description", comp: { name: "Label" }, layout: { spacerBefore: 5 } }
		        ]
	        }
        },




	    {
            "forType": "Menu",
            "name": "editorSummary",
            "layout": { "height":"56px" },
		    comp: {
				name: "HBox",
			    items: [
				    {
				        layout: { "box-flex": 1, spacerAfter:200 },
			            "comp": {
			                "name": "VBox",
			                "items": [
			                    { id:'summaryTitle', "data": "title", "layout": { spacerBefore:"*", spacerAfter: 3 } ,"comp":{ name: "Label", "singleLine":"true", postfix:' <span class="typeName"> | Menu</span>' } },
			                    { id:'descript', "data": "description", comp: { name: "Label", singleLine:true }, "layout": { spacerAfter: 9 } }
			                ]
			            }
				    }
			    ]
		    }
        }

            ,
        {
            "forType": "Section",
            "name": "editorSummary",
            "layout": { "height":"56px" },
            "comp": {
//                "cssClass":"secLevelPic",
                "name": "HBox",
                "items": [
//                    { "data": "image", "layout": { spacerBefore: 10, spacerAfter: 20, "width":"50px", "height":"50px" } },
                    {
                        "layout": { spacerBefore: 10, spacerAfter: 20 },
                        "comp": {
                            "name": "VBox",
                            "items": [
                                { id:'secLevelPic', "data": "image", "layout": { spacer:"*", width:50, height:50 }, comp: { name: "Image" } }
                            ]
                        }
                    },
                    {
                        "id": "center", "layout": { "box-flex": 1/*, spacerAfter:80*/ },
                        "comp": {
                            "name": "VBox",
                            "items": [
                                { id:'summaryTitle', "data": "title", "layout": { spacerBefore:"*", spacerAfter: 3 },"comp":{ name: "Label", "singleLine":"true", postfix:' <span class="typeName">| Section</span>' } },
                                { id:'descript', "data": "description", comp: { name: "Label", "singleLine":"true" }, "layout": { spacerAfter: 9 } }
                            ]
                        }
                    },
                    {
                        "comp": { name: "Css"},
                        "layout": { width: 80 }
                    }
                ]
            }
        }
        ,
        {
            "forType": "Item",
            "name": "editorSummary",
            "layout": { "height":"56px" },
            "comp": {
                "name": "HBox",
                "items": [
                    {
                        "layout": { spacerBefore: 10, spacerAfter: 20 },
                        "comp": {
                            "name": "VBox",
                            "items": [
                                { "data": "image", "layout": { spacer:"*", width:50, height:50 }, comp: { name: "Image" } }
                            ]
                        }
                    },
                    {
                        "id": "center", "layout": { "box-flex": 1 },
                        "comp": {
                            "name": "VBox",
                            "items": [
                                { id:'summaryTitle', "data": "title", "layout": { spacerBefore:"*", spacerAfter: 3 },"comp":{ name: "Label", "singleLine":"true", postfix:' <span class="typeName">| Dish</span>' } },
                                { id:'descript', "data": "description", comp: { name: "Label", "singleLine":"true" }, "layout": { spacerAfter: 9 } }
                            ]
                        }
                    },
                    {
                        "layout": { spacerBefore:12, spacerAfter:90 },
                        "comp": {
                            "name": "VBox",
                            "items": [
                                { id:'summaryPrice', "data": "price", comp: { name: "Label", css: { "text-overflow" : "clip" } }, "layout": { spacer:"*" } }
                            ]
                        }
                    }
                ]
            }
        }
        ,
        {
            "forType": "Menu",
            "name": "editorForm",
            "comp": {
//                "css": { "width": "515px"},
	            "css": { "width": "100%"},
	            "name": "VBox",
//                "layout": { "padding": "50px" },
                "items": [
                    { id:'label', "value": "@FORM_TITLE@" },
                    { "data": "title", comp: { name: "TextInput", placeholder: "@FORM_TITLE_PLACEHOLDER@" }, "layout": { spacerAfter:30 }  },
                    { id:'label', "value": "@FORM_DESCRIPTION@" },
                    { id:'textarea', "data": "description", "comp": { name: "TextInput", placeholder: "@FORM_DESCRIPTION_PLACEHOLDER@", "skin":'wixapps.integration.skins.TextAreaSkin'},"layout": { "height":250} }
                ]
            }
        }
	    /* editorForm view was moved to xml. */
	    /*,
        ,
        {
            "forType": "Section",
            "name": "editorForm",
            "comp": {
                "css": { "width": "100%"},
                "name": "VBox",
                "items": [
                    {
                        "layout": { "spacerAfter": "30" },
                        "comp": {
                            "name": "HBox",
                            "items": [
                                {
                                    "comp":{
                                        "name":"VBox",
                                        "items":[
                                             { id:'label', "value": "@VIEW_PHOTO@" },
                                             { "data": "image", "comp": { name: "ImageSelector" }, "layout": { "margin": "0 20px 0 0", "width": 200, "height":120 } }
                                        ]
                                    }
                                },
                                {
                                    "layout":{
                                      "box-flex":1
                                    },
                                    "comp":{
                                        "name":"VBox",
                                        "items":[
                                             { id:'label',"value": "@VIEW_TITLE@", "layout": { spacerBefore:"*" } },
                                             { "data": "title", comp: { name: "TextInput", placeholder: "@SECTION_TITLE_DEFAULT@" }, "layout": { "margin-bottom":-2 } }
                                        ]

                                    }
                                }
                            ]
                        }
                    },
                        { id:'label',"value": "@VIEW_DESCRIPTION@" },
                        { "data": "description", "comp": { name: "TextInput", placeholder: "@SECTION_DESC_DEFAULT@", "skin":'wixapps.integration.skins.TextAreaSkin'} , "layout": {height:"135px"}}
                ]
            }
        },
        {
            "forType": "Item",
            "name": "editorForm",
            "comp": {
	            "css": { "width": "100%"},
	            "name": "VBox",
                "items": [
                    {
                        "layout": { "spacerAfter": "30" },
                        "comp": {
                            "name": "HBox",
                            "items": [
                                {
                                    "layout": {
                                        "width": 200
                                    },
                                    "comp":{
                                        "name":"VBox",
                                        "items":[
                                             { id:'label', "value": "Photo:" },
                                             { "data": "image", "comp": { }, "layout": { "margin": "0 20px 0 0", "width": 200, "height":120 } }
                                        ]
                                    }
                                },
                                {
                                    "layout":{
                                      "box-flex":1
                                    },
                                    "comp":{
                                        "name":"VBox",
                                        "items":[
                                             { id:'label',"value": "Title:" },
                                             { "data": "title", comp: { placeholder: "I\'m a dish title." }, "layout": { spacerAfter:"*" } },
                                             { id:'label', "value": "Price:" },
                                             { "data": "price", comp: { placeholder: "Put a price on me." }, "layout": { "margin-bottom":-2 } }
                                        ]

                                    }
                                }
                                ]
                            }
                        },
                        { id:'label',"value": "Description:" },
                        { "data": "description", "comp": { placeholder: "I\'m a dish description. Let your customers know how delicious I am, so they\'ll want to eat me.", "skin":'wixapps.integration.skins.TextAreaSkin'},layout:{height:135}}
                        ]

            }
        }*/
    ].concat(
// Start generated views
[
	{
		"name":"editorForm", "forType":"Section", "comp":
		{
			"name":"VBox", "items":
			[
				{
					"comp":
					{
						"name":"HBox", "items":
						[
							{
								"comp":
								{
									"name":"VBox", "items":
									[
										{
											"id":"label", "value":"@VIEW_PHOTO@", "comp":
											{
												"name":"Label"
											}
										},
										{
											"data":"image", "comp":
											{
												"name":"ImageSelector"
											},
											"layout":
											{
												"margin":"0 20px 0 0", "width":200, "height":120
											}
										}
									]
								},
								"layout":
								{
									"width":200, "spacerAfter":10
								}
							},
							{
								"comp":
								{
									"name":"VBox", "items":
									[
										{
											"id":"label", "value":"@VIEW_TITLE@", "comp":
											{
												"name":"Label"
											}
										},
										{
											"data":"title", "comp":
											{
												"name":"TextInput", "placeholder":"@SECTION_TITLE_DEFAULT@"
											}
										}
									]
								},
								"layout":
								{
									"box-flex":1
								}
							}
						]
					},
					"layout":
					{
						"spacerAfter":10
					}
				},
				{
					"id":"label", "value":"@VIEW_DESCRIPTION@", "comp":
					{
						"name":"Label"
					}
				},
				{
					"data":"description", "comp":
					{
						"name":"TextInput", "skin":"wixapps.integration.skins.TextAreaSkin", "placeholder":"@SECTION_DESC_DEFAULT@"
					},
					"layout":
					{
						"height":135
					}
				}
			],
			"css":
			{
				"width":"100%"
			}
		}
	},
	{
		"name":"editorForm", "forType":"Item", "comp":
		{
			"name":"VBox", "items":
			[
				{
					"comp":
					{
						"name":"HBox", "items":
						[
							{
								"comp":
								{
									"name":"VBox", "items":
									[
										{
											"id":"label", "value":"@VIEW_PHOTO@", "comp":
											{
												"name":"Label"
											}
										},
										{
											"data":"image", "comp":
											{
												"name":"ImageSelector"
											},
											"layout":
											{
												"margin":"0 20px 0 0", "width":200, "height":120
											}
										}
									]
								},
								"layout":
								{
									"width":200, "spacerAfter":10
								}
							},
							{
								"comp":
								{
									"name":"VBox", "items":
									[
										{
											"id":"label", "value":"@VIEW_TITLE@", "comp":
											{
												"name":"Label"
											}
										},
										{
											"data":"title", "comp":
											{
												"name":"TextInput", "placeholder":"@DISH_TITLE_DEFAULT@"
											}
										},
										{
											"id":"label", "value":"@VIEW_PRICE@", "comp":
											{
												"name":"Label"
											}
										},
										{
											"data":"price", "comp":
											{
												"name":"TextInput", "placeholder":"@DISH_PRICE_DEFAULT@"
											}
										}
									]
								},
								"layout":
								{
									"box-flex":1
								}
							}
						]
					},
					"layout":
					{
						"spacerAfter":10
					}
				},
				{
					"id":"label", "value":"@VIEW_DESCRIPTION@", "comp":
					{
						"name":"Label"
					}
				},
				{
					"data":"description", "comp":
					{
						"name":"TextInput", "skin":"wixapps.integration.skins.TextAreaSkin", "placeholder":"@DISH_DESC_DEFAULT@"
					},
					"layout":
					{
						"height":135
					}
				}
			],
			"css":
			{
				"width":"100%"
			}
		}
	},
	{
		"name":"ErrorInEditor", "forType":"Error", "data":"code", "comp":
		{
			"name":"Switch", "cases":
			{
				"default":
				{
					"value":"@ERROR_MESSAGE_IN_EDITOR@", "comp":
					{
						"name":"Label", "isStyleEditable":"false"
					}
				},
				"-1021":
				{
					"comp":
					{
						"name":"VBox", "box-align":"center", "items":
						[
							{
								"value":
								{
									"_type":"wix:Image", "src":"images/warning-icon.png", "width":256, "height":256
								},
								"comp":
								{
									"name":"Image", "isStyleEditable":"false"
								},
								"layout":
								{
									"spacerBefore":30, "spacerAfter":10, "width":64, "height":64
								}
							},
							{
								"value":"@ERROR_ITEM_NOT_FOUND_TITLE@", "comp":
								{
									"name":"Label", "style":"Heading M", "isStyleEditable":"false", "color":"#FFFFFF"
								},
								"layout":
								{
									"spacerAfter":10
								}
							},
							{
								"value":"@ERROR_ITEM_NOT_FOUND_DESCRIPTION@", "comp":
								{
									"name":"Label", "style":"Body M", "isStyleEditable":"false", "color":"#FFFFFF"
								},
								"layout":
								{
									"spacerAfter":10
								}
							},
							{
								"value":"@ERROR_ITEM_NOT_FOUND_DISCLAIMER@", "comp":
								{
									"name":"Label", "style":"Body XS", "isStyleEditable":"false", "color":"#FFFFFF", "italic":"true"
								},
								"layout":
								{
									"spacerAfter":30
								}
							}
						],
						"css":
						{
							"background-color":"red"
						}
					}
				}
			}
		}
	},
	{
		"name":"ErrorInPublished", "forType":"Error", "data":"code", "comp":
		{
			"name":"Switch", "cases":
			{
				"default":
				{
					"value":"@ERROR_MESSAGE_IN_PUBLISHED@", "comp":
					{
						"name":"Label", "isStyleEditable":"false"
					}
				},
				"-1021":"NO_PROXY"
			}
		}
	}
]

// End generated views
    ),
    "customizations": [
	    { "forType": "Menu", "view": "*", "fieldId": "title", "mode": "view", "key": "comp.style", "value": "Heading M" },
	    { "forType": "Menu", "view": "*", "fieldId": "description", "mode": "view", "key": "comp.style", "value": "Body L" },
//	    { "forType": "Menu", "view": "*", "fieldId": "description", "mode": "view", "key": "comp.allowHide", "value": true },
	    { "forType": "Section", "view": "*", "fieldId": "title", "mode": "view", "key": "comp.style", "value": "Heading S" },
	    { "forType": "Section", "view": "*", "fieldId": "description", "mode": "view", "key": "comp.style", "value": "Body M" },
//	    { "forType": "Section", "view": "*", "fieldId": "description", "mode": "view", "key": "comp.allowHide", "value": true },
	    { "forType": "Item", "view": "*", "fieldId": "title", "mode": "view", "key": "comp.style", "value": "Body L" },
	    { "forType": "Item", "view": "*", "fieldId": "title", "mode": "view", "key": "comp.color", "value": "color_20" },
	    { "forType": "Item", "view": "*", "fieldId": "description", "mode": "view", "key": "comp.style", "value": "Body M" },
//	    { "forType": "Item", "view": "*", "fieldId": "description", "mode": "view", "key": "comp.allowHide", "value": true },
	    { "forType": "Item", "view": "*", "fieldId": "price", "mode": "view", "key": "comp.style", "value": "Body L" },

        // Editor Forms labels - this is used to create a class for use in the skin
	    { "forType": "*", "view": "editorForm", "fieldId": "label", "mode": "view", "key": "comp.cssClass", "value": "labelStyle" },
	    { "forType": "*", "view": "editorForm", "fieldId": "label", "mode": "*", "key": "comp.name", "value": "Label" },
        // editorSummary, description - this is used to create a class for use in the skin
	    { "forType": "*", "view": "editorSummary", "fieldId": "descript", "mode": "view", "key": "comp.cssClass", "value": "textItalic14" },
        { "forType": "*", "view": "editorSummary", "fieldId": "summaryTitle", "mode": "view", "key": "comp.cssClass", "value": "headingGrey18" },
        { "forType": "Item", "view": "editorSummary", "fieldId": "summaryTitle", "mode": "view", "key": "comp.cssClass", "value": "headingGrey16" },
        { "forType": "Item", "view": "editorSummary", "fieldId": "summaryPrice", "mode": "view", "key": "comp.cssClass", "value": "headingGrey18norm" },
        { "forType": "Section", "view": "editorSummary", "fieldId": "secLevelPic", "mode": "view", "key": "comp.cssClass", "value": "secLevelPic" },
        { "forType": "*", "view": "*", "fieldId": "textarea", "mode": "*", "key": "comp.cssClass", "value": "area51" },

	    { "forType": "*", "view": "*", "fieldId": "item-spacer", "mode": "view", "key": "comp.name", "value": "VSpacer" },
	    { "forType": "*", "view": "*", "fieldId": "item-spacer", "mode": "view", "key": "comp.size", "value": "15" },
	    { "forType": "*", "view": "Inline", "fieldId": "item-spacer", "mode": "view", "key": "comp.size", "value": "5" },
	    { "forType": "*", "view": "LeftImage", "fieldId": "item-spacer", "mode": "view", "key": "comp.size", "value": "20" },

	    { "forType": "Menu", "view": "Center", "fieldId": "title", "mode": "view", "key": "layout.text-align", "value": "center" },
	    { "forType": "Menu", "view": "Center", "fieldId": "description", "mode": "view", "key": "layout.text-align", "value": "center" },
	    { "forType": "Menu", "view": "Center", "fieldId": "items", "mode": "view", "key": "comp.templates.item.comp.name", "value": "CenterUnderMenu" },
	    { "forType": "Menu", "view": "Left", "fieldId": "items", "mode": "view", "key": "comp.templates.item.comp.name", "value": "LeftUnderMenu" },
	    { "forType": "Menu", "view": "LeftThumb", "fieldId": "items", "mode": "view", "key": "comp.templates.item.comp.name", "value": "LeftThumbUnderMenu" },
	    { "forType": "Menu", "view": "LeftImage", "fieldId": "items", "mode": "view", "key": "comp.templates.item.comp.name", "value": "LeftImageUnderMenu" },
	    { "forType": "Menu", "view": "Gallery", "fieldId": "items", "mode": "view", "key": "comp.templates.item.comp.name", "value": "GalleryUnderMenu" },
	    { "forType": "Menu", "view": "Inline", "fieldId": "items", "mode": "view", "key": "comp.templates.item.comp.name", "value": "InlineUnderMenu" },

	    { "forType": "Section", "view": "CenterUnderMenu", "fieldId": "sectionView", "mode": "view", "key": "comp.name", "value": "Center" },
	    { "forType": "Section", "view": "CenterUnderMenu", "fieldId": "h-line", "mode": "view", "key": "comp.hidden", "value": true },
	    { "forType": "Section", "view": "LeftUnderMenu", "fieldId": "sectionView", "mode": "view", "key": "comp.name", "value": "Left" },
	    { "forType": "Section", "view": "LeftThumbUnderMenu", "fieldId": "sectionView", "mode": "view", "key": "comp.name", "value": "LeftThumb" },
	    { "forType": "Section", "view": "LeftThumbUnderMenu", "fieldId": "h-line", "mode": "view", "key": "comp.hidden", "value": true },
	    { "forType": "Section", "view": "LeftImageUnderMenu", "fieldId": "sectionView", "mode": "view", "key": "comp.name", "value": "LeftImage" },
	    { "forType": "Section", "view": "GalleryUnderMenu", "fieldId": "sectionView", "mode": "view", "key": "comp.name", "value": "Gallery" },
	    { "forType": "Section", "view": "GalleryUnderMenu", "fieldId": "h-line", "mode": "view", "key": "comp.hidden", "value": true },
	    { "forType": "Section", "view": "InlineUnderMenu", "fieldId": "sectionView", "mode": "view", "key": "comp.name", "value": "Inline" },

	    { "forType": "Section", "view": "Center", "fieldId": "title", "mode": "view", "key": "layout.text-align", "value": "center" },
	    { "forType": "Section", "view": "Center", "fieldId": "description", "mode": "view", "key": "layout.text-align", "value": "center" },
	    { "forType": "Section", "view": "Center", "fieldId": "image", "mode": "view", "key": "comp.hidden", "value": true },
	    { "forType": "Section", "view": "LeftThumb", "fieldId": "image", "mode": "view", "key": "comp.hidden", "value": true },
	    { "forType": "Section", "view": "LeftImage", "fieldId": "image", "mode": "view", "key": "comp.hidden", "value": true }
    ],
    lang: {
        // Start generated lang
"de": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"en": {
    "DATA_SELECTION_LABEL": "Choose Menu",
    "DATA_EDITING_LABEL": "Edit Menu",
    "MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly",
    "MENU_PARTS_NAME":"Restaurant Menu",
    "MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.",
    "MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu",
    "MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu",
    "MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images",
    "MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images",
    "MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu",
    "MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu",
    "DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found",
    "DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu",
    "DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu",
    "DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.",
    "DATA_EDITING_NEW_ITEM_TYPE":"Menu",
    "DATA_EDITING_NEW_ITEM_COLLECTION":"Menus",
    "DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus",
    "DATA_EDITING_MIDLEVEL_COLLECTION":"Sections",
    "NEW_ITEM_OVERRIDES_TITLE":"New Menu",
    "NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description",
    "NEW_ITEM_ERROR_TITLE":"Error creating new menu",
    "NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes",
    "DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus",
    "DATA_EDITING_CATEGORIES_SECTIONS":"Sections",
    "DATA_EDITING_CATEGORIES_DISHES":"Dishes",
    "DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections",
    "DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined",
    "DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections",
    "DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections",
    "DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished",
    "DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined",
    "DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes",
    "DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes",
    "TYPE_META_DATA_DISH":"Dish",
    "TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters",
    "TYPE_META_DATA_SECTION":"Section",
    "TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty",
    "TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters",
    "TYPE_META_DATA_MENU":"Menu",
    "TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters",
    "TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty",
    "CUST_LABEL_NONE":"none",
    "CUST_LABEL_HORIZONTAL":"Horizontal",
    "CUST_LABEL_VERTICAL":"Vertical",
    "CUST_LABEL_CROSSFADE":"Cross-fade",
    "CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)",
    "CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)",
    "CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)",
    "CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)",
    "CUST_LABEL_ALTERNATE":"Alternate",
    "FORM_TITLE":"Title:",
    "FORM_TITLE_PLACEHOLDER":"I'm a menu title.",
    "FORM_DESCRIPTION":"Description:",
    "FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.",
    "VIEW_PHOTO":"Photo:",
    "VIEW_TITLE":"Title:",
    "VIEW_DESCRIPTION":"Description:",
    "VIEW_PRICE":"Price:",
    "SECTION_TITLE_DEFAULT": "I'm a section title.",
    "SECTION_DESC_DEFAULT": "I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.",
    "DISH_TITLE_DEFAULT": "I'm a dish title."       ,
    "DISH_PRICE_DEFAULT": "Put a price on me.",
    "DISH_DESC_DEFAULT": "I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me.",

	"ERROR_ITEM_NOT_FOUND_TITLE": "Menu or Section not found",
	"ERROR_ITEM_NOT_FOUND_DESCRIPTION": "Click and select \"Choose Menu\" to select a valid menu",
	"ERROR_ITEM_NOT_FOUND_DISCLAIMER": "This message will not be shown on your published site",
	"ERROR_MESSAGE_IN_PUBLISHED": "Error has occurred"
},
"es": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"fr": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"it": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"ja": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"ko": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"pl": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"pt": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"ru": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."},
"tr": {"DATA_SELECTION_LABEL":"Choose Menu","DATA_EDITING_LABEL":"Edit Menu","MENU_MAIN_APP_DESCRIPTION":"Restaurant menu application lets you create and manage your menus data and design seamlessly","MENU_PARTS_NAME":"Restaurant Menu","MENU_PARTS_DESCRIPTION":"Change the design of your menu and try out the different menu layouts. To add new items to your menu, click Edit Menus.","MENU_VIEW_DESCRIPTIONS_CENTERED_MENU_NAME":"Centered menu","MENU_VIEW_DESCRIPTIONS_LEFT_ALIGNED_MENU_NAME":"Left aligned menu","MENU_VIEW_DESCRIPTIONS_MENU_WITH_SMALL_IMAGES_NAME":"Menu with small images","MENU_VIEW_DESCRIPTIONS_MENU_WITH_IMAGES_NAME":"Menu with images","MENU_VIEW_DESCRIPTIONS_GALLERY_MENU_NAME":"Gallery menu","MENU_VIEW_DESCRIPTIONS_INLINE_LEFT_MENU_NAME":"Inline left aligned menu","DATA_EDITING_NO_CATEGORIES_LABEL":"No Menus found","DATA_EDITING_ADD_FIRST_CATEGORY_LABEL":"Create a new menu","DATA_EDITING_ANOTHER_CATEGORY_LABEL":"No thanks, I'd like to create a new menu","DATA_EDITING_INLINE_HELP":"Pick which menu or menu section you'd like to appear and click OK.","DATA_EDITING_NEW_ITEM_TYPE":"Menu","DATA_EDITING_NEW_ITEM_COLLECTION":"Menus","DATA_EDITING_TOP_LEVEL_COLLECTION":"Menus","DATA_EDITING_MIDLEVEL_COLLECTION":"Sections","NEW_ITEM_OVERRIDES_TITLE":"New Menu","NEW_ITEM_OVERRIDES_DESCRIPTION":"Edit the new menu description","NEW_ITEM_ERROR_TITLE":"Error creating new menu","NEW_ITEM_ERROR_DESCRIPTION":"Please try again in a few minutes","DATA_EDITING_CATEGORIES_ALL_MENUS":"All Menus","DATA_EDITING_CATEGORIES_SECTIONS":"Sections","DATA_EDITING_CATEGORIES_DISHES":"Dishes","DATA_EDITING_CATEGORIES_ALL_SECTIONS":"All sections","DATA_EDITING_NO_SECTIONS_DEFINED":"No sections defined","DATA_EDITING_CATEGORIES_HIDDEN_SECTIONS":"Hidden sections","DATA_EDITING_CATEGORIES_NO_HIDDEN_SECTIONS":"You have no  hidden sections","DATA_EDITING_CATEGORIES_ALL_DISHES":"All dished","DATA_EDITING_CATEGORIES_NO_DISHES":"No dishes defined","DATA_EDITING_CATEGORIES_HIDDEN_DISHES":"Hidden dishes","DATA_EDITING_CATEGORIES_NO_HIDDEN_DISHES":"You have no hidden dishes","TYPE_META_DATA_DISH":"Dish","TYPE_META_DATA_DISH_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_SECTION":"Section","TYPE_META_DATA_EMPTY_SECTION":"Your section is currently empty","TYPE_META_DATA_SECTION_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_MENU":"Menu","TYPE_META_DATA_MENU_VALIDATION":"Title needs to be longer than 2 characters","TYPE_META_DATA_EMPTY_MENU":"Your menu is currently empty","CUST_LABEL_NONE":"none","CUST_LABEL_HORIZONTAL":"Horizontal","CUST_LABEL_VERTICAL":"Vertical","CUST_LABEL_CROSSFADE":"Cross-fade","CUST_LABEL_CROSSFADE_HORIZ":"Cross-fade (Horizontal)","CUST_LABEL_CROSSFADE_VERTI":"Cross-fade (Vertical)","CUST_LABEL_CROSSFADE_DIAGO":"Cross-fade (Diagonal)","CUST_LABEL_HORIZONTAL_ALTERNATE":"Horizontal (Alternate)","CUST_LABEL_ALTERNATE":"Alternate","FORM_TITLE":"Title:","FORM_TITLE_PLACEHOLDER":"I'm a menu title.","FORM_DESCRIPTION":"Description:","FORM_DESCRIPTION_PLACEHOLDER":"I'm a menu description. I'm a great place to describe what's in your menu.","VIEW_PHOTO":"Photo:","VIEW_TITLE":"Title:","VIEW_DESCRIPTION":"Description:","VIEW_PRICE":"Price:","SECTION_TITLE_DEFAULT":"I'm a section title.","SECTION_DESC_DEFAULT":"I'm a section description. Separate your menu into sections and let your customers easily find the food they're craving e.g. Starters, Mains, Sweets, Drinks.","DISH_TITLE_DEFAULT":"I'm a dish title.","DISH_PRICE_DEFAULT":"Put a price on me.","DISH_DESC_DEFAULT":"I'm a dish description. Let your customers know how delicious I am,  so they'll want to eat me."}
// End generated lang
    }
});