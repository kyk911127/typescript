import Sorter from './Sorter';

let sorter = new Sorter([10, -10, 15, 25, 5]);
console.log(sorter.sort());

sorter = new Sorter('TypeScript');
console.log(sorter.sort());

let data : number[] | string;

/**
 * 사용자정의 Type Guard
 */
function isString(data: number[] | string): data is string {
    return (<string> data).split !== undefined;
}

data = 'TypeScript';
if(isString(data))
    console.log("string");
else
    console.log("number[]");

/**
 * string, number, boolean, Symbol 타입의 경우는 연산자 typeof 사용
 */
if(typeof data === 'string')
    console.log("string");
else
    console.log("number[]");