import {fromEvent} from "rxjs";

const observer = {
    next: value => console.log('next: ', value),
    error: err => console.log('error: ', err),
    complete: () => console.log("complete!")
}
const source$ = fromEvent(document, 'click')

const sub1 = source$.subscribe(observer)
const sub2 = source$.subscribe(observer)

setTimeout(() => {
    console.log('unsubscribing')
    sub1.unsubscribe()
}, 3000)
