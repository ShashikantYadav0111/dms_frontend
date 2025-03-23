import { Component } from '@angular/core';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./pages/login/login.component";
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, NavbarComponent, LoginComponent,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dms-frontend2';
  constructor(private loginService:LoginService){}
  isLoggedin:boolean=false;
  setLogStatus(){
    if(this.loginService.getToken()!=null){
      this.isLoggedin=true;
    }
  }
}
