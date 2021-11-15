import { Component } from "@angular/core";
import Swal from "sweetalert2";

@Component({
    selector: 'inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

    mostrarAlertas(){
        Swal.fire({
            title: '¿Estas seguro de cerrar la sesión?',
            showDenyButton: true,
            confirmButtonText: 'Cerrar',
            denyButtonText: `No cerrar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire({
                  title: 'Sesión cerrada', 
                  text: '', 
                  icon: 'success',
                  footer: '<a href=""> inicio </a>'})
            } else if (result.isDenied) {
            }
          })
        }
}