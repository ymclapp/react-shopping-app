import React from 'react';
// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBContainer,
//   MDBIcon
// } from 'mdb-react-ui-kit';

import './Header.css';

export default function Header() {
  return (
    <header>
      <div
        className='p-5 text-center bg-img'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>American Thoracic Society</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}