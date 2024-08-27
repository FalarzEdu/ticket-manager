import SpecialTicketController from "./controllers/SpecialTIcketController";
import TicketController from "./controllers/TicketController";
import UserController from "./controllers/UserController";
import TicketManagement from "./views/TicketManagement";
import UserManagement from "./views/UserManagement";

let user = new UserManagement(new UserController());
let ticket = new TicketManagement(new TicketController());

let ticketController = new TicketController();
let specialTicketController = new SpecialTicketController();
let userController = new UserController();

// userController.retrieveInfo().then((users) => {
//   console.log(users);
// });

// ticketController.retrieveInfoWithQuery().then((tickets) => {
//   console.log(tickets);
// });
specialTicketController.retrieveInfoWithQuery().then((tickets) => {
  console.log(tickets);
});

// ticketController.retrieveByName("emerson").then((tickets) => {
//   console.log(tickets);
// });
// userController.verifyAuth("tiago", "123").then((users) => {
//   console.log(users);
// });

// user.identification();
// ticket.primaryInterface();
