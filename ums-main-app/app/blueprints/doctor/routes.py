# app/blueprints/admin/routes.py
from . import doctor
from flask import render_template

@doctor.route('/dashboard')
def dashboard():
    return render_template('doctor/dashboard.html')