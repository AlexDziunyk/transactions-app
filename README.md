# transactions-app
## How to launch this application?
1. You have to have installed Docker on your platform.
2. Write ```cd backend``` to enter backend folder and create .env file that looks like this: ```MONGO_URI=mongodb://mongo:27017/transactions_db```.
3. Write ```cd frontend``` to enter frontend folder and create .env file that looks like this: ```VITE_API_URL=http://localhost:3001/api```.
4. Write ```docker-compose up --build``` in the console when you're in the root folder of the project.
5. On ```http://localhost:5173/``` you can see working application.
6. You can check local mongodb by this address ```mongodb://localhost:27017``` in MongoDB Compass to look at the entities that exist.
7. During the application's launch, one user entity and three product entities are created.

## How to test this application?
To test this application you need:
1. Write ```cd backend``` to enter backend folder.
2. Write npm test to launch all tests the application has.
3. There are only unit tests.
