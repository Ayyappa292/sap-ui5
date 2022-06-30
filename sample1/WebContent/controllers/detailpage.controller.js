sap.ui.controller("sample1.controllers.detailpage", {

	goBack : function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("contracttable");
	}
});