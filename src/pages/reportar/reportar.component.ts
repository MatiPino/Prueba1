import { Component } from "@angular/core"
import { Router } from "@angular/router";
import { Report } from "src/interface/reportar/Report";
import { ReportarService } from "src/service/reportar/Reportar.service";
import Swal from "sweetalert2";

@Component({
    selector: 'reportar',
    templateUrl: './reportar.component.html',
    styleUrls: ['./reportar.component.css']
})

export class ReportarComponent {
    reportar: Report = {
        pregunta: '',
        motivo: ''
    }

    private reportes: ReportarService;

    constructor(servicio:ReportarService, private router: Router){
        this.reportes = servicio
    }

    public crearReporte(){
        this.reportes.EnviarReporte(this.reportar)
        .subscribe(datos => {
            datos.pregunta, datos.motivo
            console.log(datos);
        return this.mostrarAlertas();
        })
    }

    mostrarAlertas(){
      if(this.reportar.pregunta === this.reportar.pregunta, this.reportar.motivo === this.reportar.motivo)  
        Swal.fire({
            title: 'Muy bien!', 
            text: 'Pregunta reportada con exito', 
            icon: 'success',
            confirmButtonText: 'Sugerencias'
        }).then((result) =>
        result.isConfirmed ? this.router.navigate(['/sugerencias']) : null
        );

        /*Este if es para indicar que un campo no esta rellenado (Falta arreglar para que no lo almacene) */
        /* if(this.reportar.pregunta === '', this.reportar.motivo === '')
        Swal.fire({
            title: 'Lo sentimos', 
            text: 'Debe llenar todos los campos', 
            icon: 'error',
            confirmButtonText: 'Aceptar'
        }) */ 
    }

    
}