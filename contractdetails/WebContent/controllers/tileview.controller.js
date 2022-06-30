sap.ui
		.controller(
				"contractdetails.controllers.tileview",
				{

					onPress : function() {
	
						let oModel = this.getView().getModel("mymodel");
						$
								.ajax({
									url : "http://sun.pivoxlabs.com:8002/pivox/httphandler/zar_cntrt_details_fm?sap-client=300&sap-user=ayyappa&sap-password=Reddy@1234",

									dataType : "json",

									success : function(oData) {

										

										oModel.setProperty("/details",
												oData.itab);
									},
								})
						var oRouter = sap.ui.core.UIComponent
								.getRouterFor(this);
						oRouter.navTo("contracttable");

					}

				});