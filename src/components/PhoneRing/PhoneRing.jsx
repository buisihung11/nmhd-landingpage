import React from 'react';

import './index.css';

const PhoneRing = () => {
  return (
    <div
      class="phonering-alo-phone phonering-alo-green phonering-alo-show"
      id="phonering-alo-phoneIcon"
    >
      <div class="phonering-alo-ph-circle"></div>
      <div class="phonering-alo-ph-circle-fill"></div>
      <a href="tel:+842973846205" class="pps-btn-img" title="Liên hệ">
        <div class="phonering-alo-ph-img-circle"></div>
      </a>
    </div>
  );
};

export default PhoneRing;
