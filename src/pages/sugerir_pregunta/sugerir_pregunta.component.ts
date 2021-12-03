import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
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

    constructor(servicio:SugerenciaService, private router: Router){
        this.preguntas = servicio
    }

    public crearPregunta(){

        if(this.sugerencia.pregunta === '' ||
        this.sugerencia.respuesta === ''){
        Swal.fire({
          title: 'Error',
          text: 'Ambos campos deben ser llenados.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
        return;
      }
    this.preguntas.EnviarSugerencia(this.sugerencia).subscribe();
    return this.mostrarAlertas();
}

    mostrarAlertas(){
        Swal.fire({
            title: 'Muy bien!', 
            text: 'Pregunta sugerida con exito', 
            icon: 'success',
            confirmButtonText: 'Sugerencias'
        }).then((result) =>
        result.isConfirmed ? this.router.navigate(['/sugerencias']) : null
        );
    }
}