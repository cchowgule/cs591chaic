function* fib () {
    yield 0;
    yield 1;
    let [val1,val2] = [1, 1];
    while (true) {
        let result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* isEven () {
    let myFib = fib();
    while (true) {
        let theFib = myFib.next().value;
        while (theFib % 2 !== 0) {
            theFib = myFib.next().value;
        }
        yield theFib;
    }
}

console.log('Here are the first 5 even fibs:');
let count = 5;
let myEvenFibs = isEven();
while (count --> 0) {
    console.log(myEvenFibs.next().value)
}