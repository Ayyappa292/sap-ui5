	sap.ui.define([
		
        "sap/ui/core/mvc/Controller",
    	"sap/m/MessageToast",
              ],function(Controller,MessageToast){
	              "use strict";
	  return Controller.extend("contractdetails.controllers.contracttable",{

	onItemPress: function(oEvent){
		let oModel = this.getView().getModel("mymodel");
		var aArray =  oModel.getProperty("/completedetails");
		var nNum = oEvent.getSource().getSelectedItem().getBindingContext("mymodel").getObject("num");
		MessageToast.show(nNum,"is pressed");
		debugger;
		$.ajax({
			url : "http://sun.pivoxlabs.com:8002/pivox/httphandler/zar_cntrt_details_fm?sap-client=300&sap-user=ayyappa&sap-password=Reddy@1234",
			dataType : "json",
			data :{
				 LvNum : nNum },
			success : function(oData) {
				oModel.setProperty("/completedetails",oData.itab);
			},
			
		})

		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("detailpage",{
			item: nNum
		});
	
	}

	  });
	  });