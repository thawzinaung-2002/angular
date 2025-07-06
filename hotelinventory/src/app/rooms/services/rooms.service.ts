import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
      {
        roomNo: 1,
        roomType: "Deluxe Room",
        amenities: "Air Con",
        price: 500,
        photos: "",
        checkinTime: new Date("11-Nov-2025"),
        checkoutTime: new Date("11-Dec-2025"),
        rating: 1.2
      },
      {
        roomNo: 2,
        roomType: "Deluxe Room",
        amenities: "Air Con",
        price: 500,
        photos: "",
        checkinTime: new Date("11-Nov-2025"),
        checkoutTime: new Date("11-Dec-2025"),
        rating: 2.5
      },
      {
        roomNo: 3,
        roomType: "Deluxe Room",
        amenities: "Air Con",
        price: 500,
        photos: "",
        checkinTime: new Date("11-Nov-2025"),
        checkoutTime: new Date("11-Dec-2025"),
        rating: 3.5
      },
      {
        roomNo: 4,
        roomType: "Deluxe Room",
        amenities: "Air Con",
        price: 500,
        photos: "",
        checkinTime: new Date("11-Nov-2025"),
        checkoutTime: new Date("11-Dec-2025"),
        rating: 5.0
      }
    ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { 
    console.log(this.config.apiEndpoint);
    console.log("Room service called....");
  }


  getRooms() {
    return this.roomList;
  }
}
