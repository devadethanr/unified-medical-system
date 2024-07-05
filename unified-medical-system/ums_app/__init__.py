from flask import Flask
from .config import config  # Ensure this import is correct

def create_app(config_name='default'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    # Importing blueprints
    from .routes.auth_bp import auth_bp
    from .routes.admin_bp import admin_bp
    from .routes.hospital_bp import hospital_bp
    from .routes.doctor_bp import doctor_bp
    from .routes.patient_bp import patient_bp
    #registering blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(hospital_bp)
    app.register_blueprint(doctor_bp)
    app.register_blueprint(patient_bp)
    return app
