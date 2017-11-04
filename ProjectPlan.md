# Objectives

1. Design and plan the solution
2. Structure work and break it down into parts.
  - Documentation for the code.
  - Create test suite to
  - Implement those pieces.

# Solution Design

0. Data model:
  - user
    - username, email, password
  - Card (smallest unit)
    - owner
    - title: String, 120 char.
    - description field: string, 400 chars.
    - priority field:
    - due date:
    - (group)
    - (tags)
    - subtasks
  - Container
    - board reference
    - title
    - cards array
  - Board
    - title
    - description
    - owner
    - members: users array
    - container array

1. A mongodb database to store data
2. Express server for API endpoints

3. chai test suite for testing
4. Document js for documentation

# Setup Tasks

- consider what NPM packages we will need
1. mongoose
2. express
3. chai
4. mocha
5. chai-http

0. Create data model (mongoose)
1. Create a list of all the routes we plan to have.
2. Draft document for routes (api.md).
3. Shallow implement test suit.
  - create boilerplate tests. one per route.
4. Deep implementation of test suite.
  - test routes for accuracy
  - test all routes for returning data objects with accurate structure and data.

# Implementation / Solution Tasks

0. Set up directory and file structure
1. Set up mongoose models based on data model from solution design phase.
2. API Endpoints Server (express, node)
  - GET, POST, PUT, DETELE routes
  - Users
  - Cards
  - Lists
  - Boards

# Project Progression
-. Planning meeting - set high level objectives and structured plan.
0. Completed data model design
1. Completed Solution design planning
2. Structured work schedule and delegated work.
3. Had morning / evening planning meeting
4. Worked out format and syntax for Documentation
5. Worked out structure for tests.
6. Re-evaluated data models and solution scope for this project.
7. Fixed bugs in test structure.
8. Validating and Testing the tests
9. Building skeleton for solution, server and models
10. Refactoring skeleton to work better for team delegation.
11. Researching test code and structure.
12. Building out routes, controllers, and schemas.
13. Functional testing.
14. Unit testing.
15. Going back to build model tests.
16. Improving documentation and cleaning things.
17. Adding validation functions for routes.
18. Added --exit to mocha tests process.
19. Added server environment checking to use separate db for testing.
20. Researched to see if express servers have .close(). it seems they do not.
21. Adding the ability for tests to wipe and restore database. Research:
https://github.com/chaijs/chai-http/issues/178
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/
https://github.com/chaijs/chai-http
22. Consider updating tests to utilize promise syntax.
23. Researched and found some inconsistencies using arrow functions with mocha. I might need to wrap expects in a try catch.
https://stackoverflow.com/questions/16607039/in-mocha-testing-while-calling-asynchronous-function-how-to-avoid-the-timeout-er
https://mochajs.org/
24. Look into using Documentation js for documenting code.
