# YumRush

YumRush is a food delivery application that allows users to browse a menu, place orders, and manage their cart. The application consists of a front-end built with React and a back-end built with Express and MongoDB.

## Project Description

YumRush is designed to provide a seamless food ordering experience. Users can browse through various categories of food items, add items to their cart, and place orders. The application also includes user authentication, allowing users to register, log in, and log out.

## Features

- User registration and login
- Browse menu items
- Add items to cart
- Place orders
- View order history
- Responsive design

## Setup Instructions

### Backend

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   cd backend

2. **Install dependencies**:
   ```sh
   npm install
   
3. **Create a .env file**:
   ```sh
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. **1. **Install dependencies**:
   ```sh
   npm start

### Frontend

1. **Navigate to the frontend directory**:
   ```sh
   cd ../frontend

2. **Install dependencies**:
   ```sh
   npm install
   
3. **Start the development server**:
   ```sh
   npm run dev

## Assumptions

- Users will have a valid MongoDB URI and JWT secret for the backend.
- The application will initially be run in a development environment.

## Challenges

- Handling user authentication and maintaining session state.
- Implementing responsive design to ensure a good user experience on both desktop and mobile devices.

## Limitations

- The application currently does not support payment processing.
- The application is designed for a single restaurant and does not support multiple restaurants or locations.

