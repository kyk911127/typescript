import CharactersCollection from './CharactersCollection';
import { Customer } from './Customer';
import CustomerCollection from './CustomerCollection';
import NumbersCollection from './NumbersCollection';
import Sorter from './Sorter';

// let sorter = new Sorter([10, -10, 15, 25, 5]);
// console.log(sorter.sort());

// sorter = new Sorter('TypeScript');
// console.log(sorter.sort());

// let data : number[] | string;

/**
 * 사용자정의 Type Guard
 */
// function isString(data: number[] | string): data is string {
//     return (<string> data).split !== undefined;
// }

// data = 'TypeScript';
// if(isString(data))
//     console.log("string");
// else
//     console.log("number[]");

/**
 * string, number, boolean, Symbol 타입의 경우는 연산자 typeof 사용
 */
// if(typeof data === 'string')
//     console.log("string");
// else
//     console.log("number[]");

let numCollection = new NumbersCollection([10, -10, 15, 25, 5]);
let charCollection = new CharactersCollection('TypeScript');
let customerCollection = new CustomerCollection([
    new Customer('A1', 'Park'),
    new Customer('B1', 'Lee'),
    new Customer('C1', 'Kwon'),
]);

// let sorter = new Sorter(numCollection);
// let sorter = new Sorter(charCollection);
let sorter = new Sorter(customerCollection);
sorter.sort();
sorter.printCollection();