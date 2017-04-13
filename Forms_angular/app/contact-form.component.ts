import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Contact } from './contact';
@Component({
  selector: 'contact-form',
  templateUrl: './app/contact-form.component.html'
})
export class ContactComponent {
  countries = ['USA', 'Australia', 'England', 'South Africa', 'India', 'Japan', 'Singapore'];
  contact = new Contact('John', 'Doe', this.countries[0], 6445874544);
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
  newContact() {
    this.contact = new Contact('', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}
