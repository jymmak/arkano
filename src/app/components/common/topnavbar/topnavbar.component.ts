import { Component, Input, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery:any;

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent implements OnInit{

    public title: string;
    ngOnInit() {
    
        this.title = "e-Ventas";
    
    }


}
