"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const saludo = new rxjs_1.BehaviorSubject('Welcome!'); // emite el ultimo valor
saludo.subscribe(x => console.log('Subcribirse antes del of: ' + x));
(0, rxjs_1.of)(1, 2, 3, 4, 5, 6, 7, 8, 9).subscribe(v => {
    saludo.next(`${v}`);
});
saludo.subscribe(x => console.log('Subcribirse Después del of: ' + x));
/*
Subcribirse antes del of: Welcome!
Subcribirse antes del of: 1
Subcribirse antes del of: 2
Subcribirse antes del of: 3
Subcribirse antes del of: 4
Subcribirse antes del of: 5
Subcribirse antes del of: 6
Subcribirse antes del of: 7
Subcribirse antes del of: 8
Subcribirse antes del of: 9
Subcribirse Después del of: 9
 */
// devuelve desde el primer valor obtenido hasta el ultimo, Emite TODO
const saludo2 = new rxjs_1.ReplaySubject(); // no se inicializa
saludo2.subscribe(x => console.log('Subcribirse antes del of: ' + x));
(0, rxjs_1.of)(1, 2, 3, 4, 5, 6, 7, 8, 9).subscribe(v => {
    saludo2.next(`${v}`);
});
saludo2.subscribe(x => console.log('Subcribirse Después del of: ' + x));
/*
Subcribirse antes del of: 1
Subcribirse antes del of: 2
Subcribirse antes del of: 3
Subcribirse antes del of: 4
Subcribirse antes del of: 5
Subcribirse antes del of: 6
Subcribirse antes del of: 7
Subcribirse antes del of: 8
Subcribirse antes del of: 9
Subcribirse Después del of: 1
Subcribirse Después del of: 2
Subcribirse Después del of: 3
Subcribirse Después del of: 4
Subcribirse Después del of: 5
Subcribirse Después del of: 6
Subcribirse Después del of: 7
Subcribirse Después del of: 8
Subcribirse Después del of: 9
 */ 
