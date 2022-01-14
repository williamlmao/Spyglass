import sqlite3
from flask import Flask
import requests

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/index_collection")
def index_collection():
    response = requests.get('https://api.opensea.io/api/v1/assets?collection=boredapeyachtclub')
    conn = get_db_connection()
    # TODO: Paginate 
    for asset in response.json()['assets']:
        print(asset['token_id'])
        conn.execute('INSERT INTO assets (img_url, token_id) VALUES(?, ?)', (asset['image_url'], asset['token_id']))
                
    conn.close()
    return response.json()


@app.route("/assets")
def get_assets():
    conn = get_db_connection()
    assets = conn.execute('SELECT * FROM assets').fetchall()
    conn.close()
    for asset in assets:
        print(asset)
    # print(assets)
    return "hi"