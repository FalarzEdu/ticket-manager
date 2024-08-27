import Customer from '../models/class/Customer'
import DAO from '../models/DAO/DAO'
import type { GenerateReport } from '../models/interface/GenerateReport'

export default class UserController implements GenerateReport {
  private dao = new DAO('customer')

  public async create(name: string, password: string): Promise<void> {
    const id = await this.dao.getLastId()
    const customer = new Customer(id, name, password, 0)
    this.dao.insert(customer)
  }

  public async verifyAuth(name: string, password: string): Promise<boolean> {
    const user: any = await this.dao.retrieveByName(name)
    if (user.length != 0) {
      if (user[0].password === password) {
        return true
      }
      return false
    }
    return false
  }

  public async retrieveInfo(): Promise<object> {
    return await this.dao.retrieveAll()
  }

  public async retrieveByName(name: string): Promise<object> {
    return await this.dao.retrieveByName(name)
  }
}
