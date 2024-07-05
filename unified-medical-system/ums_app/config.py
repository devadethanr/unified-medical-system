import os

class Config:
    """Base configuration class.
    
    Contains default settings that can be overridden in subclasses.
    """
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'

class Development(Config):
    """Development configuration.
    
    Enables debug mode for development purposes.
    """
    DEBUG = True

class Testing(Config):
    """Testing configuration.
    
    Enables testing mode for running tests.
    """
    TESTING = True

# Dictionary to map configuration names to their respective classes
config = {
    'development': Development,
    'testing': Testing,
    'default': Development
}
