import { Component } from '@angular/core';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./pages/login/login.component";
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from './Interceptors/jwt.interceptor';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, NavbarComponent, LoginComponent,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dms-frontend2';
  isLoggedin:boolean=false;
  setLogStatus(status:boolean){
    console.log("In app.html:"+status);
    this.isLoggedin = status;
  }
}
