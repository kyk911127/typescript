{
    /**
     * 함수의 반환 타입
     *  선택적매개변수 : 필수 매개변수 우측에 위치
     *  기본매개변수 : 타입 추론, 타입을 명시하지 않음
     */
    var test = function (name, gender, age) {
        if (age === void 0) { age = 33; }
        console.log("".concat(name, ", ").concat(gender, ", ").concat(age));
    };
    test('건빵규', 'male', 23);
    test('건빵규', 'male');
}
