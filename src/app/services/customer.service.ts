
import { Injectable } from '@angular/core';
import axiosInstance from './axios.instance';

interface Customer {
  firstName: string;
  lastName: string;
  address: string;
  phoneNo: string;
}

@Injectable({
  providedIn: 'root'
})


export class CustomerService {
  
  private apiUrl = 'http://localhost:8080/api/customers/'; // Change to your backend URL

  async getUsers() {
    try {
      const response = await axiosInstance.get(this.apiUrl+"get-customer");
      console.log('Users:', response.data);
      return response.data;
    } catch (error) {
      console.error('Authorization Failed:', error);
    }
  }

  async postUser(customer:Customer){
    try{
      const response = await axiosInstance.post(this.apiUrl+"add-customer",customer)
      console.log(response);
    }catch(error){
      console.error(error);
    }
  }

  

}
