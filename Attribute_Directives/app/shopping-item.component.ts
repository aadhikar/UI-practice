import {Component, NgSwitch, NgSwitchWhen, NgSwitchDefault} from "angular2/core";
import {NgClass} from 'angular2/common';

@Component({
  selector: "shopping",
  templateUrl: './app/shopping-item.component.html',
  styleUrls: ['./app/shopping-item.component.css']
  directives: [NgClass]
})

export class ShoppingListComponent {
  public pageTitle: string = 'Angular 2 - Attribute Directives';
  public subTitle: string = 'Shopping Items';
  public modalTitle: string = 'Shopping Cart';
  public shoppedItem: string = '';
  public itemAddedFlag: boolean;
  public shopingCart = [];
  public selectedItem = {name: ""};
  public shopItems = [
  {name: "Shirt"},
  {name: "Pant"},
  {name: "Sarees"},
  {name: "Jeans"},
  {name: "T-Shirt"},
  ];
  
  onItemClicked(shopItem) {
    this.selectedItem = shopItem;
    this.itemAddedFlag = false;
  }
  openShopingCart(shopItems){
    this.itemAddedFlag = true;
    if(shopItems.name != '' && shopItems.name != undefined){
      this.shopingCart.push(shopItems);
      this.itemAddedFlag = false;
    }
  }
  setStyles(item) {
    let styles = {
      'font-size'  : item? '24px'   : 'none',
      'visibility' : !item? 'hidden' : 'visible'
    }
    return styles;
  }
}
