import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { register } from 'src/app/interfaces/register';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {
  // Define dropdown values with French labels and Arabic values
  dropdownValues = [
    { label: "la médecine générale", value: "الطب العام" },
    { label: "Neurologie", value: "طب الأعصاب" },
    { label: "dentiste", value: "طب الأسنان" },
    { label: "cardiologie", value: "طب القلب" },
    { label: "médecine pulmonaire", value: "طب الرئة" },
    { label: "Chirurgie générale", value: "الجراحة العامة" },
    { label: "Ophtalmologie", value: "طب العيون" },
    { label: "Pédiatrie", value: "طب الأطفال" },
    { label: "psychiatrie", value: "طب النفسي" },
    { label: "Gynécologie et Obstétrique", value: "الطب النسائي والتوليد" },
    { label: "Médecine Cardiovasculaire", value: "طب القلب والأوعية الدموية" },
    { label: "Oncologie", value: "طب الأورام" },
    { label: "Médecine des oreilles, du nez et de la gorge", value: "طب الأذن والأنف والحنجرة" },
    { label: "dentisterie cosmétique", value: "طب الأسنان التجميلي" },
    { label: "Physiothérapie et Médecine de Réadaptation", value: "طب العلاج الطبيعي وإعادة التأهيل" },
    { label: "Chirurgie plastique", value: "الجراحة التجميلية" },
    { label: "Dermatologie", value: "طب الأمراض الجلدية" }
  ];

  registerForm = this.fb.group({
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', Validators.required],
    specialty: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  get phone() {
    return this.registerForm.controls['phone'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get username() {
    return this.registerForm.controls['username'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get specialty() {
    return this.registerForm.controls['specialty'];
  }

  submitDetails() {
    const postData = { ...this.registerForm.value };
    this.authService.registerDoctor(postData as register).subscribe(
      response => {
        if (response) {
          console.log('Doctor registered successfully!');
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Doctor registered successfully' });
          this.router.navigate(['/login']);
        } else {
          console.log('Unexpected response:', response);
          this.messageService.add({ severity: 'error', summary: 'Sorry', detail: 'Something went wrong. The email or password is used.' });
        }
      },
      error => {
        console.log('Error during registration:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong during registration' });
      }
    );
  }
}
