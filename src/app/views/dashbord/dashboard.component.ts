import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html'
})
export class dashboardComponent implements OnInit{ 
    public links: Array<any>;

    constructor(private router: Router) {
        this.links = [
            { titulo: 'Dashboard' },
            { subtitulo: 'Estadísticas' },
        ];
 

    }
    ngOnInit(){}

}