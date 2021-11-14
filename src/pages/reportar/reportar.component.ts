import { Component } from "@angular/core"
import { Report } from "src/interface/reportar/Report";
import { ReportarService } from "src/service/reportar/Reportar.service";

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
        alert('Pregunta reportada');
        })
    }
}