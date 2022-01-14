import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO assets (img_url, token_id) VALUES (?, ?)",
            ('First_Asset_IMG', 'Token ID for first asset')
            )

connection.commit()
connection.close()