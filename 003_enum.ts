{
    /**
     * 열거형 Enum
     *  숫자 열거형 Numeric Enum
     *  문자형 열거형 String Enum
     */
    enum GenderType {
        Male = 'male',   
        Female = 'female'
    }
    
    console.log(GenderType['Male']);
    console.log(GenderType.Female);

    /**
     * 리터럴 타입
     */
    interface User {
        readonly id: number,
        name: string,
        age?: number,
        complete: boolean,
        gender: 'male' | 'female',  // 리터럴 타입
        addComment?: (comment: string) => string,
    }

    const user1: User = {
        id: 1,
        name: '건빵규',
        age: 33,
        complete: false,
        gender: 'male'
    }

    const getUserInfo = (id: number): User => {
        return user1;
    };

    console.log(getUserInfo(1));
}