import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
import { HttpClientModule } from '@angular/common/http'


@NgModule({
    declarations: [NavigationComponent],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [NavigationComponent],
})

export class NavigationModule { }