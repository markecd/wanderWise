WanderWise

About the Project

WanderWise is a travel planning application designed to help users efficiently organize their trips. It features an intuitive interface that allows users to search and filter destinations, create personalized travel plans, and generate itineraries using AI. Additionally, users can manage their profiles and follow other travelers to share and discover new travel experiences.

Features

- Search bar and filter for searching destinations
- Creating own plans
- Generating plans using AI
- User profile and following system
- Adding/eremoving participants on saved plan

Technology Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: Firestore (NoSQL)
- Authentication: auth middleware, bcrypt, jwt session tokens
- UI Libraries: react-toastify for notifications, bootstrap-icons
- API's: 
    Google maps(directions, geocoding, places)
    Travelpayouts(Aviasales - prices for dates)


Installation

To run this project locally, follow these steps:

1. Clone the repository:

git clone https://github.com/your-repo/wanderwise.git

2. Navigate to the project directory:

cd wanderwise

3. Run docker compose:

docker-compose up --build

OR

1. Clone the repository:

git clone https://github.com/your-repo/wanderwise.git

2. Navigate to the backend directory:

cd backend

3. Install the backend dependencies:

npm install

4. Start the backend server:

node app.js

5. Navigate to the frontend directory and install dependencies:

cd frontend
npm install

6. Start the React application:

npm run dev
# wanderWise
