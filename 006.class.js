/**
 * 클래스
 * Constructor (생성자) : 객체의 초기화
 *
 * 접근제한자
 * Public   : 모두 접근 가능 (기본값)
 * Private  : 클래스 내부에서만 접근 가능, 변수명 앞에 _ 명시
 * Protected: 클래스 내부, 상속받은 자식 클래스에서만 접근 가능
 */
var User = /** @class */ (function () {
    function User(_id, _name, _age, _gender, _job, completed) {
        var _this = this;
        this._id = _id;
        this._name = _name;
        this._age = _age;
        this._gender = _gender;
        this._job = _job;
        this.completed = completed;
        this.printUserInfo = function () {
            console.log("".concat(_this._id, " / ").concat(_this._name, " / ").concat(_this._age, " / ").concat(_this._gender || "", " / ").concat(_this._job || "", " / ").concat(_this.completed || ""));
        };
    }
    Object.defineProperty(User.prototype, "gender", {
        get: function () {
            return this._gender || "";
        },
        set: function (v) {
            this._gender = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "job", {
        get: function () {
            return this._job || "";
        },
        set: function (v) {
            this._job = v;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User(1, "건빵규", 33, "남자", "개발자", false);
user1.printUserInfo();
var user2 = new User(2, "김철수", 20);
// user2.id = 3; // 접근 불가
// console.log(user2.id);  // 접근 불가 
user2.gender = "남자";
console.log(user2.gender);
user2.job = "백수";
console.log(user2.job);
user2.printUserInfo();
