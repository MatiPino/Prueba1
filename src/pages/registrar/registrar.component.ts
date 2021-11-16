import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interface/usuarios/User';
import { UserService } from 'src/service/usuarios/User.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  usuario: User = {
    nombre_usuario: '',
    nombre: '',
    correo: '',
    contrasena: '',
    repetir_contrasena: '',
  };
  constructor(servicio: UserService, private router: Router) {
    this.registro = servicio;
  }

  private registro: UserService;

  ngOnInit() {}

  public createUser() {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (this.usuario.nombre_usuario.length < 3) {
      Swal.fire({
        title: 'Error',
        text: 'El nombre de usuario debe tener minimo 3 caracteres.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      return;
    }
    if (this.usuario.nombre.length < 3) {
      Swal.fire({
        title: 'Error',
        text: 'El nombre debe tener minimo 3 caracteres.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      return;
    }
    if(!re.test(String(this.usuario.correo).toLocaleLowerCase())){
      Swal.fire({
        title: 'Error',
        text: 'El correo debe tener un formato válido.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      return;
    }
    if(this.usuario.contrasena === '' ||
      this.usuario.repetir_contrasena === '' ||
      this.usuario.contrasena !== this.usuario.repetir_contrasena){
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      return;
    }

    this.registro.agregarUsuario(this.usuario).subscribe();
    return this.mostrarAlertas();
  }

  mostrarAlertas() {
    Swal.fire({
      title: 'Muy bien',
      text: 'Usuario registrado',
      icon: 'success',
      confirmButtonText: 'Iniciar sesión',
    }).then((result) =>
      result.isConfirmed ? this.router.navigate(['']) : null
    );
  }
}
