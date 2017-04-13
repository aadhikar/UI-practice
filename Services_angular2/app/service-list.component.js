System.register(["angular2/core", "./country.service"], function(exports_1, context_1) {
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
    var core_1, country_service_1;
    var MyListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            }],
        execute: function() {
            let MyListComponent = class MyListComponent {
                constructor(_countryService) {
                    this._countryService = _countryService;
                }
                getContacts() {
                    this._countryService.getContacts().then((countries) => this.countries = countries);
                }
                ngOnInit() {
                    this.getContacts();
                }
            };
            MyListComponent = __decorate([
                core_1.Component({
                    selector: "country-list",
                    templateUrl: './app/service-list.component.html',
                    styleUrls: ['./app/service-list.component.css'],
                    providers: [country_service_1.CountryService]
                }), 
                __metadata('design:paramtypes', [country_service_1.CountryService])
            ], MyListComponent);
            exports_1("MyListComponent", MyListComponent);
        }
    }
});
//# sourceMappingURL=service-list.component.js.map