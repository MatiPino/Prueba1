import { Component } from "@angular/core"
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

    constructor(servicio:ReportarService){
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
        Swal.fire({
            title: 'Muy bien!', 
            text: 'Pregunta reportada con exito', 
            icon: 'success',
            footer: '<a href="sugerencias"> Volver a sugerencias </a>'
            })
    }
}