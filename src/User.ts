class User {
    constructor(
        public id: number, 
        public task: string, 
        public complete: boolean = false
    ) { // public, private, protected
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    printUserInfo(): void {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "(complete)" : ""}`);
    }
}

export default User;