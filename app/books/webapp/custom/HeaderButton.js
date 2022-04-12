sap.ui.define([
    "sap/fe/templates/ObjectPage/ExtensionAPI"
], function(ExtensionAPI) {
    "use strict";

    return {
        onButtonPressed: function(oEvent) {
            const oView = this.routing.getView();
            if (!this._pDialog) {
                const oExtensionApi = new ExtensionAPI(oView.getController());
                this._pDialog = oExtensionApi.loadFragment({
                    name: "ns.books.custom.PapersTable",
                    contextPath: "/Papers"
                })
                .then(oDialog => {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog.then(oDialog => oDialog.open());
        }
    };
});