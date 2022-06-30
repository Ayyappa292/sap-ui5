sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/IconPool",
	"sap/m/Dialog",
	"sap/m/DialogType",
	"sap/m/Button",
	"sap/m/ButtonType",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Text",
	"sap/m/Image",
	"sap/m/Table"
], function (Controller, JSONModel, IconPool, Dialog, DialogType, Button, ButtonType, List, StandardListItem, Text) {
	"use strict";
	return Controller.extend("product.controllers.mainview", {
/**
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf product.mainview
 */
// onInit: function() {
//
// },
		onItemPress: function(oEvent){
			debugger;
		/*	let oModel=this.getView().getModel("iknow");
			let oData=oModel.getProperty("/detailproduct");
			let oDetail = oEvent.getSource().getSelectedItem().getBindingContext("iknow").getObject("productname");
			oData.push({
				productname:oDetail
			});
			oModel.setProperty("/detailproduct",oData)*/
//			let list = this.getView().byId("listid").getSelectedItem();
		/*	let oModel=this.getView().getModel("iknow");
			let oObj = oEvent.getSource().getSelectedItem().getBindingContext("iknow").getObject();
			let oName = oModel.getProperty("/products");
			let oItem = oName[oObj.productname];
			let aEmpty = oModel.getProperty("/detailproduct");
			aEmpty=[...oItem];
			oModel.setProperty("/detailproduct",aEmpty);*/
			/*let oModel=this.getView().getModel("iknow");
			let oData=oModel.getProperty("/products");
			let oName =oEvent.getSource().getSelectedItem().getBindingContext("iknow").getObject("productname");
			let oDetails = oData.find(element=>element.productname == oName);
			let oProductName = sap.ui.getCore().byid("ProductName").getValue();*/
			/*let o = sap.ui.getCore().byId("pimg1");
			let omrp = sap.ui.getCore().byId("mrp1");
			let oofferprice = sap.ui.getCore().byId("op1");*/
			//oProductName.setValue(oDetails.productname);
//			oimage.setValue(odetails.productimage);
//			omrp.setValue(odetails.mrp);
//			oofferprice.setValue(odetails.offerprice);
			
			let oModel = this.getView().getModel("iknow");	
			let oData = oModel.getProperty("/products");
//			let list = this.getView().byId("listid").getSelectedItem();
//			let ouser = list.getBindingContext("idontknow").getObject("productname");
			let ouser =oEvent.getSource().getSelectedItem().getBindingContext("iknow").getObject("productname");
			let odetails = oData.find(element=>element.productname == ouser);
			let aa = this.getView().getModel("iknow").getProperty("/detailproduct");
			aa=[];
			aa.push(odetails);
			this.getView().getModel("iknow").setProperty("/detailproduct",aa);
			console.log(this.getView().getModel("iknow").getProperty("/detailproduct"));
			
		},
	onListItemPress: function (oEvent) {
		debugger;
		var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

		this.getSplitAppObj().toDetail(this.createId(sToPageId));
	},
	getSplitAppObj: function () {
		var result = this.byId("SplitAppDemo");
		if (!result) {
			Log.info("SplitApp object can't be found");
		}
		return result;
	},
	
	// Product Side Functions
	
onaddproduct : function(){
	debugger;
	if(!this.newdialog){
	this.newdialog = sap.ui.xmlfragment("product.fragments.register",this);
	}
	this.newdialog.open();
},
oncancleproduct : function(){
	debugger;
	this.newdialog.close();
},
onSubmitproduct : function(){
	debugger;
	let sa = sap.ui.getCore().byId("pid").getValue();
	let sb = sap.ui.getCore().byId("pn").getValue();
	let sc = sap.ui.getCore().byId("pimg").getValue();
	let sd = sap.ui.getCore().byId("mrp").getValue();
	let na = sap.ui.getCore().byId("op").getValue();
	if(sa=="")
		{
		alert("product id cant be empty")
		}
	else if(sb=="")
		{
		alert("product name cant be empty")
		}
	else if(sc=="")
	{
	alert("product image cant be empty")
	}
	else if(sd=="")
	{
	alert("mrp cant be empty")
	}
	else if(na=="")
	{
	alert("offer price cant be empty")
	}
	else
		{
	let oModel = this.getView().getModel("iknow");
	let aproducts = oModel.getProperty("/products");
	aproducts.push({
		productid	: sa,
		productname	: sb,
		productimage	: sc,
		mrp : sd,
		offerprice	: na
	});
	oModel.setProperty("/products",aproducts);
	this.newdialog.close();
		}
},
oneditproduct : function(oEvent) {
	debugger;	
	if(!this.newdialog3){
		this.newdialog3 = sap.ui.xmlfragment("product.fragments.edit",this);
		}
		this.newdialog3.open();
	var oform = sap.ui.getCore().byId("sform");
	var omodel = this.getView().getModel("iknow");	
	let odata = omodel.getProperty("/products");
	// let otable = this.getView().byId("producttable").getSelectedItem();
	// let ouser = oEvent.getBindingContext("iknow").getObject("productid");
	let ouser =oEvent.getSource().getBindingContext("iknow").getObject("productid");
	let odetails = odata.find(element=>element.productid == ouser);
	let oid = sap.ui.getCore().byId("pid1");
	let oname = sap.ui.getCore().byId("pn1");
	let oimage = sap.ui.getCore().byId("pimg1");
	let omrp = sap.ui.getCore().byId("mrp1");
	let oofferprice = sap.ui.getCore().byId("op1");
	oid.setValue(odetails.productid);
	oname.setValue(odetails.productname);
	oimage.setValue(odetails.productimage);
	omrp.setValue(odetails.mrp);
	oofferprice.setValue(odetails.offerprice);
	
},
onclose3 : function(){
	this.newdialog3.close();
},
onsaveproduct : function(){
	debugger;
	var omodel = this.getView().getModel("iknow");	
	omodel.getProperty("/products");
	let otable = this.getView().byId("producttable").getSelectedItem();
	let oid = sap.ui.getCore().byId("pid1").getValue();
	let oname = sap.ui.getCore().byId("pn1").getValue();
	let oimage = sap.ui.getCore().byId("pimg1").getValue();
	let omrp = sap.ui.getCore().byId("mrp1").getValue();
	let oofferprice = sap.ui.getCore().byId("op1").getValue();
	sap.ui.getCore().byId("pid1").setValue(oid);
	sap.ui.getCore().byId("pn1").setValue(oname);
	sap.ui.getCore().byId("pimg1").setValue(oimage);
	sap.ui.getCore().byId("mrp1").setValue(omrp);
	sap.ui.getCore().byId("op1").setValue(oofferprice);
	//let ouser = otable.getBindingContext("iknow").getValue("productid");
	//ouser =oid;
	//let odetails = odata.find(element=>element.productid == ouser);
	//omodel.setProperty("/products/0/productid",oid);	
	this.newdialog3.close();
},
ondeleteproduct : function(){
	 var oTable = this.getView().byId("producttable");
	 var aSelectedItems = oTable.getSelectedItems();
	 if(aSelectedItems.length==0)
		 {
		 alert("select a product to delete");
		 }
	 else
		 {
	 for(var i=0; i<aSelectedItems.length; i++){
	    oTable.removeItem(aSelectedItems[i])
	 }
	 }
},
onaddcart: function(oEvent){
	debugger;
	var omodel = this.getView().getModel("iknow");
	let odata = omodel.getProperty("/cart");
	let pname =oEvent.getSource().getBindingContext("iknow").getObject("productname");
	let pimg =oEvent.getSource().getBindingContext("iknow").getObject("productimage");
	let op =oEvent.getSource().getBindingContext("iknow").getObject("offerprice");
	odata.push({
		productname:pname,
		productimage:pimg,
		price:op
	});
	omodel.setProperty("/cart",odata);
	let oldprice=this.getView().byId("totalprice").getValue();
	let na=parseInt(oldprice);
	let nb=parseInt(op);
	let newprice = na + nb;
	this.getView().byId("totalprice").setValue(newprice);
	
},
oncancelitem : function(oEvent){
	debugger;
	 /*var oTable = this.getView().byId("carttable");
	 var aSelectedItems = oTable.getSelectedItems();
	 let op =oEvent.getSource().getBindingContext("iknow").getObject("price");
	 if(aSelectedItems.length==0)
		 {
		 alert("select a product to delete");
		 }
	 else
		 {
	 for(var i=0; i<aSelectedItems.length; i++){
	    oTable.removeItem(aSelectedItems[i])
	 }
	 let oldprice=this.getView().byId("totalprice").getValue();
	 let na=parseInt(oldprice);
	 let nb=parseInt(op);
	 let newprice = na-nb;
	 this.getView().byId("totalprice").setValue(newprice);
	 }*/
//	 var oTable = this.getView().byId("carttable");
//     var aSelectedItems = oTable.getSelectedItems();
//     
//     for(var i=0; i<aSelectedItems.length; i++){
//       var oItemContextPath = aSelectedItems[i].getBindingContext("iknow").getPath()
//       var aPathParts = oItemContextPath.split("/");
//       var iIndex = aPathParts[aPathParts.length - 1]; //Index to delete into our array of objects
//       
//       var oJSONData = this.getView().getModel("iknow").getData();
//       oJSONData.correlationData.splice(iIndex, 1); //Use splice to remove your object in the array
//       this.getView().getModel().setData(oJSONData); //And set the new data to the model
//     } //And set the new data to the mode
//	

//		var m = oEvent.getSource().getParent();
//
//		var tbl = this.getView().byId("carttable");
//
//		var idx = m.getBindingContext("iknow").getPath();
//
//		idx = idx.charAt(idx.lastIndexOf('/')+1);
//
//		if (idx !== -1) {
//
//		var a = tbl.getModel("iknow"); // if named model - var a= tbl.getModel(ModelName);
//
//		var data = a.getData();
//
//		//var removed = data.splice(idx,1);
//
//		// Check return value of data.
//
//		// If data has an hierarchy. Ex: data.results
//
//		var removed =data.results.splice(idx,1);
//
//		a.setData(data);
//
//		}
	
//	var oTable = this.getView().byId("carttable");
//	var aSelectedItems = oTable.getSelectedItems();
//		var deleteRecord = oEvent.getSource().getBindingContext("iknow").getObject();
//		for(var i=0;i<aSelectedItems.length;i++){
//			if(aSelectedItems[i] == deleteRecord )
//					{
//					//	pop this._data.Products[i] 
//					aSelectedItems.splice(i,1); //removing 1 record from i th index.
//						this.jModel.refresh();
//						break;//quit the loop
//					}
//		}
	var deleteRecord = oEvent.getSource().getBindingContext("iknow").getObject();
	var omodel=this.getView().getModel("iknow");
	var odata=omodel.getProperty("/cart");
	for(var i=0;i<odata.length;i++){
		if(odata[i] == deleteRecord )
			{
			odata.splice(i,1);
		omodel.setProperty("/cart",odata);
			}
		break;
	}
	
	
},
// users side functions
onadd1 : function(){
	if(!this.newdialog1){
	this.newdialog1 = sap.ui.xmlfragment("product.fragments.userregister",this);
	}
	this.newdialog1.open();
},
onclose1 : function(){
	this.newdialog1.close();
},
onSubmit1 : function(){
	debugger;
	let sa = sap.ui.getCore().byId("uid").getValue();
	let sb = sap.ui.getCore().byId("un").getValue();
	let sc = sap.ui.getCore().byId("validity").getValue();
	let sd = sap.ui.getCore().byId("ms").getValue();
	let oModel = this.getView().getModel("iknow");
	let ausers = oModel.getProperty("/users");
	ausers.push({
		userid	: sa,
		username	: sb,
		validity	: sc,
		membership : sd
	});
	oModel.setProperty("/users",ausers);
	this.newdialog1.close();
},
onpressdemo : function(){
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	 oRouter.navTo("secondview");
},
/*onitempress : function(oEvent){
	debugger;
	//let list = this.getView().byId("id2").getSelectedItem();
	var sToPageId = oEvent.getParameter("id2")
	.getCustomData()[0].getValue();
	this.getSplitAppObj()
	.toDetail(this.createId(sToPageId));
}*/
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf product.mainview
 */
// onBeforeRendering: function() {
//
// },

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf product.mainview
 */
// onAfterRendering: function() {
//
// },

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf product.mainview
 */
// onExit: function() {
//
// }
	});
});