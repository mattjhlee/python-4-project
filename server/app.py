#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from models import db, Question, Quiz, User, Result
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

<<<<<<< HEAD
#ROUTES ASSOCIATED WITH QUIZZES

@app.route('/quizzes', methods = ['GET'])
def quizzes():
    quizzes = Quiz.query.all()
    quizzes_dict = [quiz.to_dict(rules = ('-results', )) for quiz in quizzes]
    return make_response(quizzes_dict, 200)

@app.route('/quizzes/<int:id>', methods = ['GET', 'POST', 'DELETE'])
=======
@app.route('/quizzes', methods = ['GET', 'POST'])
def quizzes():
    if request.method == 'GET':
        quizzes = Quiz.query.all()
        quizzes_dict = [quiz.to_dict(rules = ('-results', )) for quiz in quizzes]
        return make_response(quizzes_dict, 200)
    
    elif request.method == 'POST':
        data = request.get_json()

        try:

            new_quiz = Quiz(
                name = data['name'],
                category = data['category'],
                created_by = data['created_by'],
                created_at = data['created_at']
            )

            db.session.add(new_quiz)

            db.session.commit()

            response = make_response(
                jsonify(new_quiz.to_dict()),
                201
            )

        except ValueError:

            response = make_response(
                { "errors": ["validation errors"] },
                400
            )

        return response


@app.route('/quizzes/<int:id>', methods = ['GET','DELETE'])
>>>>>>> c5db65cdfd40425f64c3bb620e1be9c06304a12d
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
<<<<<<< HEAD


#ROUTES ASSOCIATED WITH QUESTIONS

=======
    
>>>>>>> c5db65cdfd40425f64c3bb620e1be9c06304a12d
@app.route('/questions', methods = ['GET'])
def questions():
    questions = Question.query.all()
    questions_dict = [question.to_dict(rules = ('-quiz', )) for question in questions]
    return make_response(questions_dict, 200)

<<<<<<< HEAD

@app.route('/questions/<string:category>', methods = ['GET', 'POST', 'PATCH', 'DELETE'])
def questions_by_cat(category):
    #filter out questions by category
    return 'hello'

@app.route('/questions/<int:difficulty>', methods = ['GET', 'POST','PATCH','DELETE'])
def questions_by_difficulty(difficulty):
    #filter out questions by category
    return 'hello'




#ROUTES ASSOCIATED WITH USERS
=======
@app.route('/questions/<int:id>', methods = 'PATCH')
def question_by_id(id):
    question = Question.query.filter(Question.id == id).first()

    if question:
        data = request.get_json()

        try:

            for key in data:
                setattr(question, key, data[key])

            db.session.add(question)

            db.session.commit()

            response = make_response(
                jsonify(question.to_dict(rules = ('-quiz', ))),
                202
                )

        except ValueError:

            response = make_response(
                { "errors": ["validation errors"] },
                400
                )
    return response
>>>>>>> c5db65cdfd40425f64c3bb620e1be9c06304a12d

@app.route('/users', methods = ['GET'])
def users():
    users = User.query.all()
    users_dict = [user.to_dict(rules = ('-results', )) for user in users]
    return make_response(users_dict, 200)

<<<<<<< HEAD
=======
@app.route('/results', methods = ['GET', 'POST'])
def results():
    if request.method == 'GET':
        results = Result.query.all()
        results_dict = [result.to_dict() for result in results]
        return make_response(results_dict, 200)
    
    elif request.method == 'POST':
        data = request.get_json()

        try:

            new_result = Result(
                score = data['score'],
                created_at = data['created_at']
            )

            db.session.add(new_result)

            db.session.commit()

            response = make_response(
                jsonify(new_result.to_dict()),
                201
            )

        except ValueError:

            response = make_response(
                { "errors": ["validation errors"] },
                400
            )

        return response
    

>>>>>>> c5db65cdfd40425f64c3bb620e1be9c06304a12d

if __name__ == '__main__':
    app.run(port=5555, debug=True)