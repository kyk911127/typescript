{
    /**
     * 인터페이스
     * 메서드
     * ? : 선택적 프로퍼티
     * readonly : 읽기전용 프로퍼티
     */
    interface User {
        readonly id: number,
        name: string,
        age?: number,   //  선택적 프로퍼티
        complete: boolean,
        // addComment (comment: string): string,
        addComment?: (comment: string) => string,
    }

    let user1 = {
        id: 1,
        name: '건빵규',
        age: 33,
        complete: false
    }

    const getUserInfo = (id: number): User => {
        return {
            id: 1,
            name: '건빵규',
            // age: 33,
            complete: false
        };
    };
    console.log(getUserInfo(1));

    const saveUserInfo = (user: User): void => {
        // user.id = 2;    // readonly 오류
    };

    saveUserInfo(user1);
}