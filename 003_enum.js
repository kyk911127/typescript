{
    /**
     * 열거형 Enum
     *  숫자 열거형 Numeric Enum
     *  문자형 열거형 String Enum
     */
    var GenderType = void 0;
    (function (GenderType) {
        GenderType["Male"] = "male";
        GenderType["Female"] = "female";
    })(GenderType || (GenderType = {}));
    console.log(GenderType['Male']);
    console.log(GenderType.Female);
    var user1_1 = {
        id: 1,
        name: '건빵규',
        age: 33,
        complete: false,
        gender: 'male'
    };
    var getUserInfo = function (id) {
        return user1_1;
    };
    console.log(getUserInfo(1));
}
