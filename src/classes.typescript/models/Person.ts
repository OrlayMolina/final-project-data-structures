import { IPerson } from "../interfaces/Person.type";
/**
 * Represents an abstract class for a person.
 */
export abstract class Person {

    private name: string;
    private lastName: string;
    private ID: string;
    private address: string;
    private userName: string;
    private password: string; 
    
     /**
     * Creates an instance of Person.
     * @param {IPerson} param0 Object containing name, lastName, ID, address, userName, and password properties.
     */
     public constructor({name, lastName, ID, address, userName, password}: IPerson) {
        this.name = name;
        this.lastName = lastName;
        this.ID = ID;
        this.address = address;
        this.userName = userName;
        this.password = password;
    }

    /**
     * Retrieves the person's first name.
     * @returns The person's first name.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Sets the person's first name.
     * @param {string} name The person's first name.
     */
    public setName(name: string): void {
        this.name = name;
    }

    /**
     * Retrieves the person's last name.
     * @returns The person's last name.
     */
    public getLastName(): string {
        return this.lastName;
    }

    /**
     * Retrieves the person's identification number.
     * @returns The person's identification number.
     */
    public getID(): string {
        return this.ID;
    }

    /**
     * Sets the person's identification number.
     * @param {string} ID The person's identification number.
     */
    public setID(ID: string): void {
        this.ID = ID;
    }

    /**
     * Retrieves the person's address.
     * @returns The person's address.
     */
    public getAddress(): string {
        return this.address;
    }

    /**
     * Sets the person's address.
     * @param {string} address The person's address.
     */
    public setAddress(address: string): void {
        this.address = address;
    }

    /**
     * Retrieves the person's username.
     * @returns The person's username.
     */
    public getUserName(): string {
        return this.userName;
    }

    /**
     * Sets the person's username.
     * @param {string} userName The person's username.
     */
    public setUserName(userName: string): void {
        this.userName = userName;
    }

    /**
     * Retrieves the person's password.
     * @returns The person's password.
     */
    public getPassword(): string {
        return this.password;
    }

    /**
     * Sets the person's password.
     * @param {string} password The person's password.
     */
    public setPassword(password: string): void {
        this.password = password;
    }

    public toJSON(): any {
        return {
            name: this.name,
            lastName: this.lastName,
            ID: this.ID,
            address: this.address,
            userName: this.userName,
            password: this.password
        };
    }
}