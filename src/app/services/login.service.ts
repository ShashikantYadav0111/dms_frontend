import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface FormData{
  username:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:8080/";
  constructor(private http:HttpClient) { 
  }

  login(userData: FormData): Observable<any> {
    console.log("here in login");
    return this.http.post<any>(this.apiUrl+"login", userData).pipe(
      tap((res:any)=>{
        console.log("here in login:tap");
        console.log(res.token);
        localStorage.setItem('token',res.token);
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
