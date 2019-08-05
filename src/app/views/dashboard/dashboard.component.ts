import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;



@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html'
})
export class dashboardComponent implements OnInit, AfterViewInit  {
    public title: string
    public subtitle: string
    public listCards: Array<any>;
 

    constructor(private router: Router) {

    }

    ngOnInit() {
    
        this.title = 'Dashboard';
        this.subtitle = 'Estadísticas';
        this.listCards = [
            {
                icon: 'fa fa-shopping-bag',
                count: 150,
                desc: 'Nuevas Compras',
                more: 'Más Info',
                arrow: 'fa fa-arrow-circle-right',
                colorCard: '#3598dc',
                moreColor: '#258fd7'
            },
            {
                icon: 'fa fa-bar-chart',
                count: '53%',
                desc: 'Incremento de Compras',
                more: 'Más Info',
                arrow: 'fa fa-arrow-circle-right',
                colorCard: '#008000',
                moreColor: '#0d730d'
            },
            {
                icon: 'fa fa-user-plus',
                count: 44,
                desc: 'Nuevos Usuarios',
                more: 'Más Info',
                arrow: 'fa fa-arrow-circle-right',
                colorCard: '#E29F0F',
                moreColor: '#B27D0B'
            },
            {
                icon: 'fa fa-pie-chart',
                count: 65,
                desc: 'Nuevas Visitas',
                more: 'Más Info',
                arrow: 'fa fa-arrow-circle-right',
                colorCard: '#CC0000',
                moreColor: '#8e0000'
            },
        ]






    }

    ngAfterViewInit() {
   
    }

}