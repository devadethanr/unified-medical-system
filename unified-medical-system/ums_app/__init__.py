#logger
import logging
from logging.handlers import RotatingFileHandler
from flask import Flask
from .config import config 
# from .middleware.request_logger import log_request

def create_app(config_name='default'):
    """main app function to create app
    
    Keyword arguments:
    argument -- description
    Return: return_description
    """
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    # Logging
    # logging.basicConfig(level=logging.INFO)
    # file_handler = RotatingFileHandler('ums_app.log', maxBytes=1024 * 1024 * 100, backupCount=20)
    # file_handler.setLevel(logging.INFO)
    # formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    # file_handler.setFormatter(formatter)
    # app.logger.addHandler(file_handler)
    # app.after_request(log_request) #middleware logging for requests
    # Importing blueprints
    from .routes.auth_bp import auth_bp
    from .routes.admin_bp import admin_bp
    from .routes.hospital_bp import hospital_bp
    from .routes.doctor_bp import doctor_bp
    from .routes.patient_bp import patient_bp
    from .models.logic.factory import factory_bp
    #registering blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(hospital_bp)
    app.register_blueprint(doctor_bp)
    app.register_blueprint(patient_bp)
    app.register_blueprint(factory_bp)
    return app
