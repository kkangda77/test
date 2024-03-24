// 유틸리티 타입 (Utility types):
// 유틸리티 타입은 기존 타입을 조작하고 변환하는 데 사용됩니다.
// 이미 정의된 여러가지 유틸리티 타입들을 사용하여 타입을 변환할 수 있습니다.
// 유틸리티 타입에는 Partial, Required, Readonly, Record, Pick, Omit 등이 있습니다.
// 주로 기존 타입의 일부 속성을 선택하거나 변환하여 새로운 타입을 만드는 데 사용됩니다.
// 맵드 타입 (Mapped types):
// 맵드 타입은 기존 타입을 변환하여 새로운 타입을 만드는 데 사용됩니다.
// 타입의 속성을 반복하면서 각 속성의 타입을 변환하는 방식으로 동작합니다.
// 주로 기존 타입의 각 속성에 대해 특정한 변환을 적용하여 새로운 타입을 생성하는 데 사용됩니다.

interface User {
  name: string;
  age: number;
}

// Partial<T>: 기존 타입 T의 모든 속성을 선택적으로 만듭니다.
type PartialUser = Partial<User>;
// PartialUser는 { name?: string; age?: number; } 형태의 타입이 됩니다.

// 사용 예시
const partialUser: PartialUser = {}; // 모든 속성이 선택적으로 만들어집니다.
partialUser.name = 'John'; // 할당가능

// Readonly<T>: 기존 타입 T의 모든 속성을 읽기 전용으로 만듭니다.

type ReadonlyUser = Readonly<User>;
// ReadonlyUser는 { readonly name: string; readonly age: number; } 형태의 타입이 됩니다.

// 사용 예시
const readonlyUser: ReadonlyUser = { name: 'John', age: 30 };
// readonlyUser.name = "Doe"; // 에러: 읽기 전용 속성이기 때문에 할당할 수 없습니다.

type Point = {
  x: number;
  y: number;
};

// Record<K, T>: 키 K와 값 T의 쌍으로 이루어진 객체를 만듭니다.
type PointRecord = Record<string, Point>;

const pointRecord: PointRecord = {
  p1: { x: 1, y: 2 },
  p2: { x: 1, y: 2 },
};

interface User1 {
  name: string;
  age: number;
  email: string;
}

// Pick<T, K>: 기존 타입 T에서 일부 속성을 선택하여 새로운 타입을 만듭니다.

type UserBasicInfo = Pick<User1, 'name' | 'email'>;
// UserBasicInfo는 { name: string; email: string; } 형태의 타입이 됩니다.

// 사용 예시
const userBasicInfo: UserBasicInfo = {
  name: 'ss',
  email: 'k@test.com',
};

// Omit<T, K>: 기존 타입 T에서 일부 속성을 제외하여 새로운 타입을 만듭니다.

type UserWithoutAge = Omit<User1, 'age'>;
// UserWithoutAge는 { name: string; email: string; } 형태의 타입이 됩니다.

// 사용 예시
const userWithoutAge: UserWithoutAge = {
  name: 'John',
  email: 'john@example.com',
};
