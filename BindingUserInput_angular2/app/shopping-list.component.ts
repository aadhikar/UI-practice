import {Component} from "angular2/core";

@Component({
   selector:'my-list',
   styleUrls: ['./app/shopping-list.component.css'],
   templateUrl: './app/shopping-list.component.html'
})

export class ItemListComponent{
   public listItems = [
      {name:"apple"},
      {name:"orange"},
      {name:"grapes"},
   ];
   public selectedItem = {name: ""};
   public recentDeletedItem = {name: ""};

   onItemClicked(listItem){
      this.selectedItem=listItem;
   }

   onAddItem(listItem){
      if(listItem.value != ''){
         this.listItems.push({name:listItem.value});
         listItem.value = '';
      }
   }

   onDeleteItem(listItem){
      this.listItems.splice(this.listItems.indexOf(listItem),1);
      this.recentDeletedItem.name = listItem.name;
   }
}
