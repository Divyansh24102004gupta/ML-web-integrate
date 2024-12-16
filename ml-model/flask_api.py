# flask_api.py
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('house_price_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    square_footage = np.array([data['square_footage']]).reshape(-1, 1)
    prediction = model.predict(square_footage)[0]
    return jsonify({'predicted_price': prediction})

if __name__ == '__main__':
    app.run(port=5000)
