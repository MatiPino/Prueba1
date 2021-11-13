import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CategoriasComponent } from 'src/pages/categorias/categorias.component';
import { InicioComponent } from 'src/pages/inicio/inicio.component';
import { RankingsComponent } from 'src/pages/rankings/rankings.component';
import { RecuperarComponent } from 'src/pages/recuperar/recuperar.component';
import { RegistrarComponent } from 'src/pages/registrar/registrar.component';
import { SesionComponent } from 'src/pages/sesion/sesion.component';
import { SugerenciasComponent } from 'src/pages/sugerencias/sugerencias.component';
import { UserService } from 'src/service/usuarios/User.service';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    SesionComponent, 
    InicioComponent, 
    RecuperarComponent, 
    RegistrarComponent, 
    CategoriasComponent,
    SugerenciasComponent,
    RankingsComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
