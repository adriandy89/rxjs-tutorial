import { fromEvent, interval, shareReplay, skipUntil } from "rxjs";

const interval$ = interval(3000);
const click$ = fromEvent(document, 'click')

const emitAfterClick = interval$.pipe(  // cada 3 segundos emite un nuevo valor
    skipUntil(click$)   // chequea si el valor cambió, si cambia entonces emite
)

emitAfterClick.subscribe(v => console.log(v))

const emitAndShare = interval$.pipe(
    shareReplay()       // Emite el ultimo valor
)

emitAndShare.subscribe(v => console.log(`sharereplay: ${v}`))

click$.subscribe( () => {
    emitAndShare.subscribe(v => console.log(`sharereplay2: ${v}`))
})