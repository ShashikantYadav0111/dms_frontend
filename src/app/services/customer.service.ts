import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNo: string;
}

@Injectable({
  providedIn: 'root'
})


export class CustomerService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/api/customers/get-customer';

  // Example: Fetch a list of users
  getUsers(): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}`);
  }

 
}
