from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@localhost/gamesbond"

db = SQLAlchemy(app)


class Feedback(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    message = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=True)


class Contacts(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    subject = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=True)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/feedback", methods=["GET", "POST"])
def feedback():
    if request.method == "POST":
        name = request.form.get('name')
        rating = request.form.get('rating')
        message = request.form.get('message')
        date = datetime.now()
        entry = Feedback(name=name, rating=rating, message=message, date=date)
        db.session.add(entry)
        db.session.commit()
    return render_template("Feedback.html")


@app.route("/support")
def support():
    return render_template("support us.html")


@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("username")
        email = request.form.get("mail")
        subject = request.form.get("Subject")
        date = datetime.now()
        entry = Contacts(name=name, email=email, subject=subject, date=date)
        db.session.add(entry)
        db.session.commit()
    return render_template("contact us.html")


@app.route("/content")
def content():
    return render_template("content1.html")


app.run(debug=True)
## now plis leave for a min ok?oki
