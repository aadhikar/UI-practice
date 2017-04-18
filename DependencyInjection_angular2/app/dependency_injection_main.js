System.register(['angular2/platform/browser', "./fruit-component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, fruit_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (fruit_component_1_1) {
                fruit_component_1 = fruit_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(fruit_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=dependency_injection_main.js.map