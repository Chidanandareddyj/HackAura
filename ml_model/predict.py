import sys
import pickle

with open('ml_model/risk_predictor.pkl', 'rb') as f:
    model = pickle.load(f)

income = float(sys.argv[1])
housing = float(sys.argv[2])
utilities = float(sys.argv[3])

risk = model.predict([[income, housing, utilities]])
print(risk[0])
