import BusTicket from "../models/class/BusTicket";
import PlaneTicket from "../models/class/PlaneTicket";
import DAO from "../models/DAO/DAO";
import GenerateReport from "../models/interface/GenerateReport";

export default class TicketController implements GenerateReport {
  protected dao: DAO = new DAO("tickets");

  public buyTicket(
    type: string,
    owner: string,
    origin: string,
    destiny: string,
    seatOption: string,
    seatType: string,
    email?: string
  ) {
    try {
      // const id: number = Number(this.dao.getLastId("tickets")) + 1;
      let transport: PlaneTicket | BusTicket;

      switch (type) {
        case "bus":
          transport = new BusTicket(
            owner,
            origin,
            destiny,
            seatOption,
            "bus",
            seatType,
            email
          );
          break;
        case "plane":
          transport = new PlaneTicket(
            owner,
            origin,
            destiny,
            seatOption,
            "plane",
            seatType,
            email
          );
          break;
        default:
          throw new Error("Invalid transport type!");
      }
      this.dao.insert(transport);
    } catch (error) {
      console.error("buyTicket() error: ", error);
    }
  }

  public async retrieveInfo(): Promise<object> {
    return await this.dao.retrieveAll();
  }

  public async retrieveByName(name: string): Promise<object> {
    return await this.dao.retrieveByName(name);
  }

  public async retrieveInfoWithQuery(): Promise<object> {
    return await this.dao.retrieveTicketsWithQuery("type", "Normal");
  }
}
