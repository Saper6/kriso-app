import React from "react";
import footerline from "../../images/footer.png";
import logo from "../../images/logo.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import "../common/Spinner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  return (
    <div>
      <ToastContainer />
      <div className="hero" id="home">
        <img
          src={logo}
          id="bgHeroImage"
          className="img-fluid primary-hero"
          alt="hero-bg"
        />
      </div>
      <div id="content1" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img className="img-fluid " src={image1}></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">3D Printed Keychain</p>
              <p className="text">Double-sided keychain, comes in a gift box</p>
            </div>
          </div>
        </div>
      </div>

      <div id="content2" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="title">Large Plaque with stand</p>
              <p className="text">Double-sided keychain, comes in a gift box</p>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img className="img-fluid " src={image2}></img>
            </div>
          </div>
        </div>
      </div>

      <div id="content3" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img className="img-fluid item-img" src={image3}></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">LED EDGE LIT SIGNS</p>
              <p className="text">Double-sided keychain, comes in a gift box</p>
            </div>
          </div>
        </div>
      </div>

      <div id="content4" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="title">Small Plaques</p>
              <p className="text">Double-sided keychain, comes in a gift box</p>
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img className="img-fluid item-img" src={image4}></img>
            </div>
          </div>
        </div>
      </div>

      <div id="content5" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img className="img-fluid item-img" src={image5}></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">Twitter Banner Engravings</p>
              <p className="text">Double-sided keychain, comes in a gift box</p>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="title">About me</p>
              <p className="text">
                Just a lucky degen with a passion for diy, It all started with
                some simple degods keychains I made not long after mint and gave
                away to anyone interested. To my surprise, the community
                absolutely loved it, and because of that warm welcome, I started
                experimenting with what else can I make in my little workshop to
                contribute to the project. Since then I've been constantly
                learning, improving and coming up with new gadgets to bring your
                nfts to the real world, all thanks to the encouragement received
                from amazing degods community, for which I'm forever grateful.
                Thank you all for this incredible journey, and by the looks of
                it - it's only just getting started...
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
              <p className="footer-text">© 2022 Kriso's Workshop</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
