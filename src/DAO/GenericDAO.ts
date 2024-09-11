import db from '../../config/db'
import mysql from 'mysql' // Make sure mysql is imported for escaping

export default class GenericDAO<T> {
  // Insert method only handles the database logic
  public insert(table: string, columns: string[], values: any[]): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!table || !columns || !values || columns.length !== values.length) {
        return reject('Incomplete request. Provide the table, columns, and values.')
      }

      // Dynamically construct the SQL query
      const placeholders = columns.map(() => '?').join(', ')
      const sqlQuery = `INSERT INTO ${mysql.escapeId(table)} (${columns.map((col) => mysql.escapeId(col)).join(', ')}) VALUES (${placeholders})`

      // Execute query
      db.query(sqlQuery, values, (error, result) => {
        if (error) {
          return reject(error)
        }
        resolve()
      })
    })
  }
}
