import { Component, OnInit } from "@angular/core";
import { Preguntas } from "src/interface/preguntas/Preguntas";
import { PreguntaService } from "src/service/preguntas/Preguntar.service";

@Component({
    selector: 'preguntas',
    templateUrl: './preguntas.component.html',
    styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent implements OnInit {
    public pregunta: Preguntas;

    constructor(private servicio: PreguntaService) {
    }


    ngOnInit() {
        this.servicio.obtenerPreguntas(1).subscribe(
            (datos: Preguntas) => {
                this.pregunta = datos;
            }
        )
    }
}