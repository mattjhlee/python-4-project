from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

from config import db

# Models go here!

# convention = {
#     "ix": "ix_%(column_0_label)s",
#     "uq": "uq_%(table_name)s_%(column_0_name)s",
#     "ck": "ck_%(table_name)s_%(constraint_name)s",
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
#     "pk": "pk_%(table_name)s"
# }

# metadata = MetaData(naming_convention=convention)

# db = SQLAlchemy(metadata=metadata)

class Question(db.Model, SerializerMixin):
    __tablename__ = 'Questions'
    id = db.Column(db.Integer, primary_key = True)
    prompt = db.Column(db.String)
    correct_answer = db.Column(db.String)
    alt_1 = db.Column(db.String)
    alt_2 = db.Column(db.String)
    alt_3 = db.Column(db.String)
    difficulty = db.Column(db.Integer) #validate this to be in a range
    percentage_correct = db.Column(db.Float)
    category = db.Column(db.String)

    #foreignkeys
    quiz_id = db.Column(db.Integer, db.ForeignKey('Quizzes.id'))

    #relationship
    #quiz relationship added

    #validations

    @validates('difficulty')
    def validate_difficulty(self,key,difficulty):
        if 1<=difficulty<=5:
            return difficulty
        return ValueError('Difficulty must be in range 1-5')
    
    #serializer rules

    serialize_rules = ("-quiz_id")   #If I want a question do I care to return what quiz it is on? in my head idt i care.
    


    def __repr__(self):
        return f'Question: {self.prompt} has correct answer {self.correct_answer}. It has a difficulty of level {self.difficulty}'

    


class Quiz(db.Model, SerializerMixin):
    __tablename__ = 'Quizzes'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    category = db.Column(db.String)
    created_by = db.Column(db.String)  #Can i have the value in the column be an object that I create? I can do validation with isInstance also i suppose?
    created_at = db.Column(db.DateTime(timezone=True), default= db.func.now())
    # time_updated = db.Column(db.DateTime(timezone=True), onupdate=db.func.now())

#relationships

    results = db.relationship("Result" , backref = "quiz")

    serialize_rules = ("-results.quiz",)

#validations
#serializer Rules


    def __repr__(self):
        return f'Quiz: {self.name} Category: {self.category}'    


class User(db.Model,SerializerMixin):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    #password if we get around to authentication 
    created_at = db.Column(db.DateTime(timezone=True), default= db.func.now())

    #relationships

    results = db.relationship("Result", backref = "user")

    #serializer Rules

    serialize_rules = ("-results.user",)

    #User has a relationship to the results table. Results are tied into a Quiz. Quizes are tied to questions. 

    #validations
    

    def __repr__(self):
        return f'Username:{self.username}'

class Results(db.Model, SerializerMixin):
    __tablename__ = 'Results'
    id = db.Column(db.Integer, primary_key = True)
    score = db.Column(db.Float)
    created_at = db.Column(db.DateTime(timezone=True), default= db.func.now())

    # relationships
    #Every result is created by a user and every result is for a specific quiz

    user_id = db.Column(db.Integer, db.ForeignKey('Users.id')) 
    quiz_id = db.Column(db.Integer, db.ForeignKey('Quizzes.id'))

    #serializer Rules
    serialize_rules = ('-user.results','-quiz.results')

    #validations
    

    def __repr__(self):
        return f'Result: {self.score}'