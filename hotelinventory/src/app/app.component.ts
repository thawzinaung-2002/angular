import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  selector: 'hinv-root',
  imports: [RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello World this is from inline</h1>
  
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Thaw Zin Aung";
    console.log(this.name);
  }
  ngAfterViewInit(): void {
    //  const componentRef = this.vcr.createComponent(RoomsComponent);
    //  componentRef.instance.numsOfRooms = 1000;
  }

  title = 'hotelinventory';
  role = "Admin";

  @ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;

  @ViewChild('name,', {static: true}) name !: ElementRef;



}
