"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/*
const source = of('World').pipe(
    map(x => `Hello ${x}`),
    tap(ev => console.log(ev + ' - esto es solo un log')),
    delay(3000), // esperar 3s
    scan((acc, one) => acc + one, 'Holis'),
    filter(x => x.includes('pepe')) // SE INTERRUMPE LA EJECUCION, No se cumple.
)

source.subscribe(console.log)
 */
const source2 = (0, rxjs_1.of)('World') // of - crea un observable
    .pipe((0, operators_1.map)(x => `Hello ${x}`), (0, operators_1.tap)(ev => console.log(ev + ' - esto es solo un log')), (0, operators_1.delay)(3000), // esperar 3s
(0, operators_1.scan)((acc, one) => acc + one, 'Holis, '), // Resp:  Holis, Hello World
(0, operators_1.filter)(x => x.includes('Hello')) // Continua la ejecucion al subscribe, se cumple
);
source2.subscribe(console.log);
