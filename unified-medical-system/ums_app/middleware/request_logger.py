import logging
from flask import request

logger = logging.getLogger('request_logger')
logger.setLevel(logging.INFO)

file_handler = logging.handlers.RotatingFileHandler('request.log', maxBytes=1024 * 1024 * 100, backupCount=20)
file_handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)

def log_request(response):
    logger.info(f'Request: {request.method} {request.path} - Response: {response.status_code}')
    return response