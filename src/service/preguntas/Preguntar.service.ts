import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Preguntas } from 'src/interface/preguntas/Preguntas'

@Injectable()
export class PreguntaService {
    private url: string = 'http://localhost:3000/preguntas_mate';
    
  
    constructor(private servidor: HttpClient) {
     }


    obtenerPreguntas(id){
        return this.servidor.get(`${this.url}/${id}`);
    }


    public listarPreguntas(): Observable<Array<Preguntas>> {
        return this.servidor.get<Array<Preguntas>>(this.url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}


