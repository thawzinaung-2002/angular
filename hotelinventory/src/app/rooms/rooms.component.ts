import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
  ngAfterViewChecked(): void {
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Room Views";
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  hotelName:string = "Inya Lake";
  numsOfRooms:number = 10; 
  hideRooms:boolean = false;
  rooms: Room  = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
 
  }
  selectedRoom !: RoomList;
  title: string = 'Room List';
  roomList: RoomList[] = [];

  ngOnInit(): void {

    // console.log(this.headerComponent);

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
  ];

    
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectedRoomList(room : RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNo: 5,
      roomType: "Deluxe Room 5",
      amenities: "Air Con, TV",
      price : 700,
      photos : "",
      checkinTime: new Date("11-Nov-2025"),
      checkoutTime: new Date("11-Dec-2025"),
      rating : 5.0
    }

    // this.roomList.push(room);

    this.roomList = [...this.roomList, room];
  }

}
