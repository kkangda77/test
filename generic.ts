// 제네릭
// 변수나 함수, 클래스 등을 정의할 때 타입이 지정되지 않은 상태로 남겨둘 수 있는 타입입니다. 제네릭을 사용하면 코드의 재사용성과 유연성을 높일 수 있다.

const getId = <T>(id: T) => {
  return id;
};
function getText<T>(text: T) {
  return text;
}

const id = getId<number>(1);
const user = getText<string>('1');

interface Container<T> {
  value: T;
}

const numberContainer: Container<number> = { value: 1 };
const stringContainer: Container<string> = { value: '1' };

interface AnyOne<T> {
  name: string;
  age: T;
}

const anyOne: AnyOne<string> = {
  name: 'kang',
  age: '',
};

const anyTwo: AnyOne<number> = {
  name: 'seo',
  age: 4,
};
