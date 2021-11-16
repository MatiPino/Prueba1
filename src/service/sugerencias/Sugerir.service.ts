import { Injectable } from "@angular/core";
import { Sugerir } from "src/interface/sugerencias/Sugerir";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()
export class SugerenciaService {
    private url: string = 'http://192.168.0.16:3000/sugerencias';
    private sugerencias: HttpClient


    constructor(sugerir: HttpClient){
        this.sugerencias = sugerir;
    }

    public EnviarSugerencia(nuevaPregunta: Sugerir): Observable<Sugerir>{
        return this.sugerencias.post<Sugerir>(this.url, JSON.stringify(nuevaPregunta),{
        headers: {
            "Content-Type":"application/json"
        }
        });
    }
}