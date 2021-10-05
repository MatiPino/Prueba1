import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from 'src/pages/categorias/categorias.component';
import { InicioComponent } from 'src/pages/inicio/inicio.component';
import { RankingsComponent } from 'src/pages/rankings/rankings.component';
import { RecuperarComponent } from 'src/pages/recuperar/recuperar.component';
import { RegistrarComponent } from 'src/pages/registrar/registrar.component';
import { SesionComponent } from 'src/pages/sesion/sesion.component';
import { SugerenciasComponent } from 'src/pages/sugerencias/sugerencias.component';

const routes: Routes = [
{
  path: '',
  component: SesionComponent
},
{
  path: 'inicio',
  component: InicioComponent
},
{
  path: 'recuperar',
  component: RecuperarComponent
},
{
  path: 'registrar',
  component: RegistrarComponent
},
{
  path: 'categorias',
  component: CategoriasComponent
},
{
  path: 'sugerencias',
  component: SugerenciasComponent
},
{
  path: 'rankings',
  component: RankingsComponent
},  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
