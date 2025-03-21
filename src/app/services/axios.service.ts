import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login'; // Update with your backend login URL

  constructor() {}

  async login(credentials: { username: string; password: string }) {
    try {
      const response = await axios.post(this.apiUrl, credentials);
      console.log("here in authsrvice:"+response.data);

      if (response.data) {
        localStorage.setItem('token', response.data); // Save token in local storage
        return response.data;
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  getToken() {
    return localStorage.getItem('token'); // Retrieve the token
  }

  logout() {
    localStorage.removeItem('token'); // Clear token on logout
  }
}