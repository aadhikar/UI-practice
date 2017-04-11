import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/data_binding_app.component.html',
  styleUrls: ['./app/data_binding_app.component.css']
})
export class AppComponent {
  public Items = [
  {name: "Butter"},
  {name: "Milk"},
  {name: "Yogurt"},
  {name: "Cheese"},
  ];
  public clickedItem = {name: ""};
  onItemClicked(Item) {
    console.log(Item);
    this.clickedItem = Item;
  }
}
