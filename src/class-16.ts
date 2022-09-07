import { of } from "rxjs";
import { delay, filter, map, scan, tap } from "rxjs/operators";
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
const source2 = of('World').pipe(
    map(x => `Hello ${x}`),
    tap(ev => console.log(ev + ' - esto es solo un log')),
    delay(3000), // esperar 3s
    scan((acc, one) => acc + one, 'Holis, '), // Resp:  Holis, Hello World
    filter(x => x.includes('Hello'))    // Continua la ejecucion al subscribe, se cumple
)

source2.subscribe(console.log)