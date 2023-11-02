import React from 'react';
import './css/Modal.css';

function Modal({ showModal, setShowModal, call, src, dest, car }) {
  return (
    <>
      <div className='modal-container'>
        <div>Congratulations!! Your Ride has been Booked Successfully</div>
        <div>Your Ride will be from {src} to {dest}</div>
        <div>Your Ride will take the shortest time of: {call?.distance} minutes</div>
        <div>You have to pay: Rs. {call?.distance * car}</div>
        <div>Thank You For Choosing Us</div>
        <button className='modal-btn' onClick={() => setShowModal(false)}>Close</button>
      </div>
    </>
  );
}

export default Modal;
