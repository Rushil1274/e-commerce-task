from flask import Flask
from flask_cors import CORS
from database import db  # Import db from the new file
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecommerce.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

db.init_app(app)  # Initialize db with app

from routes import register_routes

# Create database
with app.app_context():
    db.create_all()

register_routes(app)

if __name__ == '__main__':
    app.run(debug=True)
