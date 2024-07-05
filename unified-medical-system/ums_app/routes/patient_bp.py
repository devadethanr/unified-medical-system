from flask import Blueprint

patient_bp = Blueprint('patient', __name__, url_prefix='/patient')

@patient_bp.route('/dashboard')
def dashboard():
    """sumary_line
    
    Keyword arguments:
    argument -- description
    Return: return_description
    """
    return "patient dashboard"
