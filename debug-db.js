const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'orders.db');
console.log('Database path:', dbPath);

try {
  const db = new Database(dbPath);
  
  console.log('\n=== EXISTING TABLES ===');
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('Tables in database:', tables.map(t => t.name));
  
  if (tables.length > 0) {
    tables.forEach(table => {
      console.log(`\n=== TABLE: ${table.name} ===`);
      try {
        const rows = db.prepare(`SELECT * FROM ${table.name}`).all();
        console.log(`Rows in ${table.name}:`, rows.length);
        if (rows.length > 0) {
          console.log('Sample row:', rows[0]);
        }
      } catch (error) {
        console.log(`Error reading ${table.name}:`, error.message);
      }
    });
  }
  
  db.close();
} catch (error) {
  console.error('Error:', error);
} 