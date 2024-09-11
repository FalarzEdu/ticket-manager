import mysql from 'mysql'

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ticket_manager'
})

// MySQL connection attempt
db.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL: ' + error.stack)
    return
  }
  console.log('Connected successfully to MySQL!')
})

export default db
