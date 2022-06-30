sap.ui
		.controller(
				"sample1.controllers.tileview",
				{

					onPress : function() {
						
						var oRouter = sap.ui.core.UIComponent
						.getRouterFor(this);
				oRouter.navTo("contracttable");	
					}

				});







/*
let oModel = this.getView().getModel("mymodel");
$
		.ajax({
			url : "http://sun.pivoxlabs.com:8002/pivox/httphandler/zar_crud_fm?sap-client=300&sap-user=ayyappa&sap-password=Reddy@1234",

			dataType : "json",

			success : function(oData) {

				debugger;

				oModel.setProperty("/details",
						oData.itab);
			},
		})
*/
