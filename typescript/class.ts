import {Login, User} from './interfaces';

interface Address{
        street?: string;
        city: string;
        state?: string;
        pin?: string;
    };


class Employee implements Login{
    #id: number;
    protected name: string;
    address: Address;

    constructor(id:number, name:string, address:Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login(): User {
        return {
    name: "John",
    id: 1, 
    email : ""
}
    }

    getEmpId() : number {
        return this.#id;
    }

    setEmpId(id: number) {
        this.#id = id;
    }

}

let john = new Employee(1, 'John', {city: "Yangon"});
// john.id=1
// john.name='John'
// john.address='Yangon'
console.log(john);


class Manager extends Employee {
    constructor(id:number, name:string, address:Address) {
        super(id, name, address);
    }
}

let manager = new Manager(2, "Cury", {city:"Manadalay"});