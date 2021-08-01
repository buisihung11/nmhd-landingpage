import React from 'react';
import { useGlobal } from '../../services/global';

import './index.css';

const PhoneRing = () => {
  const { globalState } = useGlobal();

  console.log(`globalState`, globalState);
  const { providerPhone1 = '0915428829' } = globalState || {};
  return (
    <div
      class="phonering-alo-phone phonering-alo-green phonering-alo-show"
      id="phonering-alo-phoneIcon"
    >
      <div class="phonering-alo-ph-circle"></div>
      <div class="phonering-alo-ph-circle-fill"></div>
      <a href={`tel:${providerPhone1}`} class="pps-btn-img" title="Liên hệ">
        <div class="phonering-alo-ph-img-circle"></div>
      </a>
    </div>
  );
};

export default PhoneRing;
