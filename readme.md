# 🌟 primeStay

primeStay is a hotel booking website built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can browse and book hotels, view prices based on selected dates, and explore hotel details including images, location, amenities, and features. Additionally, users can list their own places on the platform.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## ✨ Features

- **User Authentication**: Sign up, log in, and manage user accounts.
- **Browse Hotels**: View a list of available hotels with images, location, amenities, and features.
- **Hotel Details**: See detailed information about each hotel, including images and descriptions.
- **Date-Based Pricing**: Get prices based on selected check-in and check-out dates.
- **Book Hotels**: Reserve hotels for specified dates.
- **List Own Places**: Users can list their own properties on primeStay.
- **Responsive Design**: Fully responsive design for seamless experience on desktop and mobile devices.

## 🛠️ Technologies Used

- **Frontend**:
  - React.js
  - Context API (for state management)
  - React Router (for navigation)
  - Tailwind (for styling)
- **Backend**:

  - Node.js
  - Express.js
  - MongoDB (with Mongoose ORM)

- **Other**:
  - JWT (JSON Web Tokens) for authentication
  - Multer (for file uploads)
  - Google Maps API for location services

## ⚙️ Setup and Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally, or a MongoDB Atlas account.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/1ashutosh1/Hotel-Booking-App
   cd primeStay
   ```

2. **Install Backend Dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd client
   npm install
   ```

# Environment Setup Instructions

## Backend Setup

1. In the backend directory, create a `.env` file.
2. Add the following environment variables to the `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
SECRET=your_jwt_secret
PORT=your port number
FRONTEND_URL="http://localhost:5173"
```

3. Run the backend server:

 cd backend
 npm run dev

## Client Setup

1. In the client directory, create a `.env` file.
2. Add the following environment variables to the `.env` file:

```env
VITE_BACKEND_URL="http://localhost:yourPort(ex: 4000)"
```
3. Run the backend server:

 cd client
 npm run dev


# 🚀 Usage

To use primeStay, follow these instructions:

1. **Browse Hotels**: Navigate to the homepage to see a list of available hotels.

2. **Hotel Details**: Click on a hotel to view more details, images, and amenities.

3. **Book a Hotel**: Select check-in and check-out dates to see prices and make a reservation.

4. **List a Place**: Sign in and navigate to the "List Your Place" section to add a new property.


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create your feature branch (`git checkout -b feature/YourFeature`).

3. Commit your changes (`git commit -m 'Add some feature'`).

4. Push to the branch (`git push origin feature/YourFeature`).

5. Open a pull request.


## 📞 Contact

For any questions or suggestions, please contact:

- **Ashutosh Tripathi**
- **Email**: your.email@example.com
- **GitHub**: [1ashutosh1](https://github.com/1ashutosh1)

```

```
