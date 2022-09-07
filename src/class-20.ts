import { catchError, map, of } from "rxjs";

of('Hola', 'Como están?', 'Welcome Gente').pipe(
    map(v => {
        if (v === 'Welcome Gente') {
            throw 'Saludo Incorrecto: '+ v
        }
        return v
    }), 
    catchError( err => {    // procesar el error
        throw 'Error: '+err
    })
). subscribe(
        {
            next: (x:any) => console.log('Next: ' + x),
            error: (err) => console.log('Err: ' + err),
            complete: () => console.log('complete')  // no se ejecuta, error interrumpe
        }
    )
/* 
Next: Hola
Next: Como están?
Err: Error: Saludo Incorrecto: Welcome Gente
 */