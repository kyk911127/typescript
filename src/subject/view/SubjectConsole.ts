/**
 * npm i inquirer @types/inquirer 설치
 */
import inquirer from 'inquirer';
import { data } from '../data';
import { Commands } from '../model/Commands';
import Subject from '../model/Subject';
import SubjectService from '../service/SubjectService';

class SubjectConsole {
	private subjectService: SubjectService;
	private showCompleted: boolean;

	constructor() {
		this.showCompleted = true;
		const defaultSubjects: Subject[] = data.map((item) => new Subject(item.id, item.title, item.complete));
		this.subjectService = new SubjectService('전체 목록', defaultSubjects);
	}

	// 전체 과목 목록 출력
	displaySubjectList(): void {
		console.log(`=====${this.subjectService.title}=====(${this.subjectService.getSubjectCounts().incomplete} 개 남았습니다.)`);
		this.subjectService.getSubjects(this.showCompleted).forEach((item) => item.printSubjectDetail());
	}

	promptSubject(): void {
		console.clear();
		this.displaySubjectList();

		inquirer.prompt({
			type: 'list',	// 출력 타입
			name: 'command',
			message: '옵션 선택',	// 출력 메시지
			choices: Object.values(Commands),	// 출력 데이터(선택 기능)
		}).then((answers) => {
			switch (answers['command']) {
				case Commands.Toggle:
					this.showCompleted = !this.showCompleted;
					this.promptSubject();
					break;
				case Commands.Add:
					this.promptAdd();
					break;
				case Commands.Complete:
					if (this.subjectService.getSubjectCounts().incomplete > 0) this.promptComplete();
					else this.promptSubject();
					break;
				case Commands.Purge:
					this.subjectService.removeComplete();
					this.promptSubject();
					break;
				default:
					break;
			}
		});
	}

	promptAdd(): void {
		console.clear();

		inquirer.prompt({
			type: 'input',
			name: 'add',
			message: '추가 할 과목 입력 :',
		}).then((answers) => {
			if (answers['add'] !== '') this.subjectService.addSubject(answers['add']);

			this.promptSubject();
		});
	}

	promptComplete(): void {
		console.clear();

		inquirer.prompt({
			type: 'checkbox',
			name: 'complete',
			message: '완료 처리 할 과목',
			choices: this.subjectService.getSubjects(this.showCompleted).map((item) => ({
				name: item.title,
				value: item.id,
				checked: item.complete,
			})),
		}).then((answers) => {
			let completedSubjects = answers['complete'] as number[]; // number 타입으로 지정
			this.subjectService.getSubjects(true).forEach((item) => this.subjectService.setComplete(item.id, completedSubjects.find((id) => id === item.id) != undefined));
			this.promptSubject();
		});
	}
}

export default SubjectConsole;
