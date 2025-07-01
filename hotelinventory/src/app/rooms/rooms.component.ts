import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{

  hotelName:string = "Inya Lake";
  numsOfRooms:number = 10; 
  hideRooms:boolean = false;

  ngOnInit(): void {
    
  }

  //3:28

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
