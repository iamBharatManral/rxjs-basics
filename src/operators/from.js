import {from} from 'rxjs'

function* hello(){
    yield "Hello"
    yield "World!"
}

const observer = {
    next: value => console.log('next: ', value),
    error: err => console.log('error: ', err),
    complete: () => console.log("complete!")
}

// const source$ = from([1,2,3, 4, 5])
// const source$ = from(fetch("https://api.github.com/users/iamBharatManral"))
const source$ = from(hello())

source$.subscribe(observer)
