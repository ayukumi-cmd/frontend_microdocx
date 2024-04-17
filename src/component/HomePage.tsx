// Import necessary React hooks and components
// React: The core library for building user interfaces in React.
// useState: A hook that lets you add React state to function components.
// useEffect: A hook that lets you perform side effects in function components.
import React, { useState, useEffect } from "react";

// Import local CSS file for styling
// This file contains styles specific to the HomePage component.
import "./HomePage.css";

// Import images to be used in the component
// These images are displayed as part of the component's UI.
import templateLogo from "../template-logo.png";
import avatarIcon from "../Ellipse2.png";
import word from "../word.png";
import power from "../power.png";

// Define the interface for content items
// This interface describes the shape of the data for each content item.
interface ContentItem {
 id: number;
 name: string;
 ispower: boolean;
 createdDate: string;
 avatarLogo: string;
}

// Define the HomePage component as a functional component
const HomePage: React.FC = () => {
 // State to manage the list of folder items
 // useState is used to create a state variable and a function to update it.
 const [folderItems, setFolderItems] = useState<ContentItem[]>([]);

 // useEffect hook to fetch data when the component mounts
 // This hook is used to perform side effects, such as data fetching, in function components.
 useEffect(() => {
    fetch("http://localhost:3001/api/content")
      .then((response) => response.json())
      .then((data) => setFolderItems(data));
 }, []);

 // JSX to render the component
 // This JSX defines the structure and appearance of the component.
 return (
    <div className="homepage-container">
      <div className="left-side">
        <div className="logo-container">
          <div className="logo">µDocx</div>
          <div className="sub-text">
            <img src={templateLogo} alt="Template Logo" className="template-logo" />
            Templates
          </div>
        </div>
        <div className="user-info">
          <img src={avatarIcon} alt="Avatar" className="avatar-icon" />
          <span className="user-name">Nicolas Fry</span>
        </div>
      </div>

      <div className="right-side">
        <div className="folder-list">
          <div className="folder-header">
            <span className="content-name">Content Name</span>
            <span className="created-date">Created Date</span>
            <span className="avatar-logo">Created by</span>
          </div>
          {folderItems.map((item) => (
            <div key={item.id} className="folder-item">
              <img src={item.ispower? word : power} alt={item.ispower ? "Folder Icon" : "Document Icon"} className="icon" />
              <span className="content-name">{item.name}</span>
              <span className="created-date">{item.createdDate}</span>
              <span className="avatar-logo">{item.avatarLogo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
};

// Export the HomePage component
// This makes the component available for import in other parts of the application.
export default HomePage;