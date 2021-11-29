/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Preguntas } from 'src/interface/preguntas/Preguntas';

@Injectable()
export class PreguntaService {
    private url: string = 'http://localhost:3000/';

    constructor(private servidor: HttpClient) {
     }


    obtenerPreguntas(id){
        return this.servidor.get(`${this.url}/${id}`);
    }


    public listarPreguntasMatematica(): Observable<Array<Preguntas>> {
        return this.servidor.get<Array<Preguntas>>(this.url + 'matematica', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    public listarPreguntasLenguaje(): Observable<Array<Preguntas>> {
        return this.servidor.get<Array<Preguntas>>(this.url + 'lenguaje', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    public listarPreguntasCiencias(): Observable<Array<Preguntas>> {
        return this.servidor.get<Array<Preguntas>>(this.url + 'ciencias', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    public listarPreguntasHistoria(): Observable<Array<Preguntas>> {
        return this.servidor.get<Array<Preguntas>>(this.url + 'historia', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
