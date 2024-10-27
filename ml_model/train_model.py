import pickle
from sklearn.ensemble import RandomForestClassifier

X_train = [[3000, 500, 200], [2500, 600, 300], [4000, 700, 400]]  # Example data
y_train = [0, 1, 0]  # 0 = low risk, 1 = high risk

model = RandomForestClassifier()
model.fit(X_train, y_train)

with open('ml_model/risk_predictor.pkl', 'wb') as f:
    pickle.dump(model, f)
