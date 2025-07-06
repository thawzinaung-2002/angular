import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  providers: [RoomsService],
  standalone: false
})
export class ContainerComponent implements OnInit, AfterContentInit{


  constructor(@Host() private roomsService: RoomsService) {}

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.name = "John Smith";
  }

}
