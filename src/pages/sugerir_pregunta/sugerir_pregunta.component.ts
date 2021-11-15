import { Component, OnInit } from "@angular/core"
import { Sugerir } from "src/interface/sugerencias/Sugerir"
import { SugerenciaService } from "src/service/sugerencias/Sugerir.service";
import Swal from "sweetalert2";

@Component({
    selector: 'sugerir_pregunta',
    templateUrl: './sugerir_pregunta.component.html',
    styleUrls: ['./sugerir_pregunta.component.css']
})

export class Sugerir_preguntaComponent{
    sugerencia: Sugerir = {
        pregunta: '',
        respuesta: ''
    }

    private preguntas: SugerenciaService;

    constructor(servicio:SugerenciaService){
        this.preguntas = servicio
    }

    public crearPregunta(){
        this.preguntas.EnviarSugerencia(this.sugerencia)
        .subscribe(datos => {
            datos.pregunta, datos.respuesta
            console.log(datos);
        return this.mostrarAlertas();
        })
    }

    mostrarAlertas(){
        Swal.fire({
            title: 'Muy bien!', 
            text: 'Pregunta sugerida con exito', 
            icon: 'success',
            footer: '<a href="sugerencias"> Volver a sugerencias </a>'
            })
    }
}