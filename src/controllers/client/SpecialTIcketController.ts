import TicketController from "./TicketController";

export default class SpecialTicketController extends TicketController {
  public async retrieveInfoWithQuery(): Promise<object> {
    return await this.dao.retrieveTicketsWithQuery("type", "Special");
  }
}
