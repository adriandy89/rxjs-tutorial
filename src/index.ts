import { Observable, Observer } from "rxjs";

const myObserver: Observer<any> = {
    next: x => {
        if (!isNaN(x)) {
            console.log('Suma:', x+10);            
        } else {
            console.log(`'${x}' is not a number!`);            
        }
    }, 
    error: err => console.error('Error: ', err),
    complete: () => console.log('Terminado!')   
}

const myObservable = new Observable( subscriber =>{
        subscriber.next('Hola!')
        subscriber.next(10)
        subscriber.next(20)
        subscriber.error('Error creado!')
    }
)

const myObservable2 = new Observable( subscriber =>{
        subscriber.complete()
    }
)

const myObservable3 = new Observable( subscriber =>{
        subscriber.next(30)
        subscriber.error('Error creado desde 3!')
    }
)

myObservable.subscribe(myObserver)
myObservable2.subscribe(myObserver)
myObservable3.subscribe(myObserver)