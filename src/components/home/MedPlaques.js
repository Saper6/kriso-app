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
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();

  // Load cart from local storage or initialize as empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    gsap.from("#bgHeroImage", { duration: 2, y: -200 });
    gsap.from("#header1", { duration: 2, y: -400 });
    gsap.from("#content1", {
      scrollTrigger: {
        trigger: "#content1",
        toggleActions: "restart none restart none",
      },
      duration: 1,
      x: -200,
    });
    gsap.from("#content2", {
      scrollTrigger: {
        trigger: "#content2",
        toggleActions: "restart none restart none",
      },
      duration: 1,
      x: 200,
    });
    gsap.from("#content3", {
      scrollTrigger: {
        trigger: "#content3",
        toggleActions: "restart none restart none",
      },
      duration: 1,
      x: -200,
    });
    gsap.from("#content4", {
      scrollTrigger: {
        trigger: "#content4",
        toggleActions: "restart none restart none",
      },
      duration: 1,
      x: 200,
    });
    gsap.from("#about", {
      scrollTrigger: {
        trigger: "#about",
        toggleActions: "restart none none none",
      },
      duration: 1,
      opacity: 0,
      y: 200,
    });
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    toast.success(`${item.name} added to cart!`, toastStyle);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  // Random prices for demonstration purposes
  const products = [
    { name: "DeGods/DeadGods", image: degodsmedplaque, price: 29.99 },
    { name: "y00ts", image: y00tsmedplaque, price: 24.99 },
    { name: "MetaTattooClub", image: mtcmedplaque, price: 19.99 },
    { name: "Liberty Square", image: libertymedplaque, price: 34.99 },
  ];

  return (
    <>
      <ToastContainer />

      <FloatingCartButton onClick={handleCheckout}>
        <FaShoppingCart style={{ marginRight: "10px" }} />
        {cart.length} Items
      </FloatingCartButton>

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

      <div id="header1" className="content">
        <div className="container">
          <p className="texttop">
            Selection of high quality, hand crafted wooden plaques of your NFT
            Medium size: 34x24cm (13.3x9.4 inch)
          </p>
        </div>
      </div>

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
