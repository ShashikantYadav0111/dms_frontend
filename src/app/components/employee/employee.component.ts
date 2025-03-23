import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employee = {
    id:1,
    firstName:"Employee ",
    lastName:"1",
    phoneNo:"9876543210",
  }
}
