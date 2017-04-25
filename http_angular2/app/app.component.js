System.register(["rxjs/add/operator/map", 'angular2/core', './phone.pipe', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, phone_pipe_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (phone_pipe_1_1) {
                phone_pipe_1 = phone_pipe_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(http) {
                    this.http = http;
                }
                ngOnInit() {
                    this.http.get('https://jsonplaceholder.typicode.com/users')
                        .map(response => {
                        console.log(response.json());
                        return response.json();
                    })
                        .subscribe((userData) => {
                        console.log('userData: ' + userData);
                        this.users = userData;
                    }, error => console.log(error));
                }
                removeUser(evt) {
                    if (evt.type === 'click') {
                        evt.target.parentNode.parentNode.remove();
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], AppComponent.prototype, "users", void 0);
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: './app/app.component.html',
                    styleUrls: ['./app/app.component.css'],
                    pipes: [phone_pipe_1.PhonePipe]
                }), 
                __metadata('design:paramtypes', [http_1.Http])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map