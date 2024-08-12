import Ticket from "./Ticket";

export default class PlaneTicket extends Ticket implements Report {
  private classSector: string;

  public constructor(
    id: number,
    owner: number,
    origin: number,
    destiny: number,
    classSector: string,
    email?: string
  ) {
    super(id, owner, origin, destiny, email);
    this.classSector = classSector;
  }
  // Getters -----------------------------------------------
  public getClassSector(): string {
    return this.classSector;
  }
  // Setters -----------------------------------------------
  public setClassSector(classSector: string): void {
    this.classSector = classSector;
  }
  // Private methods ----------------------------------------

  // Public methods -----------------------------------------
  public calcPrice(): number {
    return 0; // Make this method later
  }
  public retrieveTickets(): string[] {
    return []; // Get it done later
  }
}
