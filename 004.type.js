{
    /**
     * any : 모든 타입 할당
     *
     * 어떤 타입인지 확인이 불가능한 경우 사용하되
     * any타입은 최대한 쓰지말자!!
     *
     * 타입에 관한 정보를 명시해야 좋다
     */
    var anyType = 5;
    anyType = "test";
    anyType = false;
    /**
     * union : 타입을 조합
     */
    var unionType = 5;
    unionType = "테스트";
    var typeAliases_1;
    var getTypeAliases = function (param) {
        return typeAliases_1;
    };
    var setUserInfo = function (param) {
        return "사용자정보";
    };
}
