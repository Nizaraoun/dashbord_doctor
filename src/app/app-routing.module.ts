// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import CalendarComponent from '@fullcalendar/core/CalendarComponent';
import { ChatComponent } from './components/pages/chat/chat.component';
import { DoctorProfileComponent } from './components/pages/doctor-profile/doctor-profile.component';
import { EditPatientProfilComponent } from './components/pages/edit-patient-profil/edit-patient-profil.component';
import { PatientProfileComponent } from './components/pages/patient-profile/patient-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
   {
  path: "dashboard",
  children: [
    {
      path: "home",
      canActivate: [AuthGuard], // Protect 'home' route
      async loadComponent() {
        return (await import('./components/pages/home/home.component')).HomeComponent;
      },
    },
  ],
},
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path: "chat",
    component: ChatComponent,
  },
  // {
  //   path: "calendar",
  //   component: CalendarComponent,
  // },
  {
    path: "MyProfile",
    component: DoctorProfileComponent,
  },
  {
    path: "patientprofile",
    component: PatientProfileComponent,
  },
  {
    path: "editpatientprofile",
    component: EditPatientProfilComponent,
  },

  {
    path: '', 
    redirectTo: 'dashboard/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
