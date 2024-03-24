// type 새로운 타입을 정의할 때 사용
// 기존의 타입을 조합하거나 변형하여 새로운 타입을 만들 때 주로 사용
// "type"은 원시 타입, 객체 타입, 유니언 타입, 인터섹션 타입 등을 정의
// 또한, "type"은 변수, 함수 매개변수, 반환 타입 등 여러 곳에서 사용

type Street = {
  name: string;
  makeSound(): void;
};

type Seoul = Street & {
  owner: string;
};

//원시 타입 (Primitive types)
let num: number = 10;
let str: string = 'Hello';
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
let sym: symbol = Symbol('key'); //Symbol은 ES6에서 도입된 새로운 원시 데이터 타입

//유니언 타입 (Union types):유니언 타입은 두 개 이상의 타입을 조합하여 하나의 타입으로 나타내는 방법
let myVar: string | number;
myVar = 'Hello'; // 문자열 할당
myVar = 10; // 숫자 할당

//인터섹션 타입 (Intersection types):인터섹션 타입은 두 개 이상의 타입을 결합하여 하나의 타입으로 만드는 방법
interface A {
  prop1: number;
}

interface B {
  prop2: string;
}

type C = A & B;

let obj: C = {
  prop1: 10,
  prop2: 'Hello',
};
