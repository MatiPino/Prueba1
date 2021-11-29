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
import { Sugerir_preguntaComponent } from 'src/pages/sugerir_pregunta/sugerir_pregunta.component';
import { ReportarComponent } from 'src/pages/reportar/reportar.component';
import { SugerenciaService } from 'src/service/sugerencias/Sugerir.service';
import { ReportarService } from 'src/service/reportar/Reportar.service';
import { RecuperarService } from 'src/service/recuperar/Recuperar.service';
import { AlertasComponent } from 'src/alertas/alertas.component';
import { PreguntasComponent } from 'src/pages/preguntas/preguntas.component';
import { PreguntaService } from 'src/service/preguntas/Preguntar.service';
// import { PreguntasPipe } from './filtro/preguntas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    InicioComponent,
    RecuperarComponent,
    RegistrarComponent,
    CategoriasComponent,
    SugerenciasComponent,
    RankingsComponent,
    Sugerir_preguntaComponent,
    ReportarComponent,
    AlertasComponent,
    PreguntasComponent,
    // PreguntasPipe
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    SugerenciaService,
    ReportarService,
    RecuperarService,
    PreguntaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
