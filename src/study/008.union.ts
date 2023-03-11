/**
 * Union Type
 * 연산자 | 를 이용하여 정의
 * 정의된 타입의 공통적인 멤버만 사용 가능
 */
{
    interface Customer {
        age: number,
        name: string,
        showDisplay: () => void,
    }

    interface Employee {
        id : number,
        name: string,
        showDisplay: () => void,
    }

    const getUser = (user: Customer | Employee) => {
        console.log(user.name);
        console.log(user.showDisplay());
        // console.log(user.age);  // 고유 멤버
        // console.log(user.id);   // 고유 멤버
    }
}
/**
 * Type Guard
 * 특정 영역 안에서 해당 변수의 타입을 한정
 * 사용자 정의 또는 연산자 typeof 사용
 */
{
    let test: number[] | string;
    test = "Type Guard 테스트";
    console.log(test.split(" "));
    test = [1, 2, 3];
    // console.log(test.split(" "));   // split은 string만 사용 가능
    // 위와 같은 오류를 방지하기 위해 Type Guard 사용
    if(typeof test === 'string') {
        // console.log(test.split(" "));
    }
}