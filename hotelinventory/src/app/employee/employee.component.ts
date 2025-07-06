import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers: [RoomsService],
  standalone:false
})
export class EmployeeComponent implements OnInit{
  name:string = "John";
  constructor(@Self() private roomsService: RoomsService) {}
  ngOnInit(): void {
  }

}
