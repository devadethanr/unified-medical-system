from flask import Blueprint

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/dashboard')
def dashboard():
    """sumary_line
    
    Keyword arguments:
    argument -- description
    Return: return_description
    """
    return "admin dashboard"
