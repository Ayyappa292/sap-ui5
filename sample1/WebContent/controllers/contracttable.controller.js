sap.ui.define(
				[

				"sap/ui/core/mvc/Controller", "sap/m/MessageToast", ],
				function(Controller, MessageToast) {
					"use strict";
					return Controller
							.extend(
									"sample1.controllers.contracttable",
									{
										
										
										onInit: function() {

									debugger;

									const oModel = new sap.ui.model.odata.v2.ODataModel("proxy/sap/opu/odata/sap/ZAR_SB_CUST_DETAILS");
									oModel.read('/customer', {
										success:function(oResponse){
											debugger;
										},
										error: function(oResponse) {
											debugger;
										}
									})	
								},		
										
								

										onAdd : function(oEvent) {
											if (!this.newdialog) {
												this.newdialog = sap.ui
														.xmlfragment(
																"sample1.fragmets.modify",
																this);
											}
											var oDialog = this.newdialog;
											/* oEvent.addDependent(oDialog); */
											this.newdialog.open();
										},
										
										onEdit : function() {

										},

										onDelete : function(oEvent) {
											let oModel = this.getView()
													.getModel("mymodel");
											
											let oTable = this.getView().byId("myTable");
											
											var contexts = oTable.getSelectedContexts();
										      var aRecord = contexts.map(function(c) {
										        return c.getObject();
										      });
										      var oRecord = aRecord[0];
										      var nId = oRecord.id;
											debugger;
											$.ajax({
												
												url:"http://sun.pivoxlabs.com:8002/pivox/httphandler/zar_crud_fm?sap-client=300&sap-user=ayyappa&sap-password=Reddy@1234",
												data:{ LvDelid : nId
											},
											success : function(oData)
											{
												MessageToast
												.show("deleted  successfully");
											}
											})
										
										},

										onSubmitDetails : function() {
											debugger;
											let nMandt = sap.ui.getCore().byId("nmandt").getValue();
											let nId = sap.ui.getCore().byId("nid").getValue();
											let sName = sap.ui.getCore().byId("sname").getValue();
											let sBranch = sap.ui.getCore().byId("sbranch").getValue();
											let sDno = sap.ui.getCore().byId("sdno").getValue();
											let sStreet = sap.ui.getCore().byId("sstreet").getValue();
											let sCity = sap.ui.getCore().byId("scity").getValue();
											let sState = sap.ui.getCore().byId("sstate").getValue();
											let sCountry = sap.ui.getCore().byId("scountry").getValue();
											let oModel = this.getView()
													.getModel("mymodel");
											let oObject = oModel
													.getProperty("/insert");
											oObject.push({
														mandt : nMandt,
														id : nId,
														name : sName,
														branch : sBranch,
														dno : sDno,
														street : sStreet,
														city : sCity,
														state : sState,
														country : sCountry
														
													});
													oModel.setProperty("/insert",oObject);
													console.log(oModel
													.getProperty("/insert"));
											let oPayload = {};
											/*	*/
											debugger;
											$
													.ajax({
														url : "http://sun.pivoxlabs.com:8002/pivox/httphandler/zar_crud_fm?sap-client=300&sap-user=ayyappa&sap-password=Reddy@1234",
														dataType : "json",
														method : "POST",
														contentType : "aplication/json",
														data : JSON
																.stringify({
																	lsDetails : oObject["0"]
																}),
														success : function(
																oData) {
															debugger;
															MessageToast
																	.show("added successfully");
														},

													})
										},

										onCancleDetails : function() {
											this.newdialog.close();
										},
										
										onItemPress: function(oEvent){
											debugger;
											let oModel = this.getView().getModel("mymodel");
											var aArray =  oModel.getProperty("/completedetails");
										      var nId = oEvent.getParameters().listItem.mAggregations.cells["0"].mProperties.text;
											debugger;
											$.ajax({
												url : "http://sun.pivoxlabs.com:8002/pivox/httphandler/zar_crud_fm?sap-client=300&sap-user=ayyappa&sap-password=Reddy@1234",
												dataType : "json",
												data :{
													 LvId : nId },
												success : function(oData) {
													debugger;
													MessageToast.show(nId,"is pressed");

													oModel.setProperty("/completedetails",oData.lsRead);
												},
												
											})

											var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
											oRouter.navTo("detailpage",{
												item: nId
											});
										
										}


									});
				});