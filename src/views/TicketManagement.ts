import promptSync from "prompt-sync";
import TicketController from "../controllers/TicketController";

export enum options {
  "Buy" = "1",
  "Exit" = "2",
}
export enum transports {
  "Plane" = "1",
  "Bus" = "2",
  "Exit" = "3",
}

export default class TicketManagement {
  private prompt = promptSync();
  private ticketController: TicketController;

  constructor(ticketController: TicketController) {
    this.ticketController = ticketController;
  }

  public primaryInterface() {
    try {
      const possibleAnswers = ["1", "2"];
      // User answer registering
      let question: string = this.prompt(
        "What would you like to do?\n1 - Buy a ticket\n2 - Exit\n"
      );
      // Verify is answer is valid
      if (!possibleAnswers.includes(question))
        throw new Error("Invalid operation!");
      // Switch case responsible for choosing the next step
      switch (question) {
        case options.Buy:
          this.buyTicket();
          break;

        case options.Exit:
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("PrimaryInterface() ", error);
    }
  }

  public buyTicket(): void {
    try {
      // User answer registering
      const possibleAnswers = ["1", "2", "3"];
      let question = this.prompt(
        "Which transport would you like to buy a ticket?\n1 - Plane\n2 - Bus\n3 - Exit\n"
      );
      // Verify is answer is valid
      if (!possibleAnswers.includes(question))
        throw new Error("Invalid operation!");
      // Switch case responsible for choosing the next step
      switch (question) {
        case transports.Plane:
          this.ticketController.buyPlaneTicket();
          break;

        case transports.Bus:
          this.ticketController.buyBusTicket();
          break;

        case transports.Exit:
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("buyTicket() ", error);
    }
  }
}
