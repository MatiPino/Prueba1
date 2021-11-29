import { Pipe, PipeTransform } from '@angular/core';
import { Preguntas } from 'src/interface/preguntas/Preguntas';

@Pipe({
  name: 'preguntas'
})
export class PreguntasPipe implements PipeTransform {

  transform(listaPregunta: Array<Preguntas>, categoria: string): Array<Preguntas>{
    let lista = []
    for (let i = 0; i < listaPregunta.length; i++) {
      if (listaPregunta[i].categoria==categoria){
        lista.push(listaPregunta[i])
      }
    };
    return lista;
  }

}
