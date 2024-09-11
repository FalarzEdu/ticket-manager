import express from 'express'
import type { Request, Response } from 'express'
import bodyParser from 'body-parser'
import GenericDAO from '../../DAO/GenericDAO'

const appExpress = express()
appExpress.use(bodyParser.json())

const genDAO = new GenericDAO()

appExpress.post('/insert', (req: Request, res: Response) => {
  const { table, columns, values } = req.body

  // Validate input
  if (!table || !columns || !values || columns.length !== values.length) {
    return res
      .status(400)
      .send('Incomplete request. Please provide the table, columns, and values.')
  }

  // Insert data using the DAO
  genDAO
    .insert(table, columns, values)
    .then(() => {
      res.status(201).send('Query successfully completed!')
    })
    .catch((error) => {
      console.error('Error executing query: ' + error)
      res.status(500).send('There was an error while executing the query!')
    })
})

const PORT = process.env.PORT || 3000
appExpress.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
