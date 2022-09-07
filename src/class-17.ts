import { map, of, pipe, scan, tap } from "rxjs"

//------- custom operator --------
const toggle = () => pipe(
    scan((acumulado, valor:any) => {
        const newValue = valor.a;
        if (newValue % 2 === 0) {
            acumulado.push(newValue)
        }
        return acumulado
    }, <any>[]),
    tap(v => console.log(v))
)

const fakeData = [{a:1}, {a:2}, {a:3}, {a:4}]

const source = of(... fakeData).pipe(
    toggle(),
    map(x => `Hello ${x}!`)
)

source.subscribe(console.log)
