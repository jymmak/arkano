    
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { HeadBoardComponent } from "./headboard-page.component";



@NgModule({
    declarations: [HeadBoardComponent],
    imports     : [
        BrowserModule,
         RouterModule,
      
       
        ],
    exports: [HeadBoardComponent]
})

export class HeadBoardModule {}