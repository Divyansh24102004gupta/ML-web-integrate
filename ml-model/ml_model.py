# ml_model.py
import numpy as np
import joblib
from sklearn.linear_model import LinearRegression

# Sample dataset
X = np.array([[1200], [1500], [1800], [2000]])  # Square footage
y = np.array([300000, 350000, 400000, 450000])  # Prices

# Train the model
model = LinearRegression()
model.fit(X, y)

# Save the model
joblib.dump(model, 'house_price_model.pkl')
