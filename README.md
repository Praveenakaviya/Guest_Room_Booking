# Guest Room Booking Website

## Overview

This project is a full-stack application built to facilitate booking guest rooms across different property types (house, apartment, villa, resort). It includes separate functionalities for guests and owners, allowing seamless management of bookings and property details.

## Features

### For Guests
- **User Authentication:** 
  - Signup and Login functionality with role-based access (guest/owner).
- **Room Booking:**
  - Guests can browse different property types and book rooms based on availability.
- **Property Viewing:**
  - View detailed property information, including room images uploaded by owners.
  
### For Owners
- **Dashboard:**
  - Access to a dashboard showing booked rooms and guest details.
- **Booking Management:**
  - Confirm or cancel bookings through a popup interface.
- **Property Management:**
  - Upload and manage property details, including room images.

### Property Types
- **House**
- **Apartment**
- **Villa**
- **Resort**

## Technologies Used
- **Frontend:** React, React Router DOM, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Additional Tools:** Bootstrap (for styling), multer (for handling file uploads)

## Setup Instructions
1. Clone the repository.
2. Navigate to the frontend and backend directories and install dependencies (`npm install`).
3. chane url of mongo db in db.js
4. Start the backend server (`npm start` in the backend directory).
5. Start the frontend server (`npm start` in the frontend directory).

## Folder Structure
