// component's metadata can be accessed using this primary Angular library
import {Component, View} from "angular2/core";

//framework recognizes @Component annotation and knows that we are trying to create a new component
@Component({
   selector: 'greet' //specifies selector for HTML element named 'app'
})

@View({
  //template property holds component's companion template that tells Angular how to render a view
  templateUrl: './app/template_app.component1.html',
  styleUrls: ['./app/template_app.component1.css']
})

export class Greet {
   name : 'Angular,'
}