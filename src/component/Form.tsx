// Import necessary React hooks and components
// React: The core library for building user interfaces in React.
// useState: A hook that lets you add React state to function components.
import React, { useState } from "react";

// useNavigate: A hook from React Router that provides navigation methods.
// It's used here to navigate between pages without reloading the page.
import { useNavigate } from "react-router-dom";

// Import local CSS file for styling
// This file contains styles specific to the Form component.
import "./Form.css";

// Import an image to be used in the component
// This image is displayed as part of the component's UI.
import Frame from "../Frame.png";

// Import a Modal component to display form values
// The Modal component is a reusable UI element that can be used to show content in a modal window.
import Modal from "./Modal";

// Define the CreatePage component as a functional component
// This component is responsible for rendering the form and handling its submission.
const CreatePage: React.FC = () => {
 // State to manage whether the modal is open
 // useState is used to create a state variable and a function to update it.
 const [isModalOpen, setIsModalOpen] = useState(false);

 // State to manage form values
 // This state holds the values entered into the form fields.
 const [formValues, setFormValues] = useState({
    deliverableNames: "",
    activitiesList: "",
    price: "",
    shorttermnext: "",
 });

 // Hook to navigate between pages
 // useNavigate is used to programmatically navigate between pages in a React Router application.
 const navigate = useNavigate();

 // Function to handle input changes and update form values
 // This function is called whenever an input field changes, updating the formValues state.
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
 };

 // Function to handle form submission
 // This function is called when the form is submitted, preventing the default form submission behavior and opening the modal.
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
 };

 // Function to close the modal
 // This function is called to close the modal, setting isModalOpen to false.
 const closeModal = () => {
    setIsModalOpen(false);
 };

 // Function to navigate back to the home page
 // This function is called to navigate back to the home page, using the navigate function from useNavigate.
 const goBackToHomePage = () => {
    navigate("/");
 };

 // JSX to render the component
 // This JSX defines the structure and appearance of the component.
 return (
    <div className="create-page-container">
      {/* Upper section of the page */}
      <div className="create-page-upper-section">
        <div className="create-page-left-side">
          <h1 className="udocx">µDocx</h1>
          <h2 className="delivery">Delivery</h2>
        </div>
        <div className="create-page-right-side">
          <p>Need help?</p>
        </div>
      </div>
      {/* Horizontal line */}
      <div className="horizontal-line"></div>
      {/* Lower section of the page */}
      <div className="create-page-lower-section">
        {/* Form to fill in deliverable variables */}
        <div className="create-page-left-side-lower">
          <h1 className="deliverable">Fill in deliverable variables</h1>
          <div className="form-group">
            <form onSubmit={handleSubmit} className="create-page-form">
              {/* Input fields for deliverable names, activities list, price, and short term next steps */}
              {/* ... */}
              {/* Submit button */}
              <div className="submit-button-container">
                <input type="submit" value="Generate" />
              </div>
            </form>
          </div>
        </div>
        {/* Image on the right side */}
        <div className="create-page-right-side-lower">
          <img src={Frame} alt="Image Description" className="create-page-img" />
        </div>
      </div>
      {/* Modal to display form values */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Display form values */}
        {/* ... */}
        {/* Close button */}
        <button onClick={closeModal}>Close</button>
      </Modal>
      {/* Back button to navigate back to the home page */}
      <div className="back-button-container">
        <button className="back-button" onClick={goBackToHomePage}>Back</button>
      </div>
    </div>
 );
};

// Export the CreatePage component
// This makes the component available for import in other parts of the application.
export default CreatePage;