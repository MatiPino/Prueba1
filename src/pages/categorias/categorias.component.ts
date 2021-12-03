import { Component } from '@angular/core';
import { PreguntaService } from 'src/service/preguntas/Preguntar.service';

@Component({
    selector: 'categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent {

    private preguntasService: PreguntaService;

    constructor(servicio: PreguntaService) {
        this.preguntasService = servicio;
    }

    public settearCategoria(text: string) {
        this.preguntasService.setCategoria(text);
    }

}
