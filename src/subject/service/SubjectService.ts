import Subject from '../model/Subject';
import { SubjectCounts } from '../model/SubjectCounts';

class SubjectService {
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
     * Map 타입으로 Subject 리스트 관리
     * key : id
     * value : Subject
     */
    private subjectMap: Map<number, Subject>;

    constructor(public title: string, subjects: Subject[] = []) {
        this.subjectMap = new Map<number, Subject>();
        subjects.forEach((item) => this.subjectMap.set(item.id, item));
    }

    // 완료 여부로 과목 리스트 가져오기
    getSubjects(includeComplete: boolean): Subject[] {
        // includeComplete -> true : 모든 리스트
        // includeComplete -> false : 미완료 리스트
        return [...this.subjectMap.values()].filter((item) => includeComplete || !item.complete);
    }

    // 전체 과목 카운트 가져오기(미완료 과목)
    getSubjectCounts(): SubjectCounts {
        return {
            total: this.subjectMap.size,
            incomplete: this.getSubjects(false).length,
        };
    }

    // id로 과목 가져오기
    getSubjectById(id: number): Subject | undefined {
        return this.subjectMap.get(id);
    }

    // 과목 추가
    addSubject(title: string): void {
        // 마지막 과목 id 1 증가
        while (this.getSubjectById(this.nextId)) {
            this.nextId++;
        }
        this.subjectMap.set(this.nextId, new Subject(this.nextId, title));
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
}

export default SubjectService;
