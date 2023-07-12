import {interval, timer} from 'rxjs'


// const timer$ = interval(1000)
const timer$ = timer(0, 1000)

timer$.subscribe(console.log)
