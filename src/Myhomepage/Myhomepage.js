import React from 'react';
import PropTypes from 'prop-types';
import styles from './Myhomepage.module.css';

const Myhomepage = () => (
  <div class="container-fluid text-white bg-header"  id='home'>
      <div class="d-flex justify-content-start titleheader" className={styles.headertitle}>

          <div class="container py-5 px-5">
            <span class="fs-4 fw-bold">Hi there,</span>
            <h1 class="display-4 fw-bold pe-2">
              I'm <span class="font_clr">Romar George Doinog</span>,
            </h1>
            <p class="fs-4 w-50">
              a wholesome
              <span class="fw-bold font_clr"> Manual QA</span> and a
              <span class="fw-bold font_clr"> Full-Stack Web Developer </span>
              that will help you on anything.
            </p>
          </div>

      </div>
    </div>
);

Myhomepage.propTypes = {};

Myhomepage.defaultProps = {};

export default Myhomepage;
