import { Inject, Injectable, OnInit } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService implements OnInit{

  roomList: RoomList[] = [];

  getRooms$ = () => {
    return this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );
  };

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) { 
    console.log(this.config.apiEndpoint);
    console.log("Room service called....");

  }
  ngOnInit(): void {
    
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>("api/rooms", room);
  }

  getPhotos() {
    const request = new HttpRequest("GET", `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true
    });

    return this.http.request(request);
  }
}

