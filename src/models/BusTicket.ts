import Ticket from "./Ticket";

export enum seatPrice {
  "Common" = 35,
  "Bed" = 60,
}

export default class BusTicket extends Ticket implements Report {
  private seatType: string;

  public constructor(
    id: number,
    owner: number,
    origin: number,
    destiny: number,
    seatType: string,
    email?: string
  ) {
    super(id, owner, origin, destiny, email);
    this.seatType = seatType;
  }
  // Getters -----------------------------------------------
  public getSeatType(): string {
    return this.seatType;
  }
  // Setters -----------------------------------------------
  public setSeatType(seatType: string): void {
    this.seatType = seatType;
  }
  // Private methods ----------------------------------------

  // Public methods -----------------------------------------
  public calcPrice(): number {
    // const price = (this.getDistance() * 2.5) +
    return 0;
  }
  public retrieveTickets(): string[] {
    return []; // Get it done later
  }
}
