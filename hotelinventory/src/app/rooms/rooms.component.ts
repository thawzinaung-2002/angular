import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{

  hotelName:string = "Inya Lake";
  numsOfRooms:number = 10; 
  hideRooms:boolean = false;
  rooms: Room  = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
 
  }

  roomList: RoomList[] = [];

  ngOnInit(): void {

  this.roomList   = [
    {
      roomNo: 1,
      roomType: "Deluxe Room",
      amenities: "Air Con",
      price : 500,
      photos : "",
      checkinTime: new Date("11-Nov-2025"),
      checkoutTime: new Date("11-Dec-2025"),
      rating: 1.2
    },
    {
      roomNo: 2,
      roomType: "Deluxe Room",
      amenities: "Air Con",
      price : 500,
      photos : "",
      checkinTime: new Date("11-Nov-2025"),
      checkoutTime: new Date("11-Dec-2025"),
      rating: 2.5
    },
    {
      roomNo: 3,
      roomType: "Deluxe Room",
      amenities: "Air Con",
      price : 500,
      photos : "",
      checkinTime: new Date("11-Nov-2025"),
      checkoutTime: new Date("11-Dec-2025"),
      rating: 3.5
    },
    {
      roomNo: 4,
      roomType: "Deluxe Room",
      amenities: "Air Con",
      price : 500,
      photos : "",
      checkinTime: new Date("11-Nov-2025"),
      checkoutTime: new Date("11-Dec-2025"),
      rating : 5.0
    }
  ]

    
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
