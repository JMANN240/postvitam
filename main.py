import os
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/videofiles")
def videofiles():
    return jsonify(os.listdir(os.path.join("static", "videos")))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)