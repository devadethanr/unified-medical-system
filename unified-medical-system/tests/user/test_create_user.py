import requests
import json

# URL of your Flask endpoint
url = 'http://127.0.0.1:5000/create/user'

# Read the test JSON file
with open('test_user.json', 'r') as file:
    test_data = json.load(file)

# Send a POST request to the Flask endpoint
response = requests.post(url, json=test_data)

# Print the response
print(f'Status Code: {response.status_code}')
print(f'Response Body: {response.json()}')