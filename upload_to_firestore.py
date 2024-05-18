import firebase_admin
from firebase_admin import credentials, firestore
import json

# Path to your service account key file
cred = credentials.Certificate(r"C:\Users\muric\Downloads\wanderwisedb-firebase-adminsdk-gz1zt-551e60332b.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Load data from JSON file
with open("structured_destinations_firestore.json") as f:
    data = json.load(f)

# Upload data to Firestore
collection_name = "destinations"

for doc in data:
    doc_ref = db.collection(collection_name).document()
    doc_ref.set({
        "destination_name": doc["fields"]["destination_name"]["stringValue"],
        "continent": doc["fields"]["continent"]["stringValue"],
        "country": doc["fields"]["country"]["stringValue"],
        "price_standard": doc["fields"]["price_standard"]["doubleValue"],
        "climate": doc["fields"]["climate"]["stringValue"],
        "picture_url": doc["fields"]["picture_url"]["stringValue"]
    })

print("Data uploaded successfully.")
