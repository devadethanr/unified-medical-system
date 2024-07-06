from flask import Blueprint, request, jsonify, redirect, url_for, render_template, flash
from ums_app.models.schemas import users_schema

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form('username')
        password = request.form('password')
        
    pass