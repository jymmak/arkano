
import { Component, Input } from '@angular/core';

@Component({
    selector: 'headboard-page',
    templateUrl: 'headboard-page.template.html'
})
export class HeadBoardComponent {
    @Input() titulo: any;
    @Input() subtitulo: any;
    @Input() links: Array<any>;
    constructor() {
        this.titulo = "";
        this.subtitulo = "";
        this.links = [];
    }
}