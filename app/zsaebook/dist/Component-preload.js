//@ui5-bundle zsae/zsaebook/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"zsae/zsaebook/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("zsae.zsaebook.Component",{metadata:{manifest:"json"}})});
},
	"zsae/zsaebook/i18n/i18n.properties":'# This is the resource bundle for zsae.zsaebook\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Books\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"zsae/zsaebook/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"zsae.zsaebook","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.9.0","toolsId":"1b5f86ae-4a7e-43ec-9540-bab22b865f34"},"dataSources":{"mainService":{"uri":"library/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"zlab-zlabbook-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Books","action":"manage","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","icon":"sap-icon://education","indicatorDataSource":{"dataSource":"mainService","path":"/dynamic_dest/zlablibrary-app-srv/library/Books/$count","refresh":10}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.111.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"zsae.zsaebook.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BooksList","target":"BooksList"},{"pattern":"Books({key}):?query:","name":"BooksObjectPage","target":"BooksObjectPage"}],"targets":{"BooksList":{"type":"Component","id":"BooksList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Books","variantManagement":"Page","navigation":{"Books":{"detail":{"route":"BooksObjectPage"}}}}}},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Books"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"caplibrary"}}'
}});
