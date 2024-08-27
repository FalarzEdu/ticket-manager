// // import promptSync from "prompt-sync";
// import TicketController from "../controllers/TicketController";
// import PersonalizedError from "../models/class/PersonalizedError";

// export enum options {
//   "Buy" = "1",
//   "Exit" = "2",
// }
// export enum transports {
//   "Plane" = "1",
//   "Bus" = "2",
//   "Exit" = "3",
// }

// export default class TicketManagement {
//   private prompt = promptSync();
//   private ticketController: TicketController;

//   constructor(ticketController: TicketController) {
//     this.ticketController = ticketController;
//   }

//   public primaryInterface() {
//     try {
//       const possibleAnswers = ["1", "2"];
//       // User answer registering
//       let question: string = this.prompt(
//         "What would you like to do?\n1 - Buy a ticket\n2 - Exit\n"
//       );
//       // Verify is answer is valid
//       if (!Number(question)) {
//         throw new PersonalizedError();
//       }
//       if (!possibleAnswers.includes(question))
//         throw new Error("Invalid operation!");
//       // Switch case responsible for choosing the next step
//       switch (question) {
//         case options.Buy:
//           this.buyTicket();
//           break;

//         case options.Exit:
//           break;

//         default:
//           break;
//       }
//     } catch (error) {
//       console.error("PrimaryInterface() ", error);
//     }
//   }

//   public buyTicket(): void {
//     try {
//       // User answer registering
//       const possibleAnswers = ["1", "2", "3"];
//       let question = this.prompt(
//         "Which transport would you like to buy a ticket?\n1 - Plane\n2 - Bus\n3 - Exit\n"
//       );
//       // Verify is answer is valid
//       if (!possibleAnswers.includes(question))
//         throw new Error("Invalid operation!");
//       // Switch case responsible for choosing the next step
//       switch (question) {
//         case transports.Plane:
//           this.getInfo("plane");
//           break;

//         case transports.Bus:
//           this.getInfo("bus");
//           break;

//         case transports.Exit:
//           break;

//         default:
//           break;
//       }
//     } catch (error) {
//       console.error("buyTicket() ", error);
//     }
//   }

//   public getInfo(type: string) {
//     try {
//       // Variables
//       let owner: string;
//       let origin: string;
//       let destiny: string;
//       let seatType: string;
//       let email: string | undefined;
//       let question: string;
//       question = this.prompt("Who is the ticket's bearer?\n");
//       // Variables insertion
//       // Owner
//       if (question === "") {
//         throw new Error("Missing owner's name!");
//       } else {
//         owner = question;
//       }
//       // Origin
//       question = this.prompt("What is the origin?\n");
//       if (question === "") {
//         throw new Error("Missing origin!");
//       } else {
//         origin = question;
//       }
//       // Destiny
//       question = this.prompt("What is the destiny?\n");
//       if (question === "") {
//         throw new Error("Missing origin!");
//       } else {
//         destiny = question;
//       }
//       // E-mail
//       email = this.prompt(
//         "Type your e-mail (you can leave it blank if desired):"
//       );
//       // Specific transport type info
//       let seatOption: string;
//       switch (type) {
//         case "bus":
//           seatOption = this.prompt(
//             "Select the seat type:\n1 - Bed\n2 - Semi-bed"
//           );
//           break;
//         case "plane":
//           seatOption = this.prompt(
//             "Select your class:\n1 - Economic\n2 - Business\n3 - Luxury"
//           );
//           break;
//         default:
//           throw new Error("Seat option switch - Transport type is invalid");
//       }

//       if (!seatOption) {
//         throw new Error("Seat option cannot be empty!");
//       }

//       // Seat type (special or normal)
//       question = this.prompt("Do you need a special seat?\n1 - Yes.\n2 - No.");
//       if (question === "") {
//         throw new Error("Invalid seat type entry!");
//       } else {
//         seatType = question === "1" ? "Special" : "Normal";
//       }

//       this.ticketController.buyTicket(
//         type,
//         owner,
//         origin,
//         destiny,
//         seatOption,
//         seatType,
//         email
//       );
//     } catch (error) {
//       console.error("getInfo() error: ", error);
//     }
//   }
// }
