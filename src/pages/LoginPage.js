import React, { useState } from "react";
import { auth } from "../backend/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { BiChevronLeft } from 'react-icons/bi';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShowModal(true); // Show modal error if email or password is empty
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-black vh-100 d-flex align-items-center justify-content-center">
      <div className="container rounded-4 bg-white d-flex flex-column p-4" style={{ width: '40%' }}>
        <div>
          <Link to={{pathname: '/'}} style={{textDecoration: 'none', color: 'black', fontWeight: '600'}}>
            <BiChevronLeft />Back
          </Link>

          <h2 className="text-center">WashHub</h2>
        </div>
        <form onSubmit={login}>
          <h3 className="mt-5 fw-bold text-center mb-4">Login</h3 >
          <div className="my-3 d-flex justify-content-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="text-center mt-4">
            <Button
              type="submit"
              className="my-3"
              style={{ width: '100%', padding: '5px' }}
            >
              Login
            </Button>
          </div>
        </form>

        <div className="text-center">
          Don't have an account? <Link to={{ pathname: `/register` }}>Create an Account.</Link>
        </div>
      </div>

      {/* Modal Error */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter your email and password.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginPage;
