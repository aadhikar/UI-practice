import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/structural_app.component.html',
  styleUrls: ['./app/structural_app.component.css'];
})
export class AppComponent {
  title = 'Angular 2 - Structural Directives';

  public names = [
  { name: "Kamal"},
  { name: "Mitchel"},
  { name: "Yoon"},
  { name: "Johnson"},
  { name: "Jet Li"}
  ];
  public selectedName = {name : ""};
  public recentDeletedItem = {name: ""};

  onNameClicked(nam: string): void {
    this.selectedName = nam;
  }
  onAddName(nam: string): void {
    if(nam.value != ''){
      this.names.push({name:nam.value});
      nam.value = '';
    }
  }
  onDeleteName(nam: string): void {
    this.names.splice(this.names.indexOf(nam), 1);
    this.recentDeletedItem.name = nam.name;
    this.selectedName.name = "";
  }
}