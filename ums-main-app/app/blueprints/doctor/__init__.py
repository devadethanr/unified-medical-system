# app/blueprints/admin/__init__.py
from flask import Blueprint

doctor = Blueprint('doctor', __name__, url_prefix='/doctor', template_folder='templates', static_folder='static')

from . import routes