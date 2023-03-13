/**
 * Generic : 재사용 가능한 클래스, 함수를 만들때 여러 타입에서 사용 가능하도록
 * 제네릭이 적용된 대상은 선언시점이 아닌 생성 시점에 사용하는 타입을 정함
 */
{
  class Me {
    private name = "건빵규";
    constructor(private age = 0) {}
    getInfo(): string {
      return `${this.name}, ${this.age}`;
    }
  }

  class Friend {
    private name = "현구벙";
    constructor(private age = 0) {}
    getInfo(): string {
      return `${this.name}, ${this.age}`;
    }
  }

  class Human {
    constructor(private human: any = {}) {}
    getHuman(): any {
      return this.human;
    }
  }

  const human = new Human(new Me(33));
  console.log(human.getHuman().getInfo());
  console.log(human);

  // 컴파일 이상 없음
  const testHuman = new Human("우서기");
  // 런타임 에러 발생
  // console.log(testHuman.getHuman().getInfo());

  /**
   * any타입을 아래와 같이 Generic 타입으로 변경
   * T : 타입 파라미터
   */
  class GHuman<T> {
    constructor(private human: T) {}
    getHuman(): T {
      return this.human;
    }
  }

  const ghuman: GHuman<Friend> = new GHuman(new Friend(25));
  console.log(ghuman.getHuman().getInfo());
  console.log(ghuman);

  // 컴파일 이상 없음
  const testGhuman = new GHuman("우서기");  // testGhuman : Ghuman<string>
  // 컴파일 에러 발생
  // console.log(testGhuman.getHuman().getInfo());
}
