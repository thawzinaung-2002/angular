export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user:User = {
    name: "John",
    id: 1, 
    email : ""
}


interface Employees extends User {
    salary : number;
}

export interface Login {
    login(): User;
}

const {name: userName} = user;

let [user1, user2]:User[] = [
    {name: "John",id: 1, email : ""},
    {name: "John",id: 1, email : ""},
    {name: "John",id: 1, email : ""}
];


// @Component({})
// class Component {

// }
