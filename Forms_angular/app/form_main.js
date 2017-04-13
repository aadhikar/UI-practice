System.register(['angular2/platform/browser', './contact-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, contact_form_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(contact_form_component_1.ContactComponent);
        }
    }
});
//# sourceMappingURL=form_main.js.map