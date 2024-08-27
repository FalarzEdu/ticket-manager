import Customer from '../class/Customer'
import Ticket from '../class/Ticket'

export default class DAO {
  private type: string

  constructor(type: string) {
    this.type = type
  }

  // Create ----------------------------------------------
  public async insert<T>(data: T): Promise<void> {
    if (data instanceof Customer) {
      const id = data.getId()
      const name = data.getName()
      const password = data.getPassword()
      const balance = data.getBalance()
      fetch('http://localhost:3000/customers', {
        method: 'POST',
        headers: {
          Content: 'application.json'
        },
        body: JSON.stringify({ id, name, password, balance })
      })
        .then((response) => {
          if (!response.ok) throw new Error('User data insertion could not be done!')
        })
        .catch((error) => {
          error.log('DAO.ts error: ', error)
        })
    } else if (data instanceof Ticket) {
      const id = data.getId()
      const owner = data.getOwner()
      const origin = data.getOrigin()
      const destiny = data.getDestiny()
      const seatOption = data.getSeatOption()
      const email = data.getEmail()
      const transport = data.getTransport()
      const type = data.getType()
      // Data insertion
      fetch('http://localhost:3000/tickets', {
        method: 'POST',
        headers: {
          Content: 'application.json'
        },
        body: JSON.stringify({
          id,
          owner,
          origin,
          destiny,
          seatOption,
          email,
          transport,
          type
        })
      })
        .then((response) => {
          if (!response.ok) throw new Error('Ticket data insertion could not be done!')
        })
        .catch((error) => {
          error.log('DAO.ts error: ', error)
        })
    }
  }
  // Read ------------------------------------------------
  public async getIdLength(): Promise<number> {
    try {
      const response = await fetch(`http://localhost:3000/${this.type}`)

      if (!response.ok) {
        throw new Error('getIdLength() request could not be completed')
      }

      const data: Array<object> = await response.json()

      return data.length
    } catch (error) {
      console.error('DAO.ts error: ', error)
      return 0 // Retorna 0 em caso de erro
    }
  }

  public async getLastId(): Promise<number> {
    const idLenght = await this.getIdLength()
    console.log('idlenth:' + idLenght)
    if (idLenght > 0) {
      try {
        const response = await fetch(`http://localhost:3000/${this.type}?id=${idLenght - 1}`)
        if (!response.ok) {
          throw new Error('Failed to fetch user data')
        }
        const data = await response.json()

        // Verifica se data não está vazio e se contém a propriedade id
        if (data && data[0].id != undefined) {
          return data[0].id + 1
        } else {
          throw new Error('getLastId() could not not be completed!')
        }
      } catch (error) {
        console.error('DAO.ts error: ', error)
        return 0 // Em caso de erro, define id como 0
      }
    } else {
      return 0 // Se idLenght <= 0, define id como 0
    }
  }

  public async retrieveById(id: number): Promise<object> {
    switch (this.type) {
      case 'customer':
        return await fetch(`http://localhost:3000/customers/?id=${id}`)
      case 'ticket':
        return await fetch(`http://localhost:3000/tickets/?id=${id}`)
      default:
        return {}
    }
  }

  public async retrieveAll(): Promise<object> {
    switch (this.type) {
      case 'customers':
        return (await fetch(`http://localhost:3000/customers`)).json()
      case 'tickets':
        return (await fetch(`http://localhost:3000/tickets`)).json()
      default:
        return {}
    }
  }

  public async retrieveByType(): Promise<object> {
    switch (this.type) {
      case 'customer':
        return (await fetch(`http://localhost:3000/customers`)).json()
      case 'ticket':
        return (await fetch(`http://localhost:3000/tickets`)).json()
      default:
        return {}
    }
  }

  public async retrieveByName(name: string) {
    switch (this.type) {
      case 'customer':
        return (await fetch(`http://localhost:3000/customers?name=${name}`)).json()
      case 'tickets':
        return (await fetch(`http://localhost:3000/tickets?owner=${name}`)).json()
      default:
        return {}
    }
  }

  public async retrieveTicketsWithQuery(parameter: string, query: string) {
    return (await fetch(`http://localhost:3000/tickets?${parameter}=${query}`)).json()
    // return (await fetch("http://localhost:3000/tickets?type=normal")).json();
  }

  // Update ----------------------------------------------

  // Delete ----------------------------------------------
}
