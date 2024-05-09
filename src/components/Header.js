import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth, firestore } from "../backend/firebase";
import { Modal, Button } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";

const SignOutConfirmationModal = ({ show, onHide, onConfirm }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default function Header() {
    const [authUser, setAuthUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setAuthUser(user);

                try {
                    const userDocRef = doc(firestore, "users", user.uid);
                    
                    const docSnapshot = await getDoc(userDocRef);
                    console.log("Document Snapshot:", docSnapshot.data()); // Log the document snapshot
                    if (docSnapshot.exists()) {
                        const userData = docSnapshot.data();
                        setAuthUser(prevState => ({ ...prevState, name: userData.name }));
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.log("Error getting document:", error);
                }
            } else {
                setAuthUser(null);
            }
        });

        return unsubscribe;
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                handleHideModal();
                console.log("Sign out successful");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleShowModal = () => setShowModal(true);
    const handleHideModal = () => setShowModal(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light px-5">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white fs-2">WashHub</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white fs-5">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link text-white fs-5">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-white fs-5">About</Link>
                            </li>
                            {authUser ? (
                                <li className="nav-item">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white fs-5 fw-normal" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {authUser.name}
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                            <Link to="/profile" className="nav-link text-white fs-6"><li><a className="dropdown-item">Profile</a></li></Link>
                                            <Link to="/booking" className="nav-link text-white fs-6"><li><a className="dropdown-item">Booking</a></li></Link>
                                            <Link onClick={handleShowModal} className="nav-link text-white fs-6"><li><a className="dropdown-item">Logout</a></li></Link>
                                        </ul>
                                    </li>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-white fs-5">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <SignOutConfirmationModal
                show={showModal}
                onHide={handleHideModal}
                onConfirm={handleSignOut}
            />
        </div>
    )
}
