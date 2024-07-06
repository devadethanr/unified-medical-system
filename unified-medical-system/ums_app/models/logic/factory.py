import os
from dotenv import load_dotenv
from datetime import datetime
import uuid
from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
# from models.schemas import users_schema, roles_schema, login_schema
from cerberus import Validator
from ums_app.models.schemas import users_schema

factory_bp = Blueprint('factory', __name__)
#mongodb client and connection
load_dotenv()
mongo_uri = os.getenv('MONGO_URI')
client = MongoClient(mongo_uri)
db = client['umsdb']

@factory_bp.route('/create/user', methods=['POST'])
def create_user():
    """ Create user and insert into database """
    data = request.get_json()
    users_collection = db['users']
    # Generate unique id for user
    data['umsId'] = str(uuid.uuid4())
    # Set created date
    now = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    data['registeredAt'] = now
    data['createdAt'] = now
    data['updatedAt'] = now
    # Validate data using schema and cerberus
    v = Validator(users_schema)
    if not v.validate(data):
        return jsonify({'message': 'Validation error', 'error': v.errors}), 400
    # Insert data into database
    result = users_collection.insert_one(data)
    if result.acknowledged:
        return jsonify({'message': 'User created successfully', 'umsId': data['umsId']}), 201
    else:
        return jsonify({'message': 'User creation failed'}), 500
