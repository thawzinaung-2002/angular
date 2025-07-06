import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  standalone: false
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {

  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Room Views";
    this.headerChildren.last.title = "Last Title";
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }


  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>;

  hotelName: string = "Inya Lake";
  numsOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5

  }
  selectedRoom !: RoomList;
  title: string = 'Room List';
  roomList: RoomList[] = [];

  // roomService = new RoomsService();

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {

    // console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms();
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectedRoomList(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNo: 5,
      roomType: "Deluxe Room 5",
      amenities: "Air Con, TV",
      price: 700,
      photos: "",
      checkinTime: new Date("11-Nov-2025"),
      checkoutTime: new Date("11-Dec-2025"),
      rating: 5.0
    }

    // this.roomList.push(room);

    this.roomList = [...this.roomList, room];
  }

}
