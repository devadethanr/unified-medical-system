from flask import Blueprint

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login')
def login():
    """sumary_line
    
    Keyword arguments:
    argument -- description
    Return: return_description
    """
    return "login page"
