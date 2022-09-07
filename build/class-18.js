"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const ajax_1 = require("rxjs/ajax");
const API_URL = 'https://rickandmortyapi.com/api/character/';
// para escuchar el evento
const click$ = (0, rxjs_1.fromEvent)(document, 'click');
click$
    .pipe((0, rxjs_1.map)(data => {
    if (data.isTrusted) {
        return 1;
    }
}), (0, rxjs_1.mergeMap)((id) => ajax_1.ajax.getJSON(`${API_URL}${id}`)), // devuelve un nuevo observable, cambia
(0, rxjs_1.map)((data) => `Personaje: ${data.name}`) // se subscribe al mergeMap
).subscribe(console.log);
