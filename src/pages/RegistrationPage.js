import React, { useState } from "react";
import { auth, firestore } from "../backend/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import washHubLogo from '../assets/HubLogo.png';
import './LoginReg.css';

const RegistrationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showEmptyFieldModal, setShowEmptyFieldModal] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  const register = async (e) => {
    e.preventDefault();
    if (!email || !username || !password || !confirmPassword) {
      setShowEmptyFieldModal(true);
      return;
    }
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    // Check if user already exists with the same email
    const userQuery = query(collection(firestore, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);
    if (!querySnapshot.empty) {
      // User already exists
      setShowModal(true);
      setModalMessage("User with this email already exists.");
      return;
    }

    // If user doesn't exist, proceed with user creation
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      const userDocRef = doc(firestore, "users", userId);
      await setDoc(userDocRef, {
        name: username,
        email: email,
        // Add any other user data fields here
      });
      console.log("User registered successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginPage-bg-with-image vh-100 d-flex align-items-center justify-content-center">
      <div className="container rounded-4 bg-black bg-opacity-75 text-white d-flex flex-column p-4" style={{ maxWidth: '600px' }}>
        <div className="logo-container">
          
          <img className='logo1' src={washHubLogo} /> 

        </div>
        <form onSubmit={register}>
          <h3 className="mt-4 fw-bold text-center mb-4">Creating an Account</h3 >
          <div className="my-3 d-flex justify-content-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '400px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="my-3 d-flex justify-content-center">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '400px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '400px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="d-flex justify-content-center mt-3">
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: '400px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="text-center mt-3">
            <Button
              type="submit"
              className="my-3"
              style={{ width: '70%', padding: '5px' }}
            >
              Register
            </Button>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <Link to={{ pathname: `/login` }}>Log into an Account.</Link>
        </div>
      </div>

      {/* Information Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Empty Field */}
      <Modal show={showEmptyFieldModal} onHide={() => setShowEmptyFieldModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Empty Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in all fields.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEmptyFieldModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Password Mismatch */}
      <Modal show={passwordMismatch} onHide={() => setPasswordMismatch(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Password Mismatch</Modal.Title>
        </Modal.Header>
        <Modal.Body>The password and confirm password do not match. Please try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setPasswordMismatch(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegistrationPage;
