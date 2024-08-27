import GenerateReport from "../interface/GenerateReport";

export default abstract class Ticket {
  protected id!: number;
  protected owner: string;
  protected origin: string;
  protected destiny: string;
  protected seatOption: string;
  protected transport: string;
  protected type: string;
  protected email: string | undefined;

  public constructor(
    owner: string,
    origin: string,
    destiny: string,
    seatOption: string,
    transport: string,
    type: string,
    email?: string
  ) {
    this.owner = owner;
    this.origin = origin;
    this.destiny = destiny;
    this.seatOption = seatOption;
    this.transport = transport;
    this.type = type;
    this.email = email;
  }

  // Getters -----------------------------------------------
  public getId(): number {
    return this.id;
  }
  public getOwner(): string {
    return this.owner;
  }
  public getOrigin(): string {
    return this.origin;
  }
  public getDestiny(): string {
    return this.destiny;
  }
  abstract getSeatOption(): string;

  public getType(): string {
    return this.type;
  }

  public getTransport(): string {
    return this.transport;
  }

  public getEmail(): string | undefined {
    return this.email;
  }

  // Setters -----------------------------------------------
  // public setId(id: number): void {
  //   this.id = id;
  // }
  // public setOwner(owner: string): void {
  //   this.owner = owner;
  // }
  // public setOrigin(origin: string): void {
  //   this.origin = origin;
  // }
  // public setDestiny(destiny: string): void {
  //   this.destiny = destiny;
  // }
  // public setEmail(email: string): void {
  //   this.email = email;
  // }
  // Private methods ----------------------------------------
  // protected getDistance(): number {
  //   // Finds the path chosen by the user
  //   const path: string =
  //     Math.min(this.origin, this.destiny) +
  //     "-" +
  //     Math.max(this.origin, this.destiny);

  //   // Retrieves the possible destinies
  //   const keys: string[] = Object.keys(distances);

  //   // Retrieves the possible values for each destiny
  //   const values: number[] = Object.values(distances);

  //   // Initializes the distance var
  //   // let distance: number;

  //   for (let i = 0; i <= keys.length; i++) {
  //     if (keys[i] === path) return values[i];
  //   }
  //   return 0;
  // }

  // Public methods -----------------------------------------
  abstract calcPrice(): number;
}
