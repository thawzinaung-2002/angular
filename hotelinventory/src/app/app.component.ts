import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  imports: [RoomsComponent],
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello World this is from inline</h1>
  
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelinventory';
}
