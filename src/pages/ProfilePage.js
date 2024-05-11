import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { auth, firestore } from '../backend/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import ProfileTitle from '../components/ProfilePageComponents/ProfileTitle';

export default function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userUid = auth.currentUser.uid;

                const docRef = doc(firestore, 'users', userUid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserData(data);
                    setName(data.name);
                    setPhone(data.phone || '');
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Load user data from browser storage on initial render
    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            setUserData(storedUserData);
            setName(storedUserData.name);
            setPhone(storedUserData.phone || '');
        }
    }, []);

    // Save user data to browser storage whenever userData changes
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    const handleSave = async () => {
        try {
            const userUid = auth.currentUser.uid;
            const docRef = doc(firestore, 'users', userUid);

            await updateDoc(docRef, {
                name: name,
                phone: phone,
            });

            setUserData({
                ...userData,
                name: name,
                phone: phone,
            });

            setEditMode(false);

            console.log('User data updated successfully!');
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div>
            <div className="landingPage-bg-with-image">
                <div className="bg-black bg-opacity-10">
                    <Header />
                </div>
                <ProfileTitle />
                <hr />
            </div>
            {/* Display user data */}
            <section className='mt-5'>
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col col-lg-6 mb-4 mb-lg-0">
                            <div class="card mb-3" style={{ borderRadius: '.5rem' }}>
                                <div class="row g-0">
                                    <div class="col-md-4 gradient-custom text-center d-flex flex-column align-items-center justify-content-center"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomRightRadius: '.5rem' }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar" class="img-fluid my-3" style={{ width: '80px' }} />
                                        <h5>{userData && (editMode ? <input type="text" className="form-control text-center" style={{ width: '100px' }} value={name} onChange={(e) => setName(e.target.value)} /> : userData.name)}</h5>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body p-4">
                                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                                <h5>Information</h5>
                                                <button className="btn btn-outline-secondary mb-3" onClick={() => setEditMode(!editMode)}>Edit</button>
                                            </div>
                                            <hr class="mt-0 mb-4" />
                                            <div class="row pt-1">
                                                <div class="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p class="text-muted">{userData && userData.email}</p>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h6>Phone</h6>
                                                    {editMode ? <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} /> : <p class="text-muted">{userData && userData.phone}</p>}
                                                </div>
                                            </div>
                                            {editMode && <button className="btn btn-primary" onClick={handleSave}>Save</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
