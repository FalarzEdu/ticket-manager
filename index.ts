import express, { Request, Response } from 'express'
import mysql from 'mysql'
import bodyParser from 'body-parser'

const appExpress = express()
const PORT = process.env.PORT || 3000

// Middleware
appExpress.use(bodyParser.json())

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movie_star'
})

// Connect to MySQL
db.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL: ' + error.stack)
    return
  }
  console.log('Connected to MySQL as id ' + db.threadId)
})

// Routes
// --- Get all
appExpress.get('/api/users', (req: Request, res: Response) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error executing query: ' + error.stack)
      res.status(500).send('Error fetching users')
      return
    }
    res.json(results)
  })
})

// --- User insert test
appExpress.post('/api/users/', (req, res) => {
  const { table, columns, values } = req.body

  // Input validation
  if (!table || !columns || !values || columns.length != values.length) {
    return res
      .status(400)
      .send(
        'Uncomplete request. Please provide the database, columns names and the values to be inserted.'
      )
  }

  // Dynamically construct SQL query
  const placeholders = columns.map(() => '?').join(', ')
  const sqlQuery = `INSERT INTO ${mysql.escapeId(table)} (${columns.map((col) => mysql.escapeId(col)).join(', ')} VALUES ${placeholders})`

  // Execute query
  db.query(sqlQuery, values, (error, result) => {
    if (error) {
      console.error('Error executing query: ' + error.stack)
      res.status(400).send('Error creating user')
      return
    }
    res.status(201).send('User create successfully!')
  })
})

// Start the server
appExpress.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
