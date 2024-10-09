import React from "react";
import { Container, FormCheck } from "react-bootstrap";
import Checkbox from "../components/Checkbox";
const Dropdown = () => {
  return (
    <>
      <h3>Module Permission</h3>
      <Container className="custom-container">
        <label htmlFor="cars" >Module</label> <br />
        <select name="cars" id="cars" className="dropdown-select" style={{paddingRight:"20px"}}>
         
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>

          <option value="mercedes">Mercedes</option>
          <optaion value="audi">Audi</optaion>
          
        </select>
        <br />
        <br />
        <div className="border-bottom"></div>
        <Checkbox />
      </Container>

      <style jsx>{`
        .custom-container {
          background-color: white; /* Set background color to white */
          border: 1px solid #ccc; /* Set border color */
          padding: 20px; /* Add padding inside the container */
          min-height: 500px; /* Optional: set a minimum height for the container */
        }
        .dropdown-select {
          width: 300px; /* Set width of the select menu */
          padding: 10px; /* Add some padding for aesthetics */
          border: 1px solid #ccc; /* Border for the dropdown */
          border-radius: 4px; /* Rounded corners */
         
          
        }
        .border-bottom {
          border-top: 1px solid #ccc; /* Border below the dropdown */
          margin-top: 10px; /* Space between dropdown and border */
          height: 0; /* Height of the border */
          width: calc(100% - -40px); /* Full width minus container padding */
          margin-left: -20px; /* Align with container padding */
          margin-right: 20px; /* Align with container padding */
        }
      `}</style>
    </>
  );
};

export default Dropdown;
