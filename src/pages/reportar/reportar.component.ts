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
        
        if(this.reportar.pregunta === '' ||
        this.reportar.motivo === ''){
        Swal.fire({
          title: 'Error',
          text: 'Ambos campos deben ser llenados.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
        return;
      }
      this.reportes.EnviarReporte(this.reportar).subscribe();
        return this.mostrarAlertas();
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
    
    }
}