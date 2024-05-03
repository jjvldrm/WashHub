import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth } from "../backend/firebase";

export default function Header() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch((error) => console.log(error));
    };
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
                                    <Link to="/profile" className="nav-link text-white fs-5">{authUser.email}</Link>
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
        </div>
    )
}
