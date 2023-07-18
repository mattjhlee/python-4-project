#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from models import db, Question, Quiz, User, Results
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
import os

# Local imports
from config import app, db, api
from models import User

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''

@app.route('/quizzes', methods = ['GET'])
def quizzes():
    quizzes = Quiz.query.all()
    quizzes_dict = [quiz.to_dict(rules = ('-results', )) for quiz in quizzes]
    return make_response(quizzes_dict, 200)

@app.route('/quizzes/<int:id>', methods = ['GET', 'POST', 'DELETE'])
def quiz_by_id(id):
    quiz = Quiz.query.filter(Quiz.id == id).first()

    if quiz:

        if request.method == 'GET':
            quiz_dict = quiz.to_dict()
            response = make_response(quiz_dict, 200)

        elif request.method == 'DELETE':
            questions = Question.query.filter(Question.quiz_id == id).all()

            for question in questions:
                db.session.delete(question)
            
            db.session.delete(quiz)
            db.session.commit()
            
            response = make_response({}, 204)

        else:
            response = make_response(
            { "error": "Quiz not found" },
            404
            )
        
        return response
    
@app.route('/questions', methods = ['GET'])
def questions():
    questions = Question.query.all()
    questions_dict = [question.to_dict(rules = ('-quiz', )) for question in questions]
    return make_response(questions_dict, 200)

@app.route('/users', methods = ['GET'])
def users():
    users = User.query.all()
    users_dict = [user.to_dict(rules = ('-results', )) for user in users]
    return make_response(users_dict, 200)


if __name__ == '__main__':
    app.run(port=5555, debug=True)
