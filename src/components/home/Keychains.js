import { useState, useEffect, } from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../images/logo.png";
import DegodsMainPic from "../../images/keychains/DegodsMainPic.png";
import LibertySquareMainPic from "../../images/keychains/LibertySquareMainPic.png";
import y00tsMainPic from "../../images/keychains/y00tsMainPic.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Link } from 'react-router-dom';
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

function Keychains() {
  gsap.registerPlugin(ScrollTrigger);

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
  background-color: #F100F5;
  color: white;
  font-size: 15px;
  padding: 10px 100px;
  border-radius: 25px;
  border: none;
  margin: 0px 0px;
  cursor: pointer;
  font-family: Trebuchet MS;
  font-weight: 800;
  box-shadow: 4px 4px 4px #F100F5;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #e80b07;
    box-shadow: 4px 4px 4px #e80b07;
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
      <div id="content1" className="content">
        <div className="container">
          <div className="row" id="keychain">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={DegodsMainPic}
                alt="DegodsMainPic"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">DeGods</p>
              <p className="textl">
              <ul>
                <li>3D printed keychains</li>
                <li><div>Multiple variations available: </div> </li>
                <li><div>OG DeGods, MickeyDeGods, DeGods Anniversary</div> </li>
                </ul>
            
              </p>
              <div className="text">
<a href="https://www.hel.io/x/plaque30x20" target="_blank" rel="noreferrer">
        <Button>MORE DETAILS</Button>
      </a>
    </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content2" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="title">Liberty Square</p>
              <p className="textl">
              <ul>
                <li>3D printed, then filled with clear epoxy resin</li>
                <li>Hand polished for a shiny finish</li>
                </ul>
              </p>
              <div className="text">
<a href="https://www.hel.io/x/plaque30x20" target="_blank" rel="noreferrer">
        <Button>MORE DETAILS</Button>
      </a>
    </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid "
                src={LibertySquareMainPic}
                alt="LibertySquareMainPic"
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
                src={y00tsMainPic}
                alt="y00tsMainPic"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">y00ts</p>
              <p className="textl">
                <ul>
                <li>3D printed base</li>
                <li><div>Each letter and background carefully hand filled with different colors of epoxy resin</div></li>
                <li><div>Every keychain with a unique colour or pattern</div></li>
                <li><div>Shipped at random - mint style</div></li>
                </ul>
              </p>
              <div className="text">
<a href="https://www.hel.io/x/plaque30x20" target="_blank" rel="noreferrer">
        <Button>MORE DETAILS</Button>
      </a>
    </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="title">Didn't find a design you're interested in?</p>
              <p className="text">
                Feel free to contact me on Twitter and I'll be happy to craft a custom keychain just for you or your project! DM's are always open
                <a
                className="footer-icon"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Kriso3D"
                >
                  <FaTwitter />
                  </a>
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
                © Kriso's Workshop 2022, All rights reserved.
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
