import {Component} from "angular2/core";
import {FruitService} from "./fruits.service";
import {Fruits} from "./fruits";
import {OnInit} from "angular2/core";

@Component({
   selector: "my-list",
   templateUrl: './app/play-component.html',
   styleUrls: ['./app/play-component.css'],
   providers: [FruitService]  //providers are part of @Component metadata 
})

//The 'MyListComponent' should get list of fruits from the injected 'FruitService'
export class MyListComponent implements OnInit {
   public fruits : Country[];

   //Using constructor, call the _fruitService and populate the fruits list
   constructor(private _fruitService: FruitService) {}

   getContacts(){
      this._fruitService.getContacts().then((fruits: Country[]) => this.fruits = fruits);
   }

   //The 'ngOnInit()' hook is called when done with creating the component and evaluated the inputs
   ngOnInit():any{
      this.getContacts();
   }
}
