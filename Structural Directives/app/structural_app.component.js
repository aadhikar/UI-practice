System.register(['angular2/core'], function(exports_1, context_1) {
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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.title = 'Angular 2 - Structural Directives';
                    this.names = [
                        { name: "Kamal" },
                        { name: "Mitchel" },
                        { name: "Yoon" },
                        { name: "Johnson" },
                        { name: "Jet Li" }
                    ];
                    this.selectedName = { name: "" };
                    this.recentDeletedItem = { name: "" };
                }
                onNameClicked(nam) {
                    this.selectedName = nam;
                }
                onAddName(nam) {
                    if (nam.value != '') {
                        this.names.push({ name: nam.value });
                        nam.value = '';
                    }
                }
                onDeleteName(nam) {
                    this.names.splice(this.names.indexOf(nam), 1);
                    this.recentDeletedItem.name = nam.name;
                    this.selectedName.name = "";
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: './app/structural_app.component.html',
                    styleUrls: ['./app/structural_app.component.css']
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=structural_app.component.js.map