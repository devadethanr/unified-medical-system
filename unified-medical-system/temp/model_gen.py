import os

# Define the DBML as a string
dbml = """
Table users {
  umsId string [primary key, note: 'Alpha-numeric, UUIDv4']
  name string
  email string [unique]
  googleAuthId string
  phoneNumber string
  address string
  registeredAt timestamp
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
  deletedAt timestamp [note: 'Soft delete timestamp']
  passwordHash string [note: 'Hashed and salted password']
}

Table roles {
  rolesId integer [primary key]
  roleName string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table login {
  umsId string [primary key, ref: > users.umsId, note: 'Alpha-numeric']
  passwordHash string [note: 'Hashed and salted password']
  email string [unique]
  roleId integer [ref: > roles.rolesId]
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table patients {
  umsId string [primary key, note: 'UMSG-UUIDv4', ref: > users.umsId]
  dateOfBirth date
  gender string
  rolesId integer [ref: > roles.rolesId]
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table patientDetails {
  patientId integer [primary key, ref: > patients.umsId]
  medicalHistory json
  photo string [note: 'Path to patient photo']
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table doctors {
  umsId string [primary key, note: 'UMSD-UUIDv4', ref: > users.umsId]
  specialization string
  rolesId integer [ref: > roles.rolesId]
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table doctorDetails {
  doctorId integer [primary key, ref: > doctors.umsId]
  availability string
  medicalId string [note: 'Alpha-numeric']
  qualification json
  photo string [note: 'Path to doctor photo']
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table hospitals {
  umsId string [primary key, note: 'UMSH-UUIDv4', ref: > users.umsId]
  hospitalName string
  location string
  rolesId integer [ref: > roles.rolesId]
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table hospitalDetails {
  hospitalId integer [primary key, ref: > hospitals.umsId]
  hospitalType string
  speciality json
  affiliationNumber string [note: 'Alpha-numeric']
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table appointments {
  appointmentId integer [primary key]
  patientId integer [ref: > patients.umsId]
  doctorId integer [ref: > doctors.umsId]
  rolesId integer [ref: > roles.rolesId]
  dateTime timestamp
  appointmentNotes text
  appointmentSpecialization string
  appointmentStatus string
  disabilityCertificateId string [note: 'Alpha-numeric']
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table medicalRecords {
  recordId integer [primary key]
  patientId integer [ref: > patients.umsId]
  doctorId integer [ref: > doctors.umsId]
  rolesId integer [ref: > roles.rolesId]
  dateOfRecord date
  documentType string
  documentContent json
  hospitalDb string
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table labResults {
  labResultId integer [primary key]
  patientId integer [ref: > patients.umsId]
  rolesId integer [ref: > roles.rolesId]
  testType string
  resultDate date
  resultDetails json
  labTechnicianId integer
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table symptoms {
  symptomId integer [primary key]
  patientId integer [ref: > patients.umsId]
  rolesId integer [ref: > roles.rolesId]
  date date
  reportedSymptoms string [increment]
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table diseaseOutbreaks {
  outbreakId integer [primary key]
  diseaseName string
  location geojson
  rolesId integer [ref: > roles.rolesId]
  startDate date
  latestUpdate date
  caseCount integer
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table feedbacks {
  feedbackId integer [primary key]
  umsId integer [ref: > users.umsId]
  rolesId integer [ref: > roles.rolesId]
  subject string
  description text
  rating integer
  status string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}

Table complaints {
  complaintId integer [primary key]
  umsId integer [ref: > users.umsId]
  rolesId integer [ref: > roles.rolesId]
  subject string
  description text
  status string
  resolution string
  createdAt timestamp [default: 'CURRENT_TIMESTAMP']
  updatedAt timestamp [default: 'CURRENT_TIMESTAMP']
}
"""

# Define the models directory
models_dir = 'models'

# Ensure the models directory exists
if not os.path.exists(models_dir):
    os.makedirs(models_dir)

# Split the DBML into lines
lines = dbml.strip().split('\n')

# Initialize variables
current_table = None
schema = {}

# Process each line
for line in lines:
    line = line.strip()
    if line.startswith('Table '):
        if current_table:
            # Write the current table schema to a file
            with open(os.path.join(models_dir, f'{current_table}.py'), 'w') as f:
                f.write(f'{current_table}_schema = {schema}\n')
            schema = {}
        current_table = line.split(' ')[1].strip('{}')
    elif line and current_table:
        parts = line.split(' ')
        if len(parts) > 1 and '[' in parts[1]:
            field_name = parts[0]
            field_type = parts[1].split('[')[0]
            field_options = parts[1].split('[')[1].strip(']').split(', ')
            field_schema = {'type': field_type}
            for option in field_options:
                if 'primary key' in option:
                    field_schema['primary_key'] = True
                elif 'unique' in option:
                    field_schema['unique'] = True
                elif 'default' in option:
                    field_schema['default'] = option.split('default: ')[1].strip('"')
                elif 'note' in option:
                    field_schema['note'] = option.split('note: ')[1].strip('"')
            schema[field_name] = field_schema

# Write the last table schema to a file
if current_table:
    with open(os.path.join(models_dir, f'{current_table}.py'), 'w') as f:
        f.write(f'{current_table}_schema = {schema}\n')