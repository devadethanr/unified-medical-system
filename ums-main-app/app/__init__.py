# app/__init__.py
from flask import Flask
from config import Config

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    from app.blueprints.admin import admin
    from app.blueprints.doctor import doctor
    from app.blueprints.hospital import hospital
    from app.blueprints.patient import patient

    app.register_blueprint(admin)
    app.register_blueprint(doctor)
    app.register_blueprint(hospital)
    app.register_blueprint(patient)

    from .routes import bp
    app.register_blueprint(bp)

    return app