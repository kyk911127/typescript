import User from "./User";

class Collection {
    private nextId: number = 1;

    constructor(public title: string, public users: User[] = []){}
    
    getUserById(id: number): User | undefined {
        return this.users.find((item) => item.id === id);
    }

    addUser(task: string): void {
        while(this.getUserById(this.nextId)) {
            this.nextId++;
        }
        this.users.push(new User(this.nextId, task));
    }
    

    setComplete(id: number, complete: boolean): void {
        const user = this.getUserById(id);
        if(user) {
            user.complete = complete;
        }
    }
}

export default Collection;