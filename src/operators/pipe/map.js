import {map, of, fromEvent, pluck, mapTo} from 'rxjs'

of(1,2,3,4,5)
    .pipe(
        map(value => value * 10)
    )
    .subscribe(console.log)

const keyUp$ = fromEvent(document, 'keyup')

const keyCodes$ = keyUp$.pipe(
    map(event => event.code)
)

const keyPressed$ = keyUp$.pipe(
    mapTo("Key Pressed!")
)

keyPressed$.subscribe(console.log)
