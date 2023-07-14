import {fromEvent, interval, map, take, takeUntil} from "rxjs";

const countdown = document.querySelector(".countdown")
const message = document.querySelector(".message")

const abort = document.querySelector("button")
const abort$ = fromEvent(abort, 'click')

const countdown$ = interval(1000)
    .pipe(
        map(value => 9 - value),
        take(10),
        takeUntil(abort$)
    )

countdown$.subscribe(count => {
    countdown.innerHTML = `<b>${count}</b>`
},null, () => {
    message.innerHTML = `<b>Hurray!</b>`
})
