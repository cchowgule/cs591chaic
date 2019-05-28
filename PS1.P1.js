const alphaSort = str => str.split('').sort().join('');

const testStr = 'supercalifragilisticexpialidocious';

console.log(`${testStr} listed alphabetically is: ${alphaSort(testStr)}`);
