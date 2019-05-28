const sentence = 'All I know is something like a bird within her sang';

function* words () {
    yield* sentence.split(' ');
}

const myWords = words();
let theWord = myWords.next();

while (theWord.done === false) {
    console.log(theWord.value);
    theWord = myWords.next();
}