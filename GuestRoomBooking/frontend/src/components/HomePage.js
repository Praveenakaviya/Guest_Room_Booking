import React from 'react';
import './HomePage.css'; // Import the CSS file
import videoSrc from './mainbg.mp4';
import logo from './logo.png';
import image1 from './images/image1.jpg';
import image2 from './images/images2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import Owner from './images/owner.jpg';
import Guest from './images/guest.jpg';
import aboutImage from './images/about_image.jpg';

 

// import SearchBar from './SearchBar';
// import ImageGallery from './ImageGallery';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <div className="navbar">
      <div className="logo">
          <img src={logo} alt="CozyStay" /> 
          {/* Use imported logo variable */}
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="/owner/signup">Owner</a>
          <a href="#gallery">Guest</a>
          <a href='/gallery'>Contact</a>
          <a href="/login/signin">SignIn</a>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section" id="home">
        <video autoPlay muted loop className="background-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1 className="quote">"Relax, unwind, and enjoy your stay"</h1>
        </div>
      </div>
    <div className="round-image-section">
      <div className="round-image">
        <img src={image1} alt="Image1" />
        <h3>Accommodation Choices</h3>
        <div className="content-container">
          <div className="point-box">
            <ul>
              <li>Explore a wide range of accommodation options including apartments.</li>
              <li>Vacation homes</li>
              <li>Villas</li>
              <li>Cottages</li>
              <li>Guest rooms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="round-image">
        <img src={image2} alt="Image2" />
        <h3>Booking Flexibility</h3>
        <div className="content-container">
          <div className="point-box">
            <ul>
              <li>Book with flexible options to your needs</li>
              <li>ensuring a hassle-free experience.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="round-image">
        <img src={image3} alt="Image3" />
        <h3>Guest & Owner Support</h3>
        <div className="content-container">
          <div className="point-box">
            <ul>
              <li>Receive dedicated support for both guests and owners.</li>
              <li>Ensuring smooth communication and assistance throughout.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="round-image">
        <img src={image4} alt="Image4" />
        <h3>Reviews & Ratings</h3>
        <div className="content-container">
          <div className="point-box">
            <ul>
              <li>Transparent reviews enhance booking confidence</li>
              <li>For a seamless stay experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     
    <div className="about-section">
        {/* Left Side Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <p className="vision">
            The vision of our guest room booking application is to revolutionize accommodation booking by offering secure, easy stays at affordable costs. We aim to provide a seamless experience with diverse accommodation options,<br /> ensuring convenience, transparency, and comfort. Additionally, we empower property owners with a reliable source of income through secure bookings and streamlined management tools.
          </p>
        </div>
      </div> 
      <div className="container">
            <div className="part">
                <div className="image-container">
                    <img src={Owner} alt="Owner" />
                    <div className="round-text">
                        <h2>Owner</h2>
                        <p>property owners with a reliable source of income through secure bookings</p>
                    </div>
                </div>
            </div>
           <hr/>
            <div className="part">
                <div className="image-container">
                    <img src={Guest} alt="Guest" />
                    <div className="round-text">
                        <h2>Guest</h2>
                        <p>secure, easy stays at affordable costs</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-item-container">
            <h3>What is CozyStay all about?</h3>
            <p>CozyStay aims to provide a platform for property owners to list their accommodations for short-term stays, while offering guests a seamless booking experience.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-item-container">
            <h3>How can I list my property on CozyStay?</h3>
            <p>To list your property on CozyStay, you need to sign up as an owner, provide property details including amenities, and manage bookings through our platform.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-item-container">
            <h3>Is CozyStay available internationally?</h3>
            <p>Currently, CozyStay operates primarily in India, focusing on major cities like Mumbai, Delhi, Bangalore, and others.</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-item-container">
            <h3>How secure are bookings made through CozyStay?</h3>
            <p>CozyStay ensures secure transactions and verifies both guests and property owners to maintain a safe environment for all users.</p>
          </div>
        </div>
      </div>
    </div>
        <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h5>Indian Cities</h5>
            <ul>
              <li>Mumbai</li>
              <li>Delhi</li>
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Chennai</li>
            </ul>
          </div>
          <div className="col-md-5">
            <h5>Contact Us</h5>
            <div className="contact-info">
              <p>Email: CozyStay@example.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomePage;
