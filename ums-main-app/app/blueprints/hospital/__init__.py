# app/blueprints/admin/__init__.py
from flask import Blueprint

hospital = Blueprint('hospital', __name__, url_prefix='/hospital', template_folder='templates', static_folder='static')

from . import routes