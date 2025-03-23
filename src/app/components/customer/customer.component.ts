import { Component, Inject, Input, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';

interface Customer {
  firstName: string;
  lastName: string;
  address: string;
  phoneNo: string;
}

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  @Input()customers: Customer[] = [];
  // customerService = Inject(CustomerService)
  constructor(private customerService:CustomerService){}

  addCustomer(){
    this.customerService.postUser({firstName:"shashikant",lastName:"yadav",address:"abc321",phoneNo:"9876543210"})
  }
}
