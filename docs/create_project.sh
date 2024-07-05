#!/bin/bash

# Create the root directory
mkdir -p unified-medical-system
cd unified-medical-system

# Create the ums-app directory and its subdirectories
mkdir -p ums-app/models
mkdir -p ums-app/routes
mkdir -p ums-app/services
mkdir -p ums-app/templates/auth
mkdir -p ums-app/templates/admin
mkdir -p ums-app/templates/hospital
mkdir -p ums-app/templates/doctor
mkdir -p ums-app/templates/patient
mkdir -p ums-app/static/css
mkdir -p ums-app/static/js
mkdir -p ums-app/static/images
mkdir -p ums-app/media/profiles
mkdir -p ums-app/media/documents
mkdir -p ums-app/utils
mkdir -p ums-app/logs
mkdir -p ums-app/sessions

# Create the tests directory and its subdirectories
mkdir -p tests

# Create the docs directory
mkdir -p docs

# Create the empty files
touch ums-app/__init__.py
touch ums-app/models/__init__.py
touch ums-app/models/user.py
touch ums-app/models/doctor.py
touch ums-app/models/patient.py
touch ums-app/models/admin.py
touch ums-app/routes/__init__.py
touch ums-app/routes/auth.py
touch ums-app/routes/admin_bp.py
touch ums-app/routes/hospital_bp.py
touch ums-app/routes/doctor_bp.py
touch ums-app/routes/patient_bp.py
touch ums-app/services/__init__.py
touch ums-app/services/user_service.py
touch ums-app/services/appointment_service.py
touch ums-app/templates/base.html
touch ums-app/templates/auth/login.html
touch ums-app/templates/admin/dashboard.html
touch ums-app/templates/admin/users.html
touch ums-app/templates/hospital/dashboard.html
touch ums-app/templates/hospital/overview.html
touch ums-app/templates/doctor/dashboard.html
touch ums-app/templates/doctor/appointments.html
touch ums-app/templates/patient/dashboard.html
touch ums-app/templates/patient/appointments.html
touch ums-app/static/css/main.css
touch ums-app/static/css/auth.css
touch ums-app/static/js/main.js
touch ums-app/static/js/auth.js
touch ums-app/static/images/logo.png
touch ums-app/static/images/background.jpg
touch ums-app/utils/__init__.py
touch ums-app/utils/helpers.py
touch ums-app/utils/constants.py
touch ums-app/config.py
touch ums-app/logs/ums-app.log
touch ums-app/sessions/__init__.py
touch tests/__init__.py
touch tests/test_auth.py
touch tests/test_admin.py
touch tests/test_hospital.py
touch tests/test_doctor.py
touch tests/test_patient.py
touch docs/index.md
touch requirements.txt
touch .env
touch .gitignore
touch run.py
touch README.md

echo "Directory structure and empty files created successfully."