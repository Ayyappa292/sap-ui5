sap.ui.define([ "sap/ui/core/UIComponent" ], function(UIComponent) {
	"use strict";
	return UIComponent.extend("sample1.Component", {
		metadata : {
			manifest : "json"
		},
		init : function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();

		},
		createContent : function() {
			var app = new sap.m.App("App");
			var page1 = sap.ui.view({
				id : "view1",
				viewName : "sample1.views.tileview",
				type : sap.ui.core.mvc.ViewType.XML
			});
			var page2 = sap.ui.view({
				id : "view2",
				viewName : "sample1.views.contracttable",
				type : sap.ui.core.mvc.ViewType.XML
			});
			var page3 = sap.ui.view({
				id : "view3",
				viewName : "sample1.views.detailpage",
				type : sap.ui.core.mvc.ViewType.XML
			});
			app.addPage(page1).addPage(page2).addPage(page3);
			return app;
		}
	});
});


