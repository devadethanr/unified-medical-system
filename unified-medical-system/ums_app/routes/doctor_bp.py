from flask import Blueprint

doctor_bp = Blueprint('doctor', __name__, url_prefix='/doctor')

@doctor_bp.route('/dashboard')
def dashboard():
    """sumary_line
    
    Keyword arguments:
    argument -- description
    Return: return_description
    """
    return "doctor dashboard"
