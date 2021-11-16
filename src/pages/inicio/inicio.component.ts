import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  constructor( private router: Router) {}

  mostrarAlertas() {
    Swal.fire({
      title: '¿Estas seguro que quieres salir?',
      showDenyButton: true,
      confirmButtonText: 'Salir',
      denyButtonText: `cancelar`,
    }).then((result) => {
      result.isConfirmed ? this.router.navigate(['']) : null;
    });
  }
}
