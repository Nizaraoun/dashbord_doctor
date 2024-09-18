import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
/// <reference types="@angular/localize" />


bootstrapApplication(AppComponent, {
  providers: [provideCharts(withDefaultRegisterables())],
}).catch((err) => console.error(err));

