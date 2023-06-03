import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff5c52;
  color: white;
  border: none;
  cursor: pointer;
  display: ${({ show }) => (show ? "block" : "none")};
  transition: opacity 0.3s;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when scrolling beyond 300px from the top
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button show={isVisible} onClick={scrollToTop}>
      <FaArrowCircleUp size={30} />
    </Button>
  );
};

export default ScrollToTopButton;
