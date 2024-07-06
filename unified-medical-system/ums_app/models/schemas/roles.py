roles_schema = {
    'rolesId': {'type': 'integer', 'primary_key': True},
    'roleName': {'type': 'string'},
    'createdAt': {'type': 'timestamp', 'default': 'CURRENT_TIMESTAMP'},
    'updatedAt': {'type': 'timestamp', 'default': 'CURRENT_TIMESTAMP'}
}