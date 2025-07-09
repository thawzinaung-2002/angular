import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from "./employee/employee.component";
import { LoggerService } from './logger.service';
import { localStorageToken } from '../../localstorage.token';
import { InitService } from './init.service';


@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello World this is from inline</h1>
  
  // `,
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(@Optional() private loggerService: LoggerService, @Inject(localStorageToken) private localStorage: any) {}

  ngOnInit(): void {
    this.loggerService?.log("App.component. ngOnit()");
    this.name.nativeElement.innerText = "Thaw Zin Aung";
    console.log(this.name);
    this.localStorage.setItem("name", "Thaw Zin Aung");
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
