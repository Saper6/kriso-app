import { useState, useEffect, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../images/logo.png";
import neondegods1 from "../../images/neonsigns/neondegods1.png";
import neony00ts1 from "../../images/neonsigns/neony00ts1.png";
import neoninserts1 from "../../images/neonsigns/neoninserts1.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
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

function NeonSigns() {
  const [cluster, setCluster] = useState("mainnet-beta");
  const [isSuccess, setIsSuccess] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  function pageNav(page) {
    navigate(page);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    gsap.from("#about", {
      scrollTrigger: {
        trigger: "#about",
        toggleActions: "restart none none none",
      },
      duration: 1,
      opacity: 0,
      y: 200,
    });
  });

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
          />
        </Link>
      </div>
      <div id="header1" className="content">
        <div className="container">
          <p className="texttop">
            LED RGB edge lit acrylic displays of your NFT Controlled via remote
            with multiple pre-programmed lighting modes
          </p>
        </div>
      </div>

      <ContentWrapper id="content1" className="content">
        <div className="container">
          <div className="row" id="keychain">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={neondegods1}
                alt="neondegods1"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">DeGods</p>
              <p className="textl">
                <ul>
                  <li>Custom LED base</li>
                  <li>
                    <div>Backlit Degods logo</div>{" "}
                  </li>
                  <li>
                    <div>
                      Removable acrylic insert - more can be bought separately
                      and swapped around using the same base
                    </div>{" "}
                  </li>
                </ul>
              </p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/degodsneon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Currently Unavailable</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        </ContentWrapper>

      <ContentWrapper id="content2" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center">
              <p className="title">y00ts</p>
              <p className="textl">
                <ul>
                  <li>Backlit y00ts logo</li>
                  <li>
                    Removable acrylic insert - more can be bought separately and
                    swapped around using the same base
                  </li>
                </ul>
              </p>
              <div className="text">
              <a
                  //href="disabled, link here"
                  //target="_blank"
                  //rel="noreferrer"
                >
                  <Button>Coming Soon</Button>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid "
                src={neony00ts1}
                alt="neony00ts1"
              ></img>
            </div>
          </div>
        </div>
        </ContentWrapper>

      <ContentWrapper id="content3" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={neoninserts1}
                alt="neoninserts1"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">Additional Acrylic Inserts</p>
              <p className="textl">
                <ul>
                  <li>Traded your NFT for another one?</li>
                  <li>
                    <div>
                      Or maybe you'd like to showcase another one from your
                      collection?
                    </div>
                  </li>
                  <li>
                    <div>
                      Choose this option if you already have the LED base
                    </div>
                  </li>
                </ul>
              </p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/neoninserts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Currently Unavailable</Button>
                </a>
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

export default NeonSigns;
