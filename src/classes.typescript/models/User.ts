import { UserProps } from "../../redux/features/user/user.types";

export class User {
  private name: string;
  private lastName: string;
  private id: string;
  private address: string;
  private user: string;
  private password: string;

  constructor(userProps: UserProps) {
    this.name = userProps.name;
    this.lastName = userProps.lastName;
    this.id = userProps.id;
    this.address = userProps.address;
    this.user = userProps.user;
    this.password = userProps.password;
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

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getUser(): string {
    return this.user;
  }

  public setUser(user: string): void {
    this.user = user;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }
}
