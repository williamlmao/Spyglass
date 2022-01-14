from flask import Flask
import requests

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/collection")
def index_collection():
    r = requests.get('https://api.opensea.io/api/v1/collection/boredapeyachtclub')
    print(r.json())
    return r.json()
    return "test"