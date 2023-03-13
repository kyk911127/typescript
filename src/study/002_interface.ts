{
    /**
     * 인터페이스
     * ? : 선택적 프로퍼티
     * readonly : 읽기전용 프로퍼티
     */
    interface User {
        readonly id: number,    // 읽기전용 프로퍼티
        name: string,
        complete: boolean,
        // printUser (): void,
        printUser?: () => void | string,   //  선택적 프로퍼티
    }

    const user1: User = {
        id: 1,
        name: "유저1",
        complete: false,
        // printUser: () => void,   // 선택적 프로퍼티는 필수로 입력하지 않아도 됨
    }

    const getUserInfo = (id: number): User => {
        return user1;
    };

    const saveUserInfo = (user: User): void => {
        // user.id = 2;    // readonly 읽기전용 프로퍼티는 수정할 수 없음
        user.printUser = () => console.log(user);
    };

    console.log(getUserInfo(1));
    saveUserInfo(user1);
    
    /**
     * 인터페이스와 클래스의 관계
     * 클래스는 인터페이스에 정의된 추상메소드 구현 implements
     * 인터페이스 간 확장 가능 Extends
     */
    class User2 implements User {
        id = 2;
        name = "유저2";
        complete = false;
        printUser = () => console.log(this.name);
    }
    
    class User3 implements User {
        id = 3;
        name = "유저3";
        complete = true;
        printUser = () :string => this.name;
    }

    let user = new User2();
    user.printUser();

    user = new User3();
    console.log(user.printUser());

    /**
     * 인터페이스의 구현 3가지
     */
    const ex1: User = {
        id: 1,
        name: "ex1",
        complete: false,
        printUser: () => console.log("User 인터페이스의 요소를 만족하는 값들을 대입"),
    }

    class Ex2 implements User {
        id = 2;
        name = "ex2";
        complete = false;
        printUser = () => console.log("User 인터페이스를 implements 한 Class 대입 가능");
    }
    const ex2: User = new Ex2();
    
    class Ex3 { // 덕타이핑
        id = 3;
        name = "ex3";
        complete = true;
        printUser = () => console.log("User 인터페이스를 implements를 하지 않아도 User 인터페이스의 필수 요소를 가지고 있는 Class 대입 가능")
    }
    const ex3: User = new Ex3();

    console.log(ex1);
    console.log(ex2);
    console.log(ex3);
}