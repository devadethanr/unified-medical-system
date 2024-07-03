# app/blueprints/admin/routes.py
from . import hospital
from flask import render_template

@hospital.route('/dashboard')
def dashboard():
    return render_template('hospital/dashboard.html')