import { useState, useEffect, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../images/logo.png";
import HomeKeychains from "../../images/HomePage/HomeKeychains.png";
import Home3020Plaques from "../../images/HomePage/Home3020Plaques.png";
import HomeSmallPlaques from "../../images/HomePage/HomeSmallPlaques.png";
import HomeNeon from "../../images/HomePage/HomeNeon.png";
import HomeOther from "../../images/HomePage/HomeOther.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useScrollPosition } from "react-use-scroll-position";

const Button = styled.button`
  background-color: #ff5c52;
  color: white;
  font-size: 30px;
  padding: 20px 120px;
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
  const [cluster, setCluster] = useState("mainnet-beta");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();

  function pageNav(page) {
    navigate(page);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isScrollingDown = currPos.y > prevPos.y;
      setIsButtonVisible(isScrollingDown);
    },
    [isButtonVisible]
  );
  
  useEffect(() => {
    gsap.from("#bgHeroImage", { duration: 2, y: -200 });
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
    gsap.from("#content5", {
      scrollTrigger: {
        trigger: "#content5",
        toggleActions: "restart none restart none",
      },
      duration: 1,
      x: -200,
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


  return (
    <>

      <ToastContainer />
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
      <div id="header1" className="content">
        <div className="container">
        </div>
      </div>
      <div></div>
      <div id="content1" className="content">
        <div className="container">
          <div className="row" id="keychain">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={HomeKeychains}
                alt="HomeKeychains"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column align-items-center justify-content-center">
              <p className="title">Keychains</p>

              <div className="text">
                <Button
                  onClick={(e) => {
                    return pageNav("/home/Keychains");
                  }}
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content2" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-start">
              <p className="title">Personalized Wooden Plaques - 30x20cm</p>

              <div className="text">
                <Button
                  onClick={(e) => {
                    return pageNav("/home/MedPlaques");
                  }}
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid "
                src={Home3020Plaques}
                alt="Home3020Plaques"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div id="content3" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid item-img"
                src={HomeSmallPlaques}
                alt="HomeSmallPlaques"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column align-items-center justify-content-center">
              <p className="title">Small Wooden Plaques - 13x17cm</p>

              <div className="text">
                <Button
                  onClick={(e) => {
                    return pageNav("/home/SmallPlaques");
                  }}
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content4" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="title">LED Edge Lit Signs</p>

              <div className="text">
                <Button
                  onClick={(e) => {
                    return pageNav("/home/NeonSigns");
                  }}
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid item-img"
                src={HomeNeon}
                alt="HomeNeon"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div id="content5" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid item-img"
                src={HomeOther}
                alt="HomeOther"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column align-items-center justify-content-center">
              <p className="title">Other Gadgets</p>

              <div className="text">
                <Button
                  onClick={(e) => {
                    return pageNav("/home/Other");
                  }}
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="title">About</p>
              <p className="text">
                <div>
                  All items are designed and carefully crafted by myself and can
                  be fully customized to suit your needs
                </div>
                <div>
                  If you have any questions, ideas or requests - feel
                  free to shoot me a DM anytime
                </div>
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

export default HomePage;
