const Database = require('@didi/better-sqlite3-sqlcipher');
// const Database = require('better-sqlite3');
const db = new Database('foobar.db', { verbose: console.log });
console.log(db)
db.pragma('key = "123"');
db.prepare('CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, name TEXT)').run();
db.prepare('INSERT INTO people (name) VALUES (@name)').run({ name: 'jack' });
db.close();

const db2 = new Database('foobar.db', { verbose: console.log });
db2.pragma('key = "1234"');
console.log(db2.prepare(`SELECT * FROM people;`).all());
document.writeln('hi')