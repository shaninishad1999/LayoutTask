import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Container>
          <div className="left-side">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <p style={{ margin: '0 10px' }}>Hi! Shanideval</p>
          </div>

          <div className="right-side">
            <p style={{ margin: '0 10px' }}>15 October 2024</p>
            <div className="icon-container">
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
            </div>
            <img 
              src="/src/assets/react.svg" 
              alt="Icon" 
              className="header-icon" 
            />
            <p className="icon-name">Your Name</p>
          </div>
        </Container>
      </div>    
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center; /* Center items vertically */
          padding: 10px;
          border: 1px solid #ccc;
        }
        .left-side {
          display: flex;
          align-items: center; /* Center items vertically */
        }
        .right-side {
          display: flex;
          align-items: center; /* Center items vertically */
        }
        .right-side p, .left-side p {
          margin: 0 10px; /* Spacing between elements */
        }
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ccc; /* Border around the icons */
          border-radius: 50%; /* Rounded borders */
          padding: 5px; /* Spacing inside the border */
          margin-right: 10px; /* Spacing between the icon and other elements */
        }
        .notification-icon {
          cursor: pointer;
        }
        .search-icon {
          cursor: pointer;
        }
        .header-icon {
          width: 30px; /* Set width for the icon */
          height: 30px; /* Set height for the icon */
        }
      `}</style>
    </>
  );
};

export default Header;
