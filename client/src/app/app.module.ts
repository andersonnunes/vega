import * as Raven from 'raven-js'; 
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './app.error-handler';
import { VehicleService } from './services/vehicle.service';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';

Raven.config('https://c247e614da5848dbb108be14e2c8ba1b@sentry.io/203097').install()

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    VehicleFormComponent
  ],
  imports: [
    FormsModule,
    ToastyModule.forRoot(),
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'vehicles/new', pathMatch: 'full' },
      { path: 'vehicles/new', component: VehicleFormComponent },
      { path: 'vehicles/:id', component: VehicleFormComponent },
      { path: '**', redirectTo: 'vehicles/new' },
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
