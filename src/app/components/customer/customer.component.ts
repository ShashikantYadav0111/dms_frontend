import { Component, Inject, Input, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';

export interface Customer {
  id: number;
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

  

  
}
