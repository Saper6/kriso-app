import React from "react";
import Spinner from "src\components\common\Spinner.js";
import "./LoadingScreen.css"; // Import the CSS file for styling

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Spinner />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
