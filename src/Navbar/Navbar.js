import React from 'react';
import logo from './logo.png';

const Navbar = () => (


  // <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg fixed-top d-flex flex-column bg-dark"
    >
      {/* <!-- Navbar --> */}
      <div class="container py-1">
         <a class="navbar-brand" href="index.html">
           <img src={logo} height="50" />
        </a>


        {/* <!-- Navigation --> */}
        <div class="list-group list-group-horizontal pt-2">
         <a
          href="#about-me"
          class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
          >ABOUT ME</a
        >
          <a
            href="#services"
            class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
            >SERVICES</a
          >
          <a
            href="#project"
            class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
            >PROJECT</a
          >
          <a
            href="#contact"
            class="list-group-item px-4 border-0 bg-dark nvbar_fnt fw-bold"
            >CONTACT</a
          >
        </div>
      </div>
    </nav>
);

export default Navbar;
