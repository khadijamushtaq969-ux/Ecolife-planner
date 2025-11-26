from flask import Flask, send_from_directory, request, jsonify
import os

# Create Flask app
app = Flask(__name__, static_url_path='', static_folder='.')

# Serve index.html
@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

# Serve all static files (CSS, JS, images)
@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

# ------------------------------
#   BACKEND ECO LOGIC
# ------------------------------
eco_data = {"trees": 0, "water": 0, "waste": 0}

@app.route('/update', methods=['POST'])
def update():
    data = request.get_json()
    action = data.get("action")

    if action == "plantTree":
        eco_data["trees"] += 1
    elif action == "saveWater":
        eco_data["water"] += 1
    elif action == "reduceWaste":
        eco_data["waste"] += 1

    # Score calculation
    total = eco_data["trees"]*10 + eco_data["water"]*5 + eco_data["waste"]*5
    if total > 100:
        total = 100

    return jsonify({
        "eco_level": total,
        "trees": eco_data["trees"],
        "water": eco_data["water"],
        "waste": eco_data["waste"]
    })

# ------------------------------
#   RUN THE SERVER
# ------------------------------
if __name__ == "__main__":
    app.run(debug=True)
