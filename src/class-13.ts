import { Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";

const myObserver: Observer<any> = {
    next: x => {
        console.log('Suma:', x);            
        
    }, 
    error: err => console.error('Error: ', err),
    complete: () => console.log('Terminado!')   
}

const myObservable = new Observable( subscriber =>{
        subscriber.next('Hola!')
        subscriber.next(10)
        subscriber.next(20)
        subscriber.complete()
    }
)

const myPipe = myObservable.pipe(
    filter((r:any) => !isNaN(r)),
    map((x:any) => x+10)

);

myPipe.subscribe(myObserver)