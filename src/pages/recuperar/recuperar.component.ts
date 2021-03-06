import { Component } from "@angular/core";
import { Recuperar } from "src/interface/recuperar/Recuperar";
import { RecuperarService } from "src/service/recuperar/Recuperar.service";
import Swal from "sweetalert2";
import {Router} from '@angular/router';

@Component({
    selector: 'recuperar',
    templateUrl: './recuperar.component.html',
    styleUrls: ['./recuperar.component.css']
})

export class RecuperarComponent {
    solicitud: Recuperar = {
        correo: ''
    }

    private preguntas: RecuperarService;

    constructor(servicio:RecuperarService, private router: Router){
        this.preguntas = servicio
    }

    public solicitarCuenta(){
        const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        if(!re.test(String(this.solicitud.correo).toLocaleLowerCase())){
            Swal.fire({
              title: 'Error',
              text: 'El correo debe estar registrado.',
              icon: 'error',
              confirmButtonText: 'Cerrar',
            });
            return;
          }

    this.preguntas.EnviarSolicitud(this.solicitud).subscribe();
    return this.mostrarAlertas();    
    }

    mostrarAlertas(){
      if (this.solicitud.correo === this.solicitud.correo) {    
        Swal.fire({
            title: 'Listo', 
            text: 'Solicitud enviada', 
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(result => result.isConfirmed ? this.router.navigate(['']) : null);
        }
    }
}