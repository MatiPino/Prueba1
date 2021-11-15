import { Injectable } from "@angular/core";
import { Report } from "src/interface/reportar/Report";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()
export class ReportarService {
    private url: string = 'http://localhost:3000/reportar';
    private sugerencias: HttpClient


    constructor(reportar: HttpClient){
        this.sugerencias = reportar;
    }

    public EnviarReporte(nuevoReporte: Report): Observable<Report>{
        return this.sugerencias.post<Report>(this.url, JSON.stringify(nuevoReporte),{
        headers: {
            "Content-Type":"application/json"
        }
        });
    }
}