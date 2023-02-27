/**
 * 클래스
 * Constructor (생성자) : 객체의 초기화
 * 
 * 접근제한자
 * Public   : 모두 접근 가능 (기본값)
 * Private  : 클래스 내부에서만 접근 가능, 변수명 앞에 _ 명시
 * Protected: 클래스 내부, 상속받은 자식 클래스에서만 접근 가능
 */
class User {
    constructor(
        private _id: number, 
        private _name: string, 
        private _age: number, 
        private _gender?: string, 
        private _job?: string, 
        public completed?: boolean) {
    }

    printUserInfo = (): void => {
        console.log(`${this._id} / ${this._name} / ${this._age} / ${this._gender || ""} / ${this._job || ""} / ${this.completed || ""}`);
    }
    
    public get gender() : string {
        return this._gender || "";
    }
    
    public set gender(v : string) {
        this._gender = v;
    }
    
    public get job() : string {
        return this._job || "";
    }
    
    public set job(v : string) {
        this._job = v;
    }
}

let user1 = new User(1, "건빵규", 33, "남자", "개발자", false);
user1.printUserInfo();

let user2 = new User(2, "김철수", 20);
// user2.id = 3; // 접근 불가
// console.log(user2.id);  // 접근 불가 
user2.gender = "남자";
console.log(user2.gender);
user2.job = "백수";
console.log(user2.job);

user2.printUserInfo();