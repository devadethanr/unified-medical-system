from flask import Blueprint

hospital_bp = Blueprint('hospital', __name__, url_prefix='/hospital')

@hospital_bp.route('/dashboard')
def dashboard():
    """sumary_line
    
    Keyword arguments:
    argument -- description
    Return: return_description
    """
    return "hospital dashboard"
