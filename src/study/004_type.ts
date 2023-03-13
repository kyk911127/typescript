{
    /**
     * any : 모든 타입 할당
     * 
     * 어떤 타입인지 확인이 불가능한 경우 사용하되
     * any타입은 최대한 쓰지말자!!
     * 
     * 타입에 관한 정보를 명시해야 좋다
     */
    let anyType: any = 5;
    anyType = "test";
    anyType = false;

    /**
     * union : 타입을 조합
     */
    let unionType: number | string = 5;
    unionType = "테스트";
    // unionType = false;  // 에러

    /**
     * type : Type Aliases
     * 타입의 재사용
     */
    type StrOrNum = number | string;
    let typeAliases: StrOrNum;

    const getTypeAliases = (param: StrOrNum): StrOrNum => {
        return typeAliases;
    };

    const setUserInfo = (param: {id: StrOrNum, name: string}): StrOrNum => {
        return "사용자정보";
    };
}