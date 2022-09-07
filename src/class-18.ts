import { fromEvent, map, mergeMap } from "rxjs"
import { ajax } from "rxjs/ajax"


const API_URL = 'https://rickandmortyapi.com/api/character/'

// para escuchar el evento
const click$ = fromEvent(document, 'click');

click$
    .pipe(
        map( data => {
            if (data.isTrusted) {
                return 1
            }
        }),
        mergeMap( (id) => ajax.getJSON(`${API_URL}${id}`)),  // devuelve un nuevo observable, cambia
        map( (data: any) => `Personaje: ${data.name}`)      // se subscribe al mergeMap
        ).subscribe(console.log)