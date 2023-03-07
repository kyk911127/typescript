/**
 * npm i inquirer @types/inquirer 설치
 */
import inquirer from 'inquirer';
import { data } from '../data';
import { Commands } from '../model/Commands';
import Subject from '../model/Subject';
import Collection from '../service/Collection';

class SubjectConsole {
    private collection: Collection;

    constructor() {
        const sampleSubjects: Subject[] = data.map((item) => new Subject(item.id, item.title, item.complete));
        this.collection = new Collection('공부 할 리스트', sampleSubjects);
    }

    displaySubjectList(): void {
        console.log(`=====${this.collection.title}=====(${this.collection.getSubjectCounts().incomplete} items subject)`);
        this.collection.getSubjects(true).forEach((item) => item.printSubjectDetail());
    }

    promptSubject(): void {
        console.clear();
        this.displaySubjectList();
        
        inquirer.prompt({
            type: 'list',
            name: 'command',
            message: 'Choose option',
            choices: Object.values(Commands),
        }).then((answers) => {
            if(answers['command'] !== Commands.Quit) this.promptSubject();
        });
    }
}

export default SubjectConsole;