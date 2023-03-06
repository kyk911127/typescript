import Subject from "./Subject";

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
  private itemMap: Map<number, Subject>;

  constructor(public title: string, subjects: Subject[] = []) {
    this.itemMap = new Map<number, Subject>();
    subjects.forEach((item) => this.itemMap.set(item.id, item));
  }

  // id로 과목 조회
  getSubjectById(id: number): Subject | undefined {
    return this.itemMap.get(id);
  }

  // 과목 추가
  addSubject(title: string): void {
    while (this.getSubjectById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new Subject(this.nextId, title));
  }

  // includeComplete -> true : 모든 과목 목록
  // includeComplete -> false : 완료 목록은 제외한 과목 목록
  getSubject(includeComplete: boolean): Subject[] {
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  // 완료된 과목 삭제
  removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) this.itemMap.delete(item.id);
    });
  }

  // 과목 진행 상태 변경
  setComplete(id: number, complete: boolean): void {
    const subject = this.getSubjectById(id);
    if (subject) subject.complete = complete;
  }
}

export default Collection;
