import { Component, OnInit } from '@angular/core';
import { User } from 'src/interface/usuarios/User';
import { UserService } from 'src/service/usuarios/User.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css'],
})
export class SesionComponent implements OnInit {
  public correo: string;
  public contrasena: string;

  private iniciar: UserService;

  constructor(servicio: UserService) {
    this.iniciar = servicio;
  }

  ngOnInit() {
    this.iniciar.listarUsuarios().subscribe();
  }

  public iniciarSesion() {

    if (this.correo === '') {
      Swal.fire({
        title: 'Error',
        text: 'El usuario o correo no puede estar vacio.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
    }

    if(this.contrasena === ''){
      Swal.fire({
        title: 'Error',
        text: 'La contraseña no puede estar vacia.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      return;
    }

    this.iniciar.iniciarSesion(this.correo, this.contrasena);
    this.correo = '';
    this.contrasena = '';
  }
}
