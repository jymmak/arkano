import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;



@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html'
})
export class dashboardComponent implements OnInit, AfterViewInit {
    public title: string
    public subtitle: string
    public listCards: Array<any>;
    public dashboardForm: FormGroup;
    public cantidadCompras: any;
    public incrementoCompras: any;
    public cantidadNuevosUsuarios: any;
    public cantidadNuevasVisitas: any;
    public listData: any;

    constructor(private router: Router) {
        this.listData = [];

    }
    initForm() {
        this.dashboardForm = new FormGroup({
            cantidadCompras: new FormControl("", [Validators.required]),
            incrementoCompras: new FormControl("", [Validators.required]),
            cantidadNuevosUsuarios: new FormControl("", [Validators.required]),
            cantidadNuevasVisitas: new FormControl("", [Validators.required])

        });

    }

    ngOnInit() {
        this.initForm();
        this.title = 'Dashboard';
        this.subtitle = 'Estadísticas';
        this.listCards = [
            {
                id: 1,
                icon: 'fa fa-shopping-bag',
                count: 150,
                desc: 'Nuevas Compras',
                more: 'Más Info',
                arrow: 'fa fa-arrow-circle-right',
                colorCard: '#3598dc',
                moreColor: '#258fd7'
            },
            {
                id: 2,
                icon: 'fa fa-bar-chart',
                count: '53%',
                desc: 'Incremento de Compras',
                more: 'Más Info',
                arrow: 'fa fa-arrow-circle-right',
                colorCard: '#008000',
                moreColor: '#0d730d'
            },
            {
                id: 3,
                icon: 'fa fa-user-plus',
                count: 44,
                desc: 'Nuevos Usuarios',
                more: 'Más Info',
                arrow: 'fa fa-arrow-circle-right',
                colorCard: '#E29F0F',
                moreColor: '#B27D0B'
            },
            {
                id: 4,
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


    dashboard() {
        $("#dashboardModal").modal("hide");
        // let data: any = {
        //     cantidadCompras: this.dashboardForm.get('cantidadCompras').value,
        //     incrementoCompras: this.dashboardForm.get('incrementoCompras').value,
        //     cantidadNuevosUsuarios: this.dashboardForm.get('cantidadNuevosUsuarios').value,
        //     cantidadNuevasVisitas: this.dashboardForm.get('cantidadNuevasVisitas').value
        // };
        // console.log(data);
        this.listData = {
            cantidadCompras: this.cantidadCompras,
            incrementoCompras: this.incrementoCompras,
            cantidadNuevosUsuarios: this.cantidadNuevosUsuarios,
            cantidadNuevasVisitas: this.cantidadNuevasVisitas

        }
        console.log(this.listData);
    }


    ngAfterViewInit() {

    }

}