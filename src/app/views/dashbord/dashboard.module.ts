import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {dashboardComponent} from "./dashboard.component";
import { HeadBoardModule } from "../../components/common/headboard-page/headboard-page.module";

@NgModule({
    declarations: [dashboardComponent],
    imports     : [
        BrowserModule,
        HeadBoardModule
    ],
})

export class dashboardModule {}