//interface 클래스나 객체가 지켜야 하는 규약을 정의하는 데 사용
// 주로API응답, 프론스, 변수, 함수정의할때 자주사용
// 유니언(|)과 인터섹션(&)을 사용할수 없다

interface Animal {
  name: string;
  makeSound(): void;
}

//extends 한 인터페이스가 다른 인터페이스를 확장할 때 사용
// 이는 부모 인터페이스의 모든 멤버(메서드, 속성 등)가 자식 인터페이스에도 상속된다는 것을 의미
// 즉, 자식 인터페이스는 부모 인터페이스의 모든 멤버를 포함하게 됩니다.

interface Cat extends Animal {
  dog: string;
}

// interface를 사용하여 배열을 정의하는 예제
interface MyArray {
  [index: number]: string | number;
}

const myArray: MyArray = ['apple', 'banana', 'orange', 0];
