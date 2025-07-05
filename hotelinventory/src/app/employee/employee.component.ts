import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  name:string = "John";
  ngOnInit(): void {
  }

}
