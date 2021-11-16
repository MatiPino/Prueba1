/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interface/usuarios/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()
export class UserService {
  private url: string = 'http://localhost:3000/usuarios';
  private usuarios: HttpClient;

  constructor(usuario: HttpClient, private router: Router) {
    this.usuarios = usuario;
  }

  public agregarUsuario(nuevoUsuario: User): Observable<User> {
    return this.usuarios.post<User>(this.url, JSON.stringify(nuevoUsuario), {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  }

  public iniciarSesion(
    userCorreo: string,
    userContrasena: string
  ): Observable<User> {
    this.listarUsuarios().subscribe((datos) => {
        let user = datos.filter((usuario) => usuario.correo === userCorreo || usuario.nombre_usuario === userCorreo);

        if (user.length !== 0) {
            if (user[0].contrasena === userContrasena) {
              return this.router.navigate(['/inicio']);
            } else {
              Swal.fire({
                title: 'Error',
                text: 'Contraseña incorrecta.',
                icon: 'error',
                confirmButtonText: 'Cerrar',
              });
            }
          } else {
            Swal.fire({
              title: 'Error',
              text: 'El correo no se encuentra registrado.',
              icon: 'error',
              confirmButtonText: 'Cerrar',
            });
          }
    });

    return;
  }

  public listarUsuarios(): Observable<Array<User>> {
    return this.usuarios.get<Array<User>>(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
