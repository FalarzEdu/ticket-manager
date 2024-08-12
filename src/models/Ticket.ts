// import { distances } from "./db";
export const distances = {
  "1-2": 15,
  "1-3": 10,
  "2-3": 12,
};

console.log(Object.keys(distances));
console.log(Object.values(distances));

export default abstract class Ticket {
  private id: number;
  private owner: number;
  private origin: number;
  private destiny: number;
  private email: string | undefined;

  public constructor(
    id: number,
    owner: number,
    origin: number,
    destiny: number,
    email?: string
  ) {
    this.id = id;
    this.owner = owner;
    this.origin = origin;
    this.destiny = destiny;
    this.email = email;
  }

  // Getters -----------------------------------------------
  public getId(): number {
    return this.id;
  }
  public getOwner(): number {
    return this.owner;
  }
  public getOrigin(): number {
    return this.origin;
  }
  public getDestiny(): number {
    return this.destiny;
  }
  public getEmail(): string | undefined {
    return this.email;
  }

  // Setters -----------------------------------------------
  public setId(id: number): void {
    this.id = id;
  }
  public setOwner(owner: number): void {
    this.owner = owner;
  }
  public setOrigin(origin: number): void {
    this.origin = origin;
  }
  public setDestiny(destiny: number): void {
    this.destiny = destiny;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  // Private methods ----------------------------------------
  protected getDistance(): number {
    // Finds the path chosen by the user
    const path: string =
      Math.min(this.origin, this.destiny) +
      "-" +
      Math.max(this.origin, this.destiny);

    // Retrieves the possible destinies
    const keys: string[] = Object.keys(distances);

    // Retrieves the possible values for each destiny
    const values: number[] = Object.values(distances);

    // Initializes the distance var
    let distance: number;

    for (let i = 0; i <= keys.length; i++) {
      if (keys[i] === path) return values[i];
    }
    return 0;
  }

  // Public methods -----------------------------------------
  abstract calcPrice(): number;
}
