import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './components/pages/home/home.component';
import { DropdownModule } from 'primeng/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
    ],
    bootstrap: [AppComponent], 
    imports:
        [
        DropdownModule, // Add PrimeNG DropdownModule here
        BrowserModule,
        AppRoutingModule,
        CardModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        FormsModule, // Add this line
        ToastModule,
        NgbModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
  
    ], providers: [MessageService, provideHttpClient(withInterceptorsFromDi())
        ,provideCharts(withDefaultRegisterables())

    ] })
export class AppModule { }
