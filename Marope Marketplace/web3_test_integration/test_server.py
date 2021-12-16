from flask import Flask

app = Flask(__name__)

@app.route("/images", methods=['GET'])
def hello_world():
    data = request.data
    print(data)
    return [{
    "NFT token":"Roderick NFT image",
    "Description":"This is a NFT that was created by the artistic Marina",
    "Created_by": "Marina",
    "Token_ID": 90545454

 },
 {
    "NFT token":"John Doe NFT image",
    "Description":"This is a NFT that was created by the artistic Marina",
    "Created_by": "Roderick",
    "Token_ID": 90545464

 }
]