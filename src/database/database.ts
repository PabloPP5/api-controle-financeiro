import sqlite3 from 'sqlite3'
import {open} from "sqlite"

export async function getDbConnection() {
    const db = await open ({
        filename: "./database.sqlite",
        driver: sqlite3.Database
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        amount REAL NOT NULL,
        type TEXT NOT NULL,
        category TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db
}