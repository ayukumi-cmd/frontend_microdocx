// Import React for creating functional components
import React from 'react';

// Import local CSS file for styling
// This file contains styles specific to the Modal component.
import "./Modal.css";

// Define the interface for the Modal component's props
// This interface describes the shape of the data passed to the Modal component.
interface ModalProps {
 // isOpen: A boolean indicating whether the modal is open or not.
 isOpen: boolean;
 // onClose: A function to be called when the modal should be closed.
 onClose: () => void;
 // children: The content to be displayed inside the modal.
 children: React.ReactNode;
}

// Define the Modal component as a functional component
// This component is responsible for rendering a modal window.
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
 // If isOpen is false, return null to not render the modal
 if (!isOpen) return null;

 // Return the modal JSX structure
 return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
 );
};

// Export the Modal component
// This makes the component available for import in other parts of the application.
export default Modal;