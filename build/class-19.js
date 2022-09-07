"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const interval$ = (0, rxjs_1.interval)(3000);
const click$ = (0, rxjs_1.fromEvent)(document, 'click');
const emitAfterClick = interval$.pipe(// cada 3 segundos emite un nuevo valor
(0, rxjs_1.skipUntil)(click$) // chequea si el valor cambió, si cambia entonces emite
);
emitAfterClick.subscribe(v => console.log(v));
const emitAndShare = interval$.pipe((0, rxjs_1.shareReplay)() // Emite el ultimo valor
);
emitAndShare.subscribe(v => console.log(`sharereplay: ${v}`));
click$.subscribe(() => {
    emitAndShare.subscribe(v => console.log(`sharereplay2: ${v}`));
});
