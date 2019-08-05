import { Routes } from "@angular/router";
import { dashboardComponent } from "./views/dashboard/dashboard.component";
import { blankComponent } from "./components/common/layouts/blank.component";
import { basicComponent } from "./components/common/layouts/basic.component";


export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // App views
  {
    path: '', component: basicComponent,
    children: [
      { path: 'dashboard', component: dashboardComponent },


    ]
  },
  {
    path: '', component: blankComponent,
    children: [

    ]
  },


];
