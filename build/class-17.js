"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
//------- custom operator --------
const toggle = () => (0, rxjs_1.pipe)((0, rxjs_1.scan)((acumulado, valor) => {
    const newValue = valor.a;
    if (newValue % 2 === 0) {
        acumulado.push(newValue);
    }
    return acumulado;
}, []), (0, rxjs_1.tap)(v => console.log(v)));
const fakeData = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
const source = (0, rxjs_1.of)(...fakeData).pipe(toggle(), (0, rxjs_1.map)(x => `Hello ${x}!`));
source.subscribe(console.log);
