{
    /**
     * git연동
     * git remote add origin [주소]
     * git branch -m master main
     * git pull origin main --allow-unrelated-histories
     * git push -u origin main
     */

    /**
     * tsc --init
     * tsconfig.json 파일 생성
     * typescript 설정 옵션
     * 
     * npm i -g typescript
     * typescript 설치
     */

    /**
     * tsc -w app.ts
     * 감시모드 컴파일 실행
     */

    /**
     * 타입 추론 Type Inference
     * 변수 초기값의 타입에 따라서 타입을 추론함
     */
    let car = {
        brand: "benz",
        price: 1000,
        go: () => {
            console.log('Go...');
        }
    }
    // car.brand = 123;    // 오류
    // car.price = "bmw";  // 오류

    // param에 type을 지정하지 않았지만 연산자를 통해 결과물이 숫자라는 것을 추론함
    // function typeInference(param) {
    //     return 100 - param;
    // }

    /**
     * 타입 명시 Type Syntax
     * 변수를 선언할때 변수 값의 타입을 명시함으로서 변수 갑의 데이터 타입을 지정
     */
    let id: number = 1;
    let myName: string = '건빵규';
    let age: number = 33;
    let complete: boolean = false;

    const getUser = (id: number): object => {
        return {};
    };
}