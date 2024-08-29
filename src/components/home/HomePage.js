import { useState, useEffect } from "react";
import { FaTwitter, FaArrowUp, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import logo from "../../images/logo.png";
import HomeKeychains from "../../images/HomePage/HomeKeychains.png";
import Home3020Plaques from "../../images/HomePage/Home3020Plaques.png";
import HomeSmallPlaques from "../../images/HomePage/HomeSmallPlaques.png";
import HomeNeon from "../../images/HomePage/HomeNeon.png";
import HomeOther from "../../images/HomePage/HomeOther.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import "react-toastify/dist/ReactToastify.css";
import "@solana/wallet-adapter-react-ui/styles.css";

// Styled components for UI
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #ff8452;
  }
`;

const ScrollToTopArrow = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff5c52;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms ease;

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

function HomePage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  function pageNav(page) {
    navigate(page);
  }

  // Show "Scroll to Top" button only when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Persist cart state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    toast.success(`${item.name} added to cart!`, toastStyle);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ToastContainer {...toastStyle} />

      {/* Floating Cart Button */}
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
            style={{ maxHeight: '300px', maxWidth: '100%' }}
          />
        </Link>
      </div>

      <ContentWrapper id="content1" className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img className="img-fluid" src={HomeKeychains} alt="HomeKeychains" />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column align-items-center justify-content-center">
              <p className="title">Keychains</p>
              <div className="text">
                <Button onClick={() => pageNav("/home/Keychains")}>VIEW ALL</Button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper id="content2" className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <p className="title">A4 prints and engravings</p>
              <div className="text d-flex justify-content-center">
                <Button onClick={() => pageNav("/home/MedPlaques")}>VIEW ALL</Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img className="img-fluid" src={Home3020Plaques} alt="Home3020Plaques" />
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper id="content3" className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img className="img-fluid item-img" src={HomeSmallPlaques} alt="HomeSmallPlaques" />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column align-items-center justify-content-center">
              <p className="title">A5 prints and engravings</p>
              <div className="text">
                <Button onClick={() => pageNav("/home/SmallPlaques")}>VIEW ALL</Button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper id="content4" className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <p className="title">LED Edge Lit Signs</p>
              <div className="text">
                <Button onClick={() => pageNav("/home/NeonSigns")}>VIEW ALL</Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img className="img-fluid item-img" src={HomeNeon} alt="HomeNeon" />
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper id="content5" className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img className="img-fluid item-img" src={HomeOther} alt="HomeOther" />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column align-items-center justify-content-center">
              <p className="title">Other Accessories</p>
              <div className="text">
                <Button onClick={() => pageNav("/home/Other")}>VIEW ALL</Button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>

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

      {showScrollToTop && (
        <ScrollToTopArrow onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTopArrow>
      )}
    </>
  );
}

export default HomePage;
