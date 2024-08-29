import { useState, useEffect } from "react";
import { FaTwitter, FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png";
import degodsmedplaque from "../../images/medplaques/degodsmedplaque.png";
import y00tsmedplaque from "../../images/medplaques/y00tsmedplaque.png";
import mtcmedplaque from "../../images/medplaques/mtcmedplaque.png";
import libertymedplaque from "../../images/medplaques/libertymedplaque.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Toast notification style
const toastStyle = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

// Styled components for UI elements
const Button = styled.button`
  background-color: #ff5c52;
  color: white;
  font-size: 20px;
  padding: 16px 80px;
  border-radius: 18px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;
  font-family: Trebuchet MS;
  font-weight: 800;
  transition: ease background-color 250ms;

  &:hover {
    background-color: #ff8452;
  }
`;

const ContentWrapper = styled.div`
  background: linear-gradient(45deg, #ffe5d1, #ff8452);
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FloatingCartButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #ff5c52;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  &:hover {
    background-color: #ff8452;
  }
`;

function MedPlaques() {
  const navigate = useNavigate();

  // Load cart from local storage or initialize as an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    toast.success(`${item.name} added to cart!`, toastStyle);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  // Product data with random prices for demonstration purposes
  const products = [
    { name: "DeGods/DeadGods", image: degodsmedplaque, price: 29.99 },
    { name: "y00ts", image: y00tsmedplaque, price: 24.99 },
    { name: "MetaTattooClub", image: mtcmedplaque, price: 19.99 },
    { name: "Liberty Square", image: libertymedplaque, price: 34.99 },
  ];

  return (
    <>
      <ToastContainer />

      {/* Floating Cart Button */}
      <FloatingCartButton onClick={handleCheckout}>
        <FaShoppingCart style={{ marginRight: "10px" }} />
        {cart.length} Items
      </FloatingCartButton>

      {/* Hero section with logo */}
      <div className="hero" id="home">
        <Link to="/">
          <img
            src={logo}
            id="bgHeroImage"
            className="img-fluid primary-hero"
            alt="hero-bg"
          />
        </Link>
      </div>

      {/* Header section */}
      <div id="header1" className="content">
        <div className="container">
          <p className="texttop">
            Selection of high quality, handcrafted wooden plaques of your NFT
            Medium size: 34x24cm (13.3x9.4 inch)
          </p>
        </div>
      </div>

      {/* Product display section */}
      {products.map((product, index) => (
        <ContentWrapper key={index} id={`content${index + 1}`} className="content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
                <img className="img-fluid" src={product.image} alt={product.name} />
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
                <p className="title">{product.name}</p>
                <p className="textl">Price: ${product.price.toFixed(2)}</p>
                <div className="text">
                  <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      ))}

      {/* About section */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="title">About</p>
              <p className="text">
                All items are designed and carefully crafted by myself and can be fully customized to suit your needs.
                If you have any questions, ideas, or requests, feel free to shoot me a DM anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <img
          src={footerline}
          className="img-fluid contentheader"
          alt="contentheader2-img"
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="footer-text">
                © 291crafter 2022, All rights reserved
                <a
                  className="footer-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/291crafter"
                >
                  <FaTwitter />
                </a>
              </p>
              <p className="footer-sub-text">By @kevincaughman</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MedPlaques;
