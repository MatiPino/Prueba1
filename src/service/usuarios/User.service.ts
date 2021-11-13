import { Injectable } from "@angular/core";
import { User } from "src/interface/usuarios/User";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    private url: string = 'http://localhost:3000/usuarios';
    private usuarios: HttpClient


    constructor(usuario: HttpClient){
        this.usuarios = usuario;
    }

    public agregarUsuario(nuevoUsuario: User): Observable<User>{
        return this.usuarios.post<User>(this.url, JSON.stringify(nuevoUsuario),{
        headers: {
            "Content-Type":"application/json"
        }
        });
    }

    public iniciarSesion(): Observable<User>{
        let listaUsuario: Array<User>;
        this.listarUsuarios().subscribe(datos => {listaUsuario = datos})
        console.log(listaUsuario);
        return
    }

    public listarUsuarios(): Observable<Array<User>>{
        return this.usuarios.get<Array<User>>(this.url,{
            headers: {
                "Content-Type":"application/json"
            }
        });
    }
} 