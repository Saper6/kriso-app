import { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../images/logo.png";
import DegodsMainPic from "../../images/keychains/DegodsMainPic.png";
import LibertySquareMainPic from "../../images/keychains/LibertySquareMainPic.png";
import y00tsMainPic from "../../images/keychains/y00tsMainPic.png";
import n00unskeychains from "../../images/keychains/n00unskeychains.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {HelioCheckout} from '@heliofi/checkout-react'

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


const helioConfig = {
  paylinkId: "66d084a023e9eb4fa8b3bc15",
  theme: {"themeMode":"dark"},
  primaryColor: "#F76C1B",
  neutralColor: "#E1E6EC",
};

function YourCheckoutComponent() {
return <HelioCheckout config={helioConfig} />;
}

function handleClick() {
  // Render or trigger the checkout component
  return YourCheckoutComponent();
}

      
function Keychains() {
  gsap.registerPlugin(ScrollTrigger);

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
          <p className="texttop">Selection of handcrafted, custom keychains</p>
        </div>
      </div>

      <ContentWrapper id="content1" className="content">
        <div className="container">
          <div className="row" id="keychain">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={DegodsMainPic}
                alt="DegodsMainPic"
              />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">DeGods</p>
              <p className="textl">
                <ul>
                  <li>3D printed keychains</li>
                  <li>
                    <div>Multiple variations available: </div>
                  </li>
                  <li>
                    <div>OG DeGods, MickeyDeGods, DeGods Anniversary</div>
                  </li>
                </ul>
              </p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/degodskeychains"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>BUY</Button>
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
              <p className="title">Liberty Square</p>
              <p className="textl">
                <ul>
                  <li>3D printed, then filled with clear epoxy resin</li>
                  <li>Hand polished for a shiny finish</li>
                </ul>
              </p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/libertykeychain"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Currently Unavailable</Button>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid "
                src={LibertySquareMainPic}
                alt="LibertySquareMainPic"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper id="content3" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid item-img"
                src={y00tsMainPic}
                alt="y00tsMainPic"
              />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">y00ts</p>
              <p className="textl">
                <ul>
                  <li>3D printed base</li>
                  <li>
                    <div>
                      Each letter and background carefully hand filled with
                      different colors of epoxy resin
                    </div>
                  </li>
                  <li>
                    <div>Every keychain with a unique colour or pattern</div>
                  </li>
                  <li>
                    <div>Shipped at random - mint style</div>
                  </li>
                </ul>
              </p>
              <div className="text">
      <Button onClick={handleClick}>BUY</Button>
    </div>
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper id="content4" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center">
              <p className="title">n00uns</p>
              <p className="textl">
                <ul>
                  <li>3D printed keychains</li>
                  <li>Rep the fastest growing y00ts club IRL!</li>
                </ul>
              </p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/n00unchains"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>MORE DETAILS</Button>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid "
                src={n00unskeychains}
                alt="n00unskeychains"
              />
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
    </>
  );
}

export default Keychains;
