import { transports } from "./../../views/TicketManagement";
import Ticket from "./Ticket";

export default class PlaneTicket extends Ticket {
  private classSector: string;

  public constructor(
    owner: string,
    origin: string,
    destiny: string,
    classSector: string,
    transport: string,
    type: string,
    email?: string | undefined
  ) {
    super(owner, origin, destiny, classSector, transport, type, email);
    this.classSector = classSector;
  }
  // Getters -----------------------------------------------
  public getSeatOption(): string {
    return this.classSector;
  }
  // Setters -----------------------------------------------
  public setClassSector(classSector: string): void {
    this.classSector = classSector;
  }
  // Private methods ----------------------------------------

  // Public methods -----------------------------------------
  public calcPrice(): number {
    return 0;
  }
}
