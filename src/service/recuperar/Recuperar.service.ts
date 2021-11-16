import { Injectable } from "@angular/core";
import { Recuperar } from "src/interface/recuperar/Recuperar";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()
export class RecuperarService {
    private url: string = 'http://192.168.0.16:3000/recuperar';
    private solicitud: HttpClient


    constructor(recuperar: HttpClient){
        this.solicitud = recuperar;
    }

    public EnviarSolicitud(nuevaSolicitud: Recuperar): Observable<Recuperar>{
        return this.solicitud.post<Recuperar>(this.url, JSON.stringify(nuevaSolicitud),{
        headers: {
            "Content-Type":"application/json"
        }
        });
    }
}