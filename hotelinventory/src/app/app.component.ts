import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-root',
  imports: [RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello World this is from inline</h1>
  
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelinventory';
  role = "Admin";
}
