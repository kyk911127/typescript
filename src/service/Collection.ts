import Subject from "../model/Subject";
import { SubjectCounts } from "../model/SubjectCounts";

class Collection {
  private nextId: number = 1;

  /*
  constructor(public title: string, public users: User[] = []) {}

  getUserById(id: number): User | undefined {
    return this.users.find((item) => item.id === id);
  }

  addUser(task: string): void {
    while (this.getUserById(this.nextId)) {
      this.nextId++;
    }
    this.users.push(new User(this.nextId, task));
  }

  setComplete(id: number, complete: boolean): void {
    const user = this.getUserById(id);
    if (user) {
      user.complete = complete;
    }
  }
  */

  /**
   * Map
   */
  private subjectMap: Map<number, Subject>;

  constructor(public title: string, subjects: Subject[] = []) {
    this.subjectMap = new Map<number, Subject>();
    subjects.forEach((item) => this.subjectMap.set(item.id, item));
  }

  // id로 과목 조회
  getSubjectById(id: number): Subject | undefined {
    return this.subjectMap.get(id);
  }

  // 과목 추가
  addSubject(title: string): void {
    while (this.getSubjectById(this.nextId)) {
      this.nextId++;
    }
    this.subjectMap.set(this.nextId, new Subject(this.nextId, title));
  }

  // includeComplete -> true : 모든 과목 목록
  // includeComplete -> false : 완료 목록은 제외한 과목 목록
  getSubjects(includeComplete: boolean): Subject[] {
    return [...this.subjectMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  // 완료된 과목 삭제
  removeComplete(): void {
    this.subjectMap.forEach((item) => {
      if (item.complete) this.subjectMap.delete(item.id);
    });
  }

  // 과목 진행 상태 변경
  setComplete(id: number, complete: boolean): void {
    const subject = this.getSubjectById(id);
    if (subject) subject.complete = complete;
  }

  getSubjectCounts(): SubjectCounts {
    return {
      total: this.subjectMap.size,
      incomplete: this.getSubjects(false).length
    }
  }
}

export default Collection;
