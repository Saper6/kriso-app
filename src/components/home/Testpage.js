import React, { useState } from "react";
import { HelioCheckout } from '@heliofi/checkout-react';

const helioConfig = {
  paylinkId: "66d084a023e9eb4fa8b3bc15",
  theme: { "themeMode": "dark" },
  primaryColor: "#F76C1B",
  neutralColor: "#E1E6EC",
};

function TestHelio() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBuyClick = () => {
    setShowCheckout(true);
  };

  return (
    <div>
      <button onClick={handleBuyClick}>Buy</button>
      {showCheckout && <HelioCheckout {...helioConfig} />}
    </div>
  );
}

export default TestHelio;