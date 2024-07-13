import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import the HomePage component
import GuestSignUp from './Guest/GuestSignUp';
import Booking from './Guest/Booking';
import OwnerSignUp from './Owner/OwnerSignUp';
import Property from './Owner/Property';
import Rooms from './Owner/Rooms';
import SignIn from './SignIn';
import GuestProfile from './Guest/GuestProfile';
import OwnerProfile from './Owner/OwnerProfile';
 import DataProperty from './Owner/Property';
 import RoomGallery from './components/RoomGalleryPage';
import Room from './Owner/Rooms';

const App = () => {
  return (
    <Router>
      {/* <Property />  */}
        <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/guest/signup">Guest Sign Up</Link>
            </li>
            <li>
              <Link to="/guest/booking">Guest Booking</Link>
            </li>
            <li>
              <Link to="/owner/signup">Owner Sign Up</Link>
            </li>
            <li>
              <Link to="/data">Owner Property</Link>
            </li>
            <li>
              <Link to="/rooms/create">Owner Rooms</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/ownerprofile/create">OwnerProfile</Link>
            </li>
            <li>
              <Link to="/guestprofile/create">GuestProfile</Link>
            </li>
          </ul> 
        </nav> 
       <Routes>
           <Route path="/" element={<HomePage />} /> {/* Define the route for HomePage  */}
           <Route path="/guest/signup" element={<GuestSignUp />} />
          <Route path="/guest/booking" element={<Booking />} />
          <Route path="/owner/signup" element={<OwnerSignUp />} />  
           <Route path="/data" element={<DataProperty />}/>
           <Route path="/gallery" element={<RoomGallery/>}/>
           <Route path="/rooms/create" element={<Rooms />}/> 
          <Route path="/login/signin" element={<SignIn />} />
          <Route path="/guestprofile/create" element={<GuestProfile />} />
          <Route path="/ownerprofile/create" element={<OwnerProfile />} />
          <Route exact path="/" component={Property} />
          <Route exact path="/properties/:propertyId" component={Rooms} /> 
          
         </Routes> 
       </div>  
    </Router>
  );
};

export default App;
