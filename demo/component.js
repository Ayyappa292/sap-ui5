sap.ui.define([ "sap/ui/core/UIComponent" ], function(UIComponent) {
	"use strict";
	return UIComponent.extend("contractdetails.Component", {
		metadata : {
			
		},
		init : function() {
		

		},
		createContent : function() {
			var app = new sap.m.App("App");
			var page1 = sap.ui.view({
				id : "view1",
				viewName : "contractdetails.views.tileview",
				type : sap.ui.core.mvc.ViewType.XML
			});
			
			app.addPage(page1);
			return app;
		}
	});
});
