const strMath = str => eval(str);

const testStr1 = '4+2';
const testStr2 = '5*7';
const testStr3 = '6-1';
const testStr4 = '9/2';

console.log(`${testStr1} is ${strMath(testStr1)}
\n ${testStr2} is ${strMath(testStr2)}
\n ${testStr3} is ${strMath(testStr3)}
\n ${testStr4} is ${strMath(testStr4)}`);