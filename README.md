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

```
GET Methods:
- /api/users
- /api/users/:_id
- /api/thoughts
- /api/thoughts/:_id

POST Methods:
- /api/users
- /api/thoughts
- /api/users/:userId/friends
- /api/thoughts/:thoughtId/reactions/:reactionId

PUT Methods:
- /api/users/:_id
- /api/thoughts/:_id

DELETE Methods:
- /api/users/:_id
- /api/thoughts/:_id
- /api/users/:_userId/friends/:_friendId
- /api/thoughts/:_thoughtId/reactions/:_reactionId
```
