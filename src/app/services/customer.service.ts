import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import axiosInstance from './axios.instance';

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
  
  private apiUrl = 'http://localhost:8080/api/customers/get-customer'; // Change to your backend URL

  async getUsers() {
    try {
      const response = await axiosInstance.get(this.apiUrl);
      console.log('Users:', response.data);
      let customers:Customer[] = [];
      return response.data;
    } catch (error) {
      console.error('Authorization Failed:', error);
    }
  }
}
