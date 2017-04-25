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
    var PhonePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let PhonePipe = class PhonePipe {
                transform(num) {
                    if (num.indexOf('x') > -1) {
                        var ext = num.slice(num.indexOf('x') + 1);
                    }
                    var n = num.match(/\d+/g).join('');
                    if (n.startsWith('1')) {
                        return n.substr(0, 1) + '-' + n.substr(1, 3) + '-' + n.substr(4, 3) + '-' + n.substr(7, 4);
                    }
                    else if (n.startsWith('001')) {
                        return n.substr(2, 1) + '-' + n.substr(3, 3) + '-' + n.substr(6, 3) + '-' + n.substr(9, 4);
                    }
                    else {
                        return n.substr(0, 3) + '-' + n.substr(3, 3) + '-' + n.substr(6, 4);
                    }
                }
            };
            PhonePipe = __decorate([
                core_1.Pipe({
                    name: 'phone'
                }), 
                __metadata('design:paramtypes', [])
            ], PhonePipe);
            exports_1("PhonePipe", PhonePipe);
        }
    }
});
//# sourceMappingURL=phone.pipe.js.map