const getFunc = (str, func) => func(str);

const testStr = 'supercalifragilisticexpialidocious';

const result1 = getFunc(testStr, str => str.split(/(?=c)/g));

console.log(`Here's an array of the string ${testStr} broken at every c: ${result1}`);

const result2 = getFunc(testStr, str => ({orig: str, aToA: str.replace(/a/g, 'A'), numOfA: str.split('a').length -1, len: str.length}));

console.log(`Here's an object containing:
\n The original String: ${testStr}
\n The same string with all the lowercase as replaced with uppercase ones
\n The number of as in the the string
\n the total length of the string:-`);
console.log(result2);