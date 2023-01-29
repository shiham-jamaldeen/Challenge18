# No SQL Social Network API ![MIT License](https://camo.githubusercontent.com/302a0a2a90397c2fc68f3838a6c9b9cebec684d041d250065a05bebab1412cd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d726564)

The No SQL Social Network API is simple web application where registered users can share their thoughts, react or comment to a friend's thoughts and create a friend list. This application can be easily integrated to any front end/UI of your choice.

A video recording is available on Youtube, see **Demo video** for details.


## Table of contents
- [Key features](#key-features)
- [Technology stack](#Technology-stack)
- [Installation](#Installation)
- Demo and walkthrough(#Demo-and-walkthrough)

## Key features
- Create new users
- Add/delete registered users, to a friend list
- Post thoughts
- Post a reaction to a thought
- CRUD (Create, Read, Update and Delete) operations for users, thoughts and reactions. Note reactions are limited to Create and Delete operations.


## Technology stack
- MongoDB database and Mongoose ODM, as the main database engine (hence the NO SQL)
- Node JS and Express.js, for handling the routes and the backend
- Moment.js, for manipulating date and timestamps

## Installation
- Not required.
- If you wish to clone or fork the repo, you will need to:
  - Run `npm install`. This will install the necessary npm packages locally
  - Enter `node server.js` from the command prompt, to start the server.
> **Note**: Some seeding data can be found in the  `Utils` folder.

## Demo and walkthrough

### Demo video
[No SQL-Social Network API Demo](https://youtu.be/4Y3QaOwOD0Q) video demonstrates the full functionality of the application. It uses Insomnia to test the routes that are explained below.

### Summary of API Routes

GET Method for all routes
- /api/users
- /api/users/:_id
- /api/thoughts
- /api/thoughts/:_id

POST Methods of API Routes
- /api/users

GET to get a single thought by its _id

GET all users
GET a single user by its _id and populated thought and friend data
POST a new user:
PUT to update a user by its _id
DELETE to remove user by its _id


/api/users/:userId/friends/:friendId
POST to add a new friend to a user's friend list
DELETE to remove a friend from a user's friend list
/api/thoughts
GET to get all thoughts
GET to get a single thought by its _id
POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
PUT to update a thought by its _id
DELETE to remove a thought by its _id


/api/thoughts/:thoughtId/reactions
POST to create a reaction stored in a single thought's reactions array field
DELETE to pull and remove a reaction by the reaction's reactionId value


