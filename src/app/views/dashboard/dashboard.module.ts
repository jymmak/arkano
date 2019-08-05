import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { dashboardComponent } from "./dashboard.component";
import { HeadBoardModule } from "../../components/common/headboard-page/headboard-page.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [dashboardComponent],
    imports: [

        BrowserModule,
        HeadBoardModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
 

    ],
})

export class dashboardModule { }