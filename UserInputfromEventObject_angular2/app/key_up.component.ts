import {Component} from 'angular2/core';
@Component({
	selector: 'my-key',
	templateUrl: './app/key_up.component.html',
	styleUrls: ['./app/key_up.component.css']
})
export class KeyUpComponent {
	val='';
	onKey(event:KeyboardEvent) {
		this.val += '\n'+ (event.target).value + ' | '; //(event.target).value same as event.target.value or ((event).target).value
	}
}
