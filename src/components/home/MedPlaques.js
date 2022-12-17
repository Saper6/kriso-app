import { useState, useEffect, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
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
import { Link } from "react-router-dom";
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

function MedPlaques() {
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
    background-color: #f100f5;
    color: white;
    font-size: 15px;
    padding: 10px 100px;
    border-radius: 25px;
    border: none;
    margin: 0px 0px;
    cursor: pointer;
    font-family: Trebuchet MS;
    font-weight: 800;
    box-shadow: 4px 4px 4px #f100f5;
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
      <div id="header1" className="content">
        <div className="container">
          <p className="texttop">
            Selection of high quality, hand crafted wooden plaques of your NFT
            Medium size: 34x24cm (13.3x9.4 inch)
          </p>
        </div>
      </div>

      <div id="content1" className="content">
        <div className="container">
          <div className="row" id="keychain">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={degodsmedplaque}
                alt="degodsmedplaque"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">DeGods/DeadGods</p>
              <p className="textl"></p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/degodsmedplaque"
                  target="_blank"
                  rel="noreferrer"
                >
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
            <div className="col-12 col-lg-6 align-self-center">
              <p className="title">y00ts</p>
              <p className="textl"></p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/y00tsmedplaque"
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
                src={y00tsmedplaque}
                alt="y00tsmedplaque"
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
                className="img-fluid"
                src={mtcmedplaque}
                alt="mtcmedplaque"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">MetaTattooClub</p>
              <p className="textl"></p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/mtcmedplaque"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>MORE DETAILS</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content4" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center">
              <p className="title">Liberty Square</p>
              <p className="textl"></p>
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
                src={libertymedplaque}
                alt="libertymedplaque"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="title">
                Didn't find a design you're interested in?
              </p>
              <p className="text">
                Feel free to contact me on Twitter and I'll be happy to craft a
                custom plaque just for you or your project! DM's are always
                open!
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
                © Kriso's Workshop 2022, All rights reserved
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
