import {fromEvent, map, mapTo, tap} from "rxjs";

const progress = document.querySelector("progress")

const calculateScrollPercentage = element => {
    const {scrollTop, scrollHeight, clientHeight} = element
    return (scrollTop/ (scrollHeight - clientHeight)) * 100
}

const scroll$ = fromEvent(document, 'scroll')
    .pipe(
        map(event => calculateScrollPercentage(event.target.documentElement)),
        tap(value => console.log(value))
    )

scroll$.subscribe(value => {
    progress.value = parseInt(value)
})
