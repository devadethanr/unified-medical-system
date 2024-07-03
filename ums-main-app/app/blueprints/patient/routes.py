# app/blueprints/admin/routes.py
from . import patient
from flask import render_template

@patient.route('/dashboard')
def dashboard():
    return render_template('patient/dashboard.html')