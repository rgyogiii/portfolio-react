import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
     <div class="container-fluid pt-4 bg-dark">
            <div class="d-flex justify-content-center p-3 text-white">
              <p class="text-center"><span class="fw-bold font_clr">&copy;</span> 2022 <span class="fw-bold font_clr">Romar George Doinog</span>, All rights reserved.</p>
              </div>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
