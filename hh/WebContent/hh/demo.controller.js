sap.ui.controller("hh.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf hh.demo
*/
	onInit : function() {
		var oModel = new sap.ui.model.json.JSONModel({
			 Student: 
		     {     
		         id: "001",        
		        name: "Gyana",            
		         phone: "808xxx08009",
		         Addresss: "BBSR",
		         name : "ayyappa"
		   
		      } 
		});
		this.getView().setModel(oModel, "demo");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf hh.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf hh.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf hh.demo
*/
//	onExit: function() {
//
//	}

});