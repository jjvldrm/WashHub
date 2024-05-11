import React, { useState } from "react";
import { auth } from "../backend/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { BiChevronLeft } from 'react-icons/bi';
import washHubLogo from '../assets/HubLogo.png';
import './LoginReg.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  const [showEmailNotExistModal, setShowEmailNotExistModal] = useState(false);
  const [showWrongPasswordModal, setShowWrongPasswordModal] = useState(false);

  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShowEmptyModal(true);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-credential") {
          console.log(error);
          setShowWrongPasswordModal(true);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="loginPage-bg-with-image vh-100 d-flex align-items-center justify-content-center">
      <div className="container rounded-4 bg-black bg-opacity-75 text-white d-flex flex-column p-4" style={{ maxWidth: '600px' }}>
        <div>
          <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>
            <BiChevronLeft />Back
          </Link>

          <div className="logo-container">

            <img className='logo1' src={washHubLogo} /> 

          </div>

        </div>
        <form onSubmit={login}>
          <h3 className="login mt-4 fw-medium text-center mb-4">Login</h3 >
          <div className="my-3 d-flex justify-content-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '400px', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '400px', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="text-center mt-4">
            <Button
              type="submit"
              className="my-3"
              style={{ width: '50%', padding: '8px' }}
            >
              Login
            </Button>
          </div>
        </form>

        <div className="text-center mt-3">
          Don't have an account? <Link to={{ pathname: `/register` }}>Create an Account.</Link>
        </div>
      </div>

      {/* Modal Error for Empty Fields */}
      <Modal show={showEmptyModal} onHide={() => setShowEmptyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter your email and password.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEmptyModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Error for Wrong Password */}
      <Modal show={showWrongPasswordModal} onHide={() => setShowWrongPasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invalid email or password.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowWrongPasswordModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginPage;