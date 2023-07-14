import {interval, map, take} from "rxjs";

const countdown = document.querySelector(".countdown")
const message = document.querySelector(".message")


const countdown$ = interval(1000)
    .pipe(
        map(value => 9 - value),
        take(10)
    )

countdown$.subscribe(count => {
    countdown.innerHTML = `<b>${count}</b>`
},null, () => {
    message.innerHTML = `<b>Hurray!</b>`
})
