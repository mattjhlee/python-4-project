-- SQL setup?

-- INSERT INTO QUESTIONS (id, prompt, correct_answer, alt_1,alt_2,alt_3,difficulty,percentage_correct,correct_count,answer_count,category) VALUES (1,"Valorant is a tactical FPS developed by _____","Riot Games","Valve","Nintendo","Square Enix",1,0,0,0,"video games");

INSERT INTO QUESTIONS (id, prompt, correct_answer, alt_1,alt_2,alt_3,difficulty,percentage_correct,category) VALUES (1,"Valorant is a tactical FPS developed by _____","Riot Games","Valve","Nintendo","Square Enix",1,0,"video games");

INSERT INTO QUESTIONS (id, prompt, correct_answer, alt_1,alt_2,alt_3,difficulty,percentage_correct,category) VALUES (2,"The acronym CRUD stands for ____","Create Read Update Delete","Create Raise Use Deploy","Crowd Raise Update Deploy","Crowd Raise Update Deploy",2,0,"programming");

INSERT INTO QUESTIONS (id, prompt, correct_answer, alt_1,alt_2,alt_3,difficulty,percentage_correct,category) VALUES (3, "Which of the following teams were not in the 2022-2023 season of the EPL","Besiktas","Wolverhampton","Brentford","Luton Town", 2, 0, "Sports");

INSERT INTO QUESTIONS (id, prompt, correct_answer, alt_1,alt_2,alt_3,difficulty,percentage_correct,category) VALUES (4, "The logo for the May 1st, 2023 SE cohort at flatiron is a ___","banana","monkey","apple","cat",3,0,"trivia");

INSERT INTO QUESTIONS (id, prompt, correct_answer, alt_1,alt_2,alt_3,difficulty,percentage_correct,category) VALUES (5, "Haggis is a ____ dish traditionally made from teh stomach of an animal", "Scottish", "Turkish", "Moroccan","Swiss",4,0,"food");

INSERT INTO Quizzes (id, name, category, created_by, created_at) VALUES (1, "JSPython" , "programming",1,1);
INSERT INTO Quizzes (id, name, category, created_by, created_at) VALUES (2, "Cohort Trivia" , "trivia",1,1);
INSERT INTO Quizzes (id, name, category, created_by, created_at) VALUES (3, "PC Games" , "video games",1,1);
INSERT INTO Quizzes (id, name, category, created_by, created_at) VALUES (4, "Sports Quiz" , "sports",1,1);
INSERT INTO Quizzes (id, name, category, created_by, created_at) VALUES (5, "Foodie Quiz" , "food",1,1);

INSERT INTO Users (username) VALUES ('Default');
INSERT INTO Users (username) VALUES ('Matthew');
INSERT INTO Users (username) VALUES ('Shams');



DELETE FROM Users WHERE id =4;
