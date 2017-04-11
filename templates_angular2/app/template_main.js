System.register(["angular2/platform/browser", "./template_app.component", "./template_app.component1"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, template_app_component_1, template_app_component1_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (template_app_component_1_1) {
                template_app_component_1 = template_app_component_1_1;
            },
            function (template_app_component1_1_1) {
                template_app_component1_1 = template_app_component1_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(template_app_component1_1.Greet);
            browser_1.bootstrap(template_app_component_1.MyTemplate);
        }
    }
});
//# sourceMappingURL=template_main.js.map