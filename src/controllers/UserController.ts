import TicketManagement from "../views/TicketManagement";
import TicketController from "./TicketController";

export default class UserController {

    private ticketManagement = new TicketManagement(new TicketController);

    public create(name:string, password:string):void {
        // Precisa do banco de dados
    }

    public verifyAuth(name:string, password:string):void {
        // Precisa do banco de dados

        // TESTE ----
        //this.ticketManagement.primaryInterface();
    }
}