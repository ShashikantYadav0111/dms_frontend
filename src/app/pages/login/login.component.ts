import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/axios.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginService = inject(LoginService);

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async handleLogin() {
    try {
      const response = await this.authService.login({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      });
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login error:', error);
    }
  }
}
