import React, { useState } from 'react';
import HelioCheckout from '@heliofi/checkout-react';

const helioConfig = {
  paylinkId: "66d084a023e9eb4fa8b3bc15",
  theme: {"themeMode":"dark"},
  primaryColor: "#F76C1B",
  neutralColor: "#E1E6EC",
};

function Helio1() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleClick = () => {
    setShowCheckout(true); // Toggle the checkout component visibility
  };

  return (
    <div className="text">
      {showCheckout ? (
        <HelioCheckout config={helioConfig} />
      ) : (
        <Button onClick={handleClick}>MORE DETAILS</Button>
      )}
    </div>
  );
}

export default Helio1;
