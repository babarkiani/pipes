import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name = "Babar";
 day = new Date(1994,7,22);

 arr = [3,7,8,2,4];
}
