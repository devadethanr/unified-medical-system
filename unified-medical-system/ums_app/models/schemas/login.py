login_schema = {
    'umsId': {'type': 'string', 'primary_key': True, 'ref': 'users.umsId', 'note': 'Alpha-numeric'},
    'passwordHash': {'type': 'string', 'note': 'Hashed and salted password'},
    'email': {'type': 'string', 'unique': True},
    'roleId': {'type': 'integer', 'ref': 'roles.rolesId'},
    'status': {'type': 'string'},
    'createdAt': {'type': 'timestamp', 'default': 'CURRENT_TIMESTAMP'},
    'updatedAt': {'type': 'timestamp', 'default': 'CURRENT_TIMESTAMP'}
}