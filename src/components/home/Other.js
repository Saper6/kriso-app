import { useState, useEffect, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../images/logo.png";
import nounsglassesmain from "../../images/other/nounsglassesmain.png";
import sarvrmain from "../../images/other/sarvrmain.png";
import y00tshangermain from "../../images/other/y00tshangermain.png";
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

function Other() {
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
            A wide variety of my other creations
            <div>Some NFT related, some not</div>
            <div>
              From custom coat hangers, coffee coasters to VR accessories... and
              more
            </div>
          </p>
        </div>
      </div>

      <div id="content1" className="content">
        <div className="container">
          <div className="row" id="keychain">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={y00tshangermain}
                alt="y00tshangermain"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">y00ts Hanger</p>
              <p className="textl"></p>
              <div className="text">
                <a
                  href="https://www.hel.io/x/y00tshanger"
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
              <p className="title">Nouns Glasses</p>
              <p className="textl"></p>
              <div className="text">
              <a
                  //href=""
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
                src={nounsglassesmain}
                alt="nounsglassesmain"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div id="content3" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img className="img-fluid" src={sarvrmain} alt="sarvrmain"></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 align-self-center">
              <p className="title">Quest 2 VR controller Gun Grip</p>
              <p className="textl"></p>
              <div className="text">
              <a
                  //href=""
                  //target="_blank"
                  //rel="noreferrer"
                >
                  <Button>Coming Soon</Button>
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
              <p className="title">Have an interesting idea?</p>
              <p className="text">
                Feel free to contact me on Twitter and let's see if I can bring
                it to life, always happy to take up a new challenge!
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

export default Other;
