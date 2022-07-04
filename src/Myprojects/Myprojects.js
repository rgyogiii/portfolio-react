import React from 'react';
import PropTypes from 'prop-types';
import styles from './Myprojects.module.css';
import hmtlimg from './html.png';
import cssimg from './css.png';
import bootstrapimg from './bootstrap.svg';
import imgaboutme from './aboutme.png';
import imgecommerce from './ecommerce.png';
import imgportfolio from './portfolio.png';

const Myprojects = () => (
  <div id="project" class="container-fluid py-5 mt-5 bg-dark bg-opacity-50 text-dark text-white" >
      <div class="container mt-4 pt-3 px-2 ">
        <div
          class="p-5 m-3"
        >
          <h1 class="fs-3 fw-bold font_clr">PROJECTS</h1>
          <div class="row justify-content-between p-3">
            <div
              class="col-12 col-md-6 col-xl-4 mb-4 d-flex justify-content-center"
            >
              <a href="#">
                <div class="d-flex flex-column crd_cntainer p-1">
                  <div class="d-flex justify-content-center">
                    <p class="mt-3 fs-5 fw-bold">About Me! page</p>
                  </div>
                  <img src={imgaboutme} class="img_size mb-3" />
                  <div class="d-flex justify-content-start">
                    <img src={hmtlimg} class="prgm_lang" />
                    <img src={cssimg} class="prgm_lang mx-1" />
                    <img src={bootstrapimg} class="prgm_langbt" />
                  </div></div
              ></a>
            </div>

            <div
              class="col-12 col-md-6 col-xl-4 mb-4 d-flex justify-content-center"
            >
              <a href="#">
                <div class="d-flex flex-column crd_cntainer p-1">
                  <div class="d-flex justify-content-center">
                    <p class="mt-3 fs-5 fw-bold">
                      My First e-commerce website
                    </p>
                  </div>
                  <img src={imgecommerce} class="img_size mb-3" />
                  <div class="d-flex justify-content-start">
                    <img src={hmtlimg} class="prgm_lang" />
                    <img src={cssimg} class="prgm_lang mx-1" />
                    <img src={bootstrapimg} class="prgm_langbt" />
                  </div></div
              ></a>
            </div>

            <div
              class="col-12 col-md-6 col-xl-4 mb-4 d-flex justify-content-center"
            >
              <a href="#home">
                <div class="d-flex flex-column crd_cntainer p-1">
                  <div class="d-flex justify-content-center">
                    <p class="mt-3 fs-5 fw-bold">My Portfolio Page</p>
                  </div>
                  <img src={imgportfolio} class="img_size mb-3" />
                  <div class="d-flex justify-content-start">
                    <img src={hmtlimg} class="prgm_lang" />
                    <img src={cssimg} class="prgm_lang mx-1" />
                    <img src={bootstrapimg} class="prgm_langbt" />
                  </div></div
              ></a>
            </div>
          </div>
        </div>
        
      </div>
      <div class="container" id="contact">
        <div class="container mt-4 py-5">
          <div
            class="p-5 bg-dark rounded-3 text-dark shadow text-white rounded"
          >
            <h1 class="fs-2 fw-bold pb-5 font_clr">
              Contact
            </h1>

            
            <div class="row">

              <div class="col-lg-3 col-sm-6 d-flex">
                  <i class="fa-brands fa-github-square mx-2 icn_cntct"></i
                  ><p class="fs-5"><a href="#"><span>georgeromarrr</span></a>
                  </p>
              </div>
              
              <div class="col-lg-3 ol-sm-6 d-flex">
                  <i class="fa-brands fa-linkedin mx-2 icn_cntct"></i
                  ><p class="fs-5"><a
                    href=#"
                    ><span
                      >Romar George Doinog</span
                    ></a>
                  </p>
              </div>

              <div class="col-lg-3 col-sm-6 d-flex">
                  <i class="fa-solid fa-square-phone mx-2 icn_cntct"></i
                  ><p class="fs-5">+63 912-124-0805
                  </p>
              </div>

              <div class="col-lg-3 col-sm-6 d-flex">
                  <i class="fa-solid fa-envelope mx-2 icn_cntct-email"></i
                  >
                  <p class="fs-5">romar.doinog@gmail.com</p>
              </div>
                
            </div>


            </div>
          </div>
        </div>
    </div>
);

Myprojects.propTypes = {};

Myprojects.defaultProps = {};

export default Myprojects;
