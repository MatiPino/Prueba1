import { Component, OnInit } from "@angular/core";
import { User } from "src/interface/usuarios/User";
import { UserService } from "src/service/usuarios/User.service";

@Component({
    selector: 'sesion',
    templateUrl: './sesion.component.html',
    styleUrls: ['./sesion.component.css']
})

export class SesionComponent implements OnInit{
    public correo: string;
    public contrasena: string;
    
    private iniciar: UserService;

    constructor(servicio: UserService){
        this.iniciar = servicio;
    }

    ngOnInit(){
        this.iniciar.listarUsuarios()
        .subscribe(datos => {
            console.log(datos);
        })
    }
       
    public iniciarSesion(){
        this.iniciar.iniciarSesion()
        .subscribe(inicio => {
          console.log(inicio); 
        })
    }
}