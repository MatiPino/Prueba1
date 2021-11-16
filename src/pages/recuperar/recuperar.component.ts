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
        this.preguntas.EnviarSolicitud(this.solicitud).subscribe();
        return this.mostrarAlertas();
    }

    mostrarAlertas(){
        Swal.fire({
            title: 'Listo', 
            text: 'Solicitud enviada', 
            icon: 'success',
        }).then(result => result.isConfirmed ? this.router.navigate(['']) : null);
    }
}