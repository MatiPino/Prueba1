import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/service/preguntas/Preguntar.service';

@Component({
    selector: 'puntuacion',
    templateUrl: './puntuacion.component.html',
    styleUrls: ['./puntuacion.component.css']
})

export class PuntuacionComponent implements OnInit {
    public puntaje: number;
    private preguntasService: PreguntaService;

    constructor(servicio: PreguntaService) {
        this.preguntasService = servicio;
    }

    ngOnInit() {
        this.puntaje = this.preguntasService.obtenerPuntos();
    }

}
