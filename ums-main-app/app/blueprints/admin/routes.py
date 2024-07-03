# app/blueprints/admin/routes.py
from . import admin
from flask import render_template, current_app

@admin.route('/dashboard')
def dashboard():
    print("flag")
    print(current_app.template_folder)  # Debug print to check the template folder
    return render_template('admin/dashboard.html')