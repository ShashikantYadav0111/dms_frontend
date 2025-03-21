import { Component, inject, Inject, OnInit } from '@angular/core';
import { CustomerComponent } from '../../components/customer/customer.component';
import { EmployeeComponent } from '../../components/employee/employee.component';
import { InventoryComponent } from '../../components/inventory/inventory.component';

import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNo: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CustomerComponent,
    EmployeeComponent,
    InventoryComponent,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent{
  customers: Customer[]=[];
  isCustomerSelected = true;
  isEmployeeSelected = false;
  isInventorySelected = false;

  customerService = inject(CustomerService)

  onClick() {
    this.isCustomerSelected = true;
    this.isEmployeeSelected = false;
    this.isInventorySelected = false;
    this.customerService.getUsers().then((data)=>{
      this.customers = data;
    });
  }

  setEmployee() {
    this.isCustomerSelected = false;
    this.isEmployeeSelected = true;
    this.isInventorySelected = false;
  }
  setInventory() {
    this.isCustomerSelected = false;
    this.isEmployeeSelected = false;
    this.isInventorySelected = true;
  }
}
