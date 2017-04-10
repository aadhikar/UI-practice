System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyModulesClass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //framework recognizes @Component annotation and knows that we are trying to create a new component
            let MyModulesClass = class MyModulesClass {
            };
            MyModulesClass = __decorate([
                core_1.Component({
                    selector: 'my-app'
                }),
                core_1.View({
                    //this template value will be displayed in the browser
                    templateUrl: './app/modules.html',
                    styleUrls: ['./app/modules.css']
                }), 
                __metadata('design:paramtypes', [])
            ], MyModulesClass);
            exports_1("MyModulesClass", MyModulesClass);
        }
    }
});
//# sourceMappingURL=modules_app.component.js.map