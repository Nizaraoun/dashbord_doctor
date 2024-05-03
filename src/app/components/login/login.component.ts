import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { register } from 'src/app/interfaces/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }

  loginUser() {
    const postData = { ...this.loginForm.value };
    const { email, password } = this.loginForm.value;
  
    this.authService.getUserByEmail(postData as User).subscribe(
      (response: any) => { // Assuming 'response' is of type any
        if (response != null) {
          console.log(response);
  
          // Assuming 'accessToken' is the property name for your access token in the response
          const accessToken = response.accessToken;
  
          // Save the data in local storage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('email', response.username);
          localStorage.setItem('username', response.email);
          localStorage.setItem('specialty', response.specialty);
          localStorage.setItem('phone', response.phone);
          localStorage.setItem('id', response.id);

          
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
        }
      },
      error => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  

    
  }
}
