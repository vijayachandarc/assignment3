import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment3';
  displayStatus = false;
  logArray = [];

  updateDisplayStatus() {
    this.displayStatus = !this.displayStatus;
    this.logArray.push(new Date());
  }
}
