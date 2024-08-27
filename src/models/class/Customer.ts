export default class Customer {
  private id: number;
  private name: string;
  private password: string;
  private balance: number;

  public constructor(
    id: number,
    name: string,
    password: string,
    balance: number
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.balance = balance;
  }
  // Getters -----------------------------------------------
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getBalance(): number {
    return this.balance;
  }
  public getPassword(): string {
    return this.password;
  }
  // Setters -----------------------------------------------
  public setId(id: number): void {
    this.id = id;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setBalance(balance: number): void {
    this.balance = balance;
  }
  public setPassword(password: string): void {
    this.password = password;
  }
  // Private methods ----------------------------------------

  // Public methods -----------------------------------------
}
