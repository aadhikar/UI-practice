import {Component} from "angular2/core";
import {CountryService} from "./country.service";
import {Contact} from "./country";
import {OnInit} from "angular2/core";

@Component({
   selector: "country-list",
   templateUrl: './app/service-list.component.html',
   styleUrls: ['./app/service-list.component.css']
   providers: [CountryService]
})

export class MyListComponent implements OnInit {
   public countries : Country[];
   constructor(private _countryService: CountryService) {}

   getContacts(){
      this._countryService.getContacts().then((countries: Country[]) => this.countries = countries);
   }

   ngOnInit():any{
      this.getContacts();
   }
}
