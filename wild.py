from flask import Flask, request, jsonify
import pandas as pd
import numpy as np

app = Flask(__name__)

def gradient_descent(x, y, learning_rate=0.001, iterations=100):
    m_curr = b_curr = 0
    n = len(x)
    
    for i in range(iterations):
        y_predicted = m_curr * x + b_curr
        md = -(2/n) * np.sum(x * (y - y_predicted))
        bd = -(2/n) * np.sum(y - y_predicted)
        m_curr -= learning_rate * md
        b_curr -= learning_rate * bd
    
    return m_curr, b_curr

@app.route('/predict', methods=['POST'])
def predict_future_fire_area():
    data = pd.read_csv('areaburntbywildfiresbyweek new.csv')
    input_data = request.json
    country = input_data.get('country')
    year = input_data.get('year')
    
    grouped_data = data.groupby('Entity')
    group = grouped_data.get_group(country)
    
    x = group['Year'].values
    y = group['area burnt by wildfires in 2024'].values
    
    m, b = gradient_descent(x, y)
    future_area = m * year + b
    
    return jsonify({'year': year, 'predicted_area': future_area})

if __name__ == '__main__':
    app.run(debug=True)
