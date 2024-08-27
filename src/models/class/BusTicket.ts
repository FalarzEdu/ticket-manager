import { transports } from "./../../views/TicketManagement";
import Ticket from "./Ticket";

export enum seatPrice {
  "Common" = 35,
  "Bed" = 60,
}

export default class BusTicket extends Ticket {
  private seatType: string;

  public constructor(
    owner: string,
    origin: string,
    destiny: string,
    seatType: string,
    transport: string,
    type: string,
    email?: string | undefined
  ) {
    super(owner, origin, destiny, seatType, transport, type, email);
    this.seatType = seatType;
  }
  // Getters -----------------------------------------------
  public getSeatOption(): string {
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
}
