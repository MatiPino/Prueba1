import { Component, OnInit } from '@angular/core';
import { Preguntas } from 'src/interface/preguntas/Preguntas';
import { PreguntaService } from 'src/service/preguntas/Preguntar.service';

@Component({
    selector: 'preguntas',
    templateUrl: './preguntas.component.html',
    styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent implements OnInit {
    public pregunta: Preguntas;
    public preguntas: any;
    public preguntas$: any;
    private preguntasService: PreguntaService;

    constructor(servicio: PreguntaService) {
        this.preguntasService = servicio;
    }

    ngOnInit() {
        this.preguntas$ = this.preguntasService.listarPreguntasMatematica();
        this.preguntas$.subscribe(datos => this.preguntas = datos);
    }

    public evaluarRespuesta(id: number, opcion: string){
        const preguntaEvaluada1 = this.preguntas.map(pregunta => {if(pregunta.id === id){return pregunta;}else {return null;}});
        if(preguntaEvaluada1[id-1].respuesta === opcion){
            console.log('Correcto');
        } else {
            console.log('Incorrecto');
        }
    }
}
