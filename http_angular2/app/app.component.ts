import "rxjs/add/operator/map";
import {Component, Input} from 'angular2/core';

import {PhonePipe} from './phone.pipe'
import {Http} from 'angular2/http';


interface Person {
    id: number;
    name: string;
    username: string;
    email: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    pipes: [PhonePipe]
})
export class AppComponent {
    @Input() private users: Person[];

    constructor(private http: Http) {
    }

    public ngOnInit() {
        this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(response => {
            console.log(response.json());
            return response.json()
        })
        .subscribe((userData: Person[]) => {
            console.log('userData: ' + userData);
            this.users = userData;
        }, error => console.log(error))
    }
    removeUser(evt){
        if(evt.type === 'click'){
            evt.target.parentNode.parentNode.remove();
        }        
    }
}
