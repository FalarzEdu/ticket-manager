import TicketController from "./controllers/TicketController";
import UserController from "./controllers/UserController";
import TicketManagement from "./views/TicketManagement";
import UserManagement from "./views/UserManagement";

let user = new UserManagement(new UserController());
let ticket = new TicketManagement(new TicketController());

// user.identification();
ticket.primaryInterface();
