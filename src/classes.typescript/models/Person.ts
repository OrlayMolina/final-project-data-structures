import { IPerson } from "../interfaces/Person.type";

export abstract class Person {

    private name: string;
    private lastName: string;
    private ID: string;
    private address: string;
    private userName: string;
    private password: string; 
    
    public constructor({name, lastName, ID, address, userName, password}: IPerson){
        this.name = name;
        this.lastName = lastName;
        this.ID = ID;
        this.address = address;
        this.userName = userName;
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getID(): string {
        return this.ID;
    }
    
    public setID(ID: string): void {
        this.ID = ID;
    }
    
    public getAddress(): string {
        return this.address;
    }
    
    public setAddress(address: string): void {
        this.address = address;
    }
    
    public getUserName(): string {
        return this.userName;
    }
    
    public setUserName(userName: string): void {
        this.userName = userName;
    }
    
    public getPassword(): string {
        return this.password;
    }
    
    public setPassword(password: string): void {
        this.password = password;
    }
    
}