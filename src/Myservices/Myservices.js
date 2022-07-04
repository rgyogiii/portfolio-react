import React from 'react';
import PropTypes from 'prop-types';
import styles from './Myservices.module.css';

const Myservices = () => (
  <div id="services" class="container py-2">
      <div class="container py-5 my-5  px-2">
        <div
          class="p-5 m-3 bg-dark rounded-3 text-dark text-white rounded bg-opacity-50 shadow"
        >
          <h1 class="fs-3 fw-bold pb-5 font_clr">SERVICES</h1>
          <div class="col srvcs_container">

            <div class="row justify-content-around">
              <div class="col-lg-2 col-sm-4 p-2">
                <i
                  class="fa-solid fa-pen-ruler icn_size d-flex justify-content-center pt-3"
                ></i>
                <p class="text-center mt-4 fs-5">Graphic Design</p>
              </div>
              <div class="col-lg-2 col-sm-4 p-2">
                <i
                  class="fa-solid fa-laptop-code icn_size d-flex justify-content-center pt-3"
                ></i>
                <p class="text-center mt-4 fs-5">Web Development</p>
              </div>
              <div class="col-lg-2 col-sm-4 p-2">
                <i
                  class="fa-solid fa-video icn_size d-flex justify-content-center pt-3"
                ></i>
                <p class="text-center mt-4 fs-5">Video Editing</p>
              </div>
              <div class="col-lg-2 col-sm-4 p-2">
                <i
                  class="fa-solid fa-gears icn_size d-flex justify-content-center pt-3"
                ></i>
                <p class="text-center mt-4 fs-5">Quality Assurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

Myservices.propTypes = {};

Myservices.defaultProps = {};

export default Myservices;
