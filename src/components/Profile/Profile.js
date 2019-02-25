import React from 'react';
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal }) => {
    return (
        <div className='profile-modal'>
            <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-gray">
            <main className="pa4 white-80 w-80">
                <img
                    src="http://tachyons.io/img/logo.jpg"
                    className="h3 w3 dib" alt="avatar" />
                <h1>John Doe</h1>
                <h4>Images Submitted: 5</h4>
                <p>Member Since: January</p>
                <hr />
                <label className='mt2 fw6' htmlFor="user-name">Name:</label>
                    <input className="pa2 ba w-100" placeholder="john" type="text" name="user-name"  id="name" />
                <label className='mt2 fw6' htmlFor="user-age">Age:</label>
                    <input className="pa2 ba w-100" placeholder="56" type="text" name="user-age"  id="age" />
                <label className='mt2 fw6' htmlFor="user-email">Email:</label>
                    <input className="pa2 ba w-100" placeholder="email" type="text" name="user-email"  id="email" />
                <div className="mt4" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <button className="b pa2 grow pointer hover-white w-40 bg-dark-gray b--white-20 white">Save</button>
                    <button className="b pa2 grow pointer hover-white w-40 bg-dark-gray b--white-20 white"
                        onClick={toggleModal}>
                        Cancel
                    </button>
                </div>  
            </main>
            <div className='modal-close' onClick={toggleModal}>&times;</div>
            </article>
        </div>
    )}

export default Profile;