#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Result, User, Quiz, Question


# categories = ['programming','sports', 'video games', 'food', 'trivia']


# start_questions =  [ {
#         'prompt' : "Valorant is a tactical FPS developed by _____", 
#         'correct_answer' : "Riot Games",
#         'alt_1' : 'Valve', 
#         'alt_2' : 'Nintendo', 
#         'alt_3' : 'Square Enix',
#         'difficulty' : 1,
#         'percentage_correct' : 0 ,
#         'category' : categories[2]},


#         {
#         'prompt' : "The acronym CRUD stands for ____", 
#         'correct_answer' : "Create, Read, Update, Delete",
#         'alt_1' : 'Create, Raise, Use, Deploy', 
#         'alt_2' : 'Cloud, Read, Use, Delete', 
#         'alt_3' : 'Crowd, Raise, Update, Deploy',
#         'difficulty' : 2,
#         'percentage_correct' : 0,
#         'category' : categories[0]
#         },

#         {
#         'prompt' : "The following logo https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/1200px-Wolverhampton_Wanderers.svg.png belonds to which team", 
#         'correct_answer' : "Wolverhampton Wanderers",
#         'alt_1' : 'Brentford', 
#         'alt_2' : 'Besiktas', 
#         'alt_3' : 'Luton Town',
#         'difficulty' : 2,
#         'percentage_correct' : 0,
#         'category' : categories[1]},

#         {
#         'prompt' : "The logo for the May 1st, 2023 SE cohort at flatiron is a ___", 
#         'correct_answer' : "banana",
#         'alt_1' : 'monkey', 
#         'alt_2' : 'apple', 
#         'alt_3' : 'cat',
#         'difficulty' : 3,
#         'percentage_correct' : 0,
#         'category' : categories[4]},
        
#         {
#         'prompt' : "Haggis is a _____ dish traditionally made from the stomach of an animal", 
#         'correct_answer' : "Scottish",
#         'alt_1' : 'Turkish', 
#         'alt_2' : 'Moroccan', 
#         'alt_3' : 'Swiss',
#         'difficulty' : 4,
#         'percentage_correct' : 0,
#         'category' : categories[3]}
        
# ]

# def create_questions():
#     questions = []
#     for question in start_questions:
#         print(start_questions)
#         print(question)
#         val = Question(
#             prompt = question['prompt'],
#             correct_answer = question['correct_answer'],
#             alt_1 = question['alt_1'],
#             alt_2 = question['alt_2'],
#             alt_3 = question['alt_3'],
#             difficulty = question['difficulty'],
#             percentage_correct = question['percentage_correct'],
#             category = question['category']
#         )

#         questions.append(val)

#         print(questions)

#         return questions

# # questions = create_questions()
# # print(questions)


# question = {
#         'prompt' : "Valorant is a tactical FPS developed by _____", 
#         'correct_answer' : "Riot Games",
#         'alt_1' : 'Valve', 
#         'alt_2' : 'Nintendo', 
#         'alt_3' : 'Square Enix',
#         'difficulty' : 1,
#         'percentage_correct' : 0 ,
#         'category' : categories[2]}

# val = Question(

#     prompt = question['prompt'],
#     correct_answer = question['correct_answer'],
#     alt_1 = question['alt_1'],
#     alt_2 = question['alt_2'],
#     alt_3 = question['alt_3'],
#     difficulty = question['difficulty'],
#     percentage_correct = question['percentage_correct'],
#     correct_count = 0,
#     answer_count = 0,
#     category = question['category']
# )

# print(val)


# categories = ['programming','sports', 'video games', 'food', 'trivia']

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!


        # q_one = Question ( 
        # prompt = "Valorant is a tactical FPS developed by _____", 
        # correct_answer = "Riot Games",
        # alt_1 = 'Valve', 
        # alt_2 = 'Nintendo', 
        # alt_3 = 'Square Enix',
        # difficulty = 1,
        # percentage_correct = 0 ,
        # correct_count = 0,
        # answer_count = 0,
        # category = 'video games')
        

        # db.session.add(q_one)

        r_test = Result(score=2.0, user_id = 1, quiz_id = 1)
        db.session.add(r_test)
        db.session.commit()




