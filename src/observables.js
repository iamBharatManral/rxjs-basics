import {Observable} from "rxjs";

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log("complete!")
}

const observable$ = new Observable(subscriber => {
    let count = 1
    const interval = setInterval(() => {
        subscriber.next(count)
        count++;
    }, 1000)
    return () => {
        console.log(`clearing the interval!`)
        clearInterval(interval)
    }
})

const subscription = observable$.subscribe(observer)

const subscription2 = observable$.subscribe(observer)

subscription.add(subscription2)

setTimeout(() => {
    subscription.unsubscribe()
}, 3500)
