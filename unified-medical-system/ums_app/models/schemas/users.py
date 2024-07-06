# users_schema = {
#     'umsId': {'type': 'string', 'required': True, 'unique': True, 'note': 'Alpha-numeric, UUIDv4'},
#     'name': {'type': 'string', 'required': True},
#     'email': {'type': 'string', 'required': True, 'unique': True},
#     'googleAuthId': {'type': 'string'},
#     'phoneNumber': {'type': 'string'},
#     'address': {'type': 'string'},
#     'pincode': {'type': 'integer'},
#     'registeredAt': {'type': 'datetime', 'required': True},
#     'status': {'type': 'string'},
#     'createdAt': {'type': 'datetime', 'required': True},
#     'updatedAt': {'type': 'datetime', 'required': True},
#     'deletedAt': {'type': 'datetime'},
#     'passwordHash': {'type': 'string', 'required': True, 'note': 'Hashed and salted password'}
# }

# ums_app/models/schemas/user.py

users_schema = {
    'name': {'type': 'string', 'required': True},
    'email': {'type': 'string', 'required': True, 'regex': r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'},
    'password': {'type': 'string', 'required': True},
    'umsId': {'type': 'string', 'required': True},
    'registeredAt': {'type': 'string', 'required': True, 'regex': r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$'},
    'createdAt': {'type': 'string', 'required': True, 'regex': r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$'},
    'updatedAt': {'type': 'string', 'required': True, 'regex': r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$'},
}