import { Component } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent {
    public el: any;
    constructor(private router: Router) {}

    ngAfterViewInit() {

  
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }


}