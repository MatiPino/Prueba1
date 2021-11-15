import { Component, OnInit } from "@angular/core";
import { User } from "src/interface/usuarios/User";
import { UserService } from "src/service/usuarios/User.service";
import Swal from 'sweetalert2';

@Component({
    selector: 'registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit{
    
    usuario: User = {
    nombre_usuario: '',    
    nombre: '',
    correo: '',
    contrasena: '',
    repetir_contrasena: ''
    
    }
    constructor(servicio:UserService) {
        this.registro = servicio;
    }

    private registro: UserService;
    
    ngOnInit() {}

    public createUser(){
        this.registro.agregarUsuario(this.usuario)
        .subscribe(datos => {
            datos.nombre, datos.correo, datos.contrasena, datos.repetir_contrasena,
            console.log(datos);
        return this.mostrarAlertas();    
        })
    }

    mostrarAlertas(){
        Swal.fire({
            title: 'Muy bien', 
            text: 'Usuario registrado', 
            icon: 'success',
            footer: '<a href=""> Volver al inicio </a>'
            })
    }

    
}