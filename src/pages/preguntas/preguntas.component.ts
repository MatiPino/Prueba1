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
    public categoria = 'Preguntas';
    public puntos = 0;
    private preguntasService: PreguntaService;

    constructor(servicio: PreguntaService) {
        this.preguntasService = servicio;
    }

    ngOnInit() {
        this.categoria = this.preguntasService.obtenerCategoria();
        switch(this.categoria){
            case 'Matemáticas': this.preguntas$ = this.preguntasService.listarPreguntasMatematica();
                                this.preguntas$.subscribe(datos => this.preguntas = datos);
                                break;
            case 'Lenguaje': this.preguntas$ = this.preguntasService.listarPreguntasLenguaje();
                                this.preguntas$.subscribe(datos => this.preguntas = datos);
                                break;
            case 'Ciencias': this.preguntas$ = this.preguntasService.listarPreguntasCiencias();
                                this.preguntas$.subscribe(datos => this.preguntas = datos);
                                break;
            case 'Historia': this.preguntas$ = this.preguntasService.listarPreguntasHistoria();
                                this.preguntas$.subscribe(datos => this.preguntas = datos);
                                break;
        }
    }

    public evaluarRespuesta(id: number, opcion: string, indice: number){
        const el: HTMLElement = document.getElementById(`${id-1}r${indice}`);
        const preguntaEvaluada = this.preguntas.map(pregunta => {if(pregunta.id === id){return pregunta;}else {return null;}});
        if(preguntaEvaluada[id-1].respuesta === opcion){
            if(!el.classList.contains('success')){
                el.classList.add('success');
                this.puntos += 100;
            }
            console.log('Correcto');
        } else {
            if(!el.classList.contains('error')){
                el.classList.add('error');
                this.puntos -= 20;
            }
            console.log('Incorrecto');
        }
    }

    public setPuntos(){
        this.preguntasService.setPuntos(this.puntos);
    }
}
