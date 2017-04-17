System.register(["angular2/core", 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            let ShoppingListComponent = class ShoppingListComponent {
                constructor() {
                    this.pageTitle = 'Angular 2 - Attribute Directives';
                    this.subTitle = 'Shopping Items';
                    this.modalTitle = 'Shopping Cart';
                    this.shoppedItem = '';
                    this.shopingCart = [];
                    this.selectedItem = { name: "" };
                    this.shopItems = [
                        { name: "Shirt" },
                        { name: "Pant" },
                        { name: "Sarees" },
                        { name: "Jeans" },
                        { name: "T-Shirt" },
                    ];
                }
                onItemClicked(shopItem) {
                    this.selectedItem = shopItem;
                    this.itemAddedFlag = false;
                }
                openShopingCart(shopItems) {
                    this.itemAddedFlag = true;
                    if (shopItems.name != '' && shopItems.name != undefined) {
                        this.shopingCart.push(shopItems);
                        this.itemAddedFlag = false;
                    }
                }
                setStyles(item) {
                    let styles = {
                        'font-size': item ? '24px' : 'none',
                        'visibility': !item ? 'hidden' : 'visible'
                    };
                    return styles;
                }
            };
            ShoppingListComponent = __decorate([
                core_1.Component({
                    selector: "shopping",
                    templateUrl: './app/shopping-item.component.html',
                    styleUrls: ['./app/shopping-item.component.css'],
                    directives: [common_1.NgClass]
                }), 
                __metadata('design:paramtypes', [])
            ], ShoppingListComponent);
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});
//# sourceMappingURL=shopping-item.component.js.map