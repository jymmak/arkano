import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views

import {dashboardModule} from "./views/dashbord/dashboard.module";


// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,

    // Views
  
    dashboardModule,
   

    // Modules
    LayoutsModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
