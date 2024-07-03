# app/blueprints/patient/__init__.py
from flask import Blueprint

patient = Blueprint('patient', __name__, url_prefix='/patient', template_folder='templates', static_folder='static')

from . import routes