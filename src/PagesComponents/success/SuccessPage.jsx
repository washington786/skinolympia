import React, { useEffect, useState } from 'react';

import "./styles.css";

const SuccessPage = () => {
  const [signature, setSignature] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    const signatureIndex = currentUrl.lastIndexOf('#wf') + 3;
    const currentSignature = currentUrl.slice(signatureIndex);
    setSignature(currentSignature);
  }, []);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default SuccessPage;