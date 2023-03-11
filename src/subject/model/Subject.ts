/**과목 객체 */
class Subject {
    constructor(
        public id: number,
        public title: string,
        public complete: boolean = false
    ) {
        // public, private, protected
        this.id = id;
        this.title = title;
        this.complete = complete;
    }

    printSubjectDetail(): void {
        console.log(`${this.id}\t${this.title}\t${this.complete ? '(완료)' : ''}`);
    }
}

export default Subject;
