import {of, range} from 'rxjs'


function hello(){
    return "Hello, World!"
}

const observer = {
    next: value => console.log('next: ', value),
    error: err => console.log('error: ', err),
    complete: () => console.log("complete!")
}

const source$ = of(1,2,3, 4, 5)
const source2$ = range(1,5)

source2$.subscribe(observer)
