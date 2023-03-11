import Subject from "./subject/model/Subject";
import { data } from "./subject/data";
import SubjectService from "./subject/service/SubjectService";

console.log("----------Subject List----------");
for (let i = 0; i < data.length; i++) {
  // for (let i: number = 0; i < data.length; i++) {
  const subject = new Subject(data[i].id, data[i].title, data[i].complete);
  // const item: Item = new Item(data[i].id, data[i].task, data[i].complete);
  subject.printSubjectDetail();
}

/**
 * JaxaScript에서는 가변인자를 통해 함수호출이 가능했지만
 * TypeScript에서는 함수의 오버로딩을 사용
 */
console.log("----------함수 오버로딩----------");
function add(first: string, second: string): string;
function add(first: number, second: number): number;

function add(first: any, second: any): any {
  console.log(first + second);
}

add(10, 20);
add("10", "20");

/**
 * SubjectService 구현
 */
console.log("----------subjectService 구현----------");
const sampleSubjects: Subject[] = data.map(
  (item) => new Subject(item.id, item.title, item.complete)
);
const subjectService = new SubjectService("=====전체 과목 목록=====", sampleSubjects);

subjectService.addSubject("Node Express");
subjectService.addSubject("NestJs");

subjectService.setComplete(3, true);

console.log(`${subjectService.title}`);

// subjectService.removeComplete();

// subjectService.subjects.forEach((item) => item.printSubjectDetail());
subjectService.getSubjects(true).forEach((item) => item.printSubjectDetail());
console.log("=====미완료된 과목 목록=====");
subjectService.getSubjects(false).forEach((item) => item.printSubjectDetail());

/**
 * 함수의 반환
 * 타입 추론, void, never
 * void : undefined 또는 null을 반환
 * never : 반환을 하지 않는다 ex) 예외처리
 */
function success(flag?: true): void {
  return null || undefined;
}

function error(message?: string): never {
  throw Error(message);
}

/**
 * 배열 타입
 *      가변적
 */
const array1: string[] = ["user1", "user2", "user3"];
const array2 = ["user1", "user2", "user3"]; // 타입 추론
const array3: (string | number)[] = ["string", 1234]; // 배열에는 여러개의 타입 지정 가능
array3[2] = 4444;
array3[3] = "추가";
// array[4] = false; // 컴파일 에러, 선언되지 않은 타입

/**
 * 튜플
 *      배열보다 제약사항을 더 가지고 있는 배열 타입
 *      불변적
 */
const tuples: [string, number] = ["필수값 입력", 10];
// tuples[0] = 10; // 컴파일 에러, 0번째에는 string만 입력 가능
