import { useState, useEffect, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../images/logo.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import { HelioPay } from "@heliofi/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#F100F5",
    hover: "#e80b07"
  }
};

const Button = styled.button`
  background-color: #F100F5;
  color: white;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 4px 4px #F100F5;
  transition: ease background-color 250ms;
  lineHeight: 21;
  fontWeight: 'bold';
  letterSpacing: 0.25;
  &:hover {
    background-color: #e80b07;
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
  const [paymentRequest1Id, setPaymentRequest1Id] = useState(
    "634031bc2b4b05063fde3cc1"
  );
  const [paymentRequest2Id, setPaymentRequest2Id] = useState(
    "634031cc2b4b05063fdea3b3"
  );
  const [paymentRequest3Id, setPaymentRequest3Id] = useState(
    "635431d30ffed8cd8db6d6e0"
  );
  const [paymentRequest4Id, setPaymentRequest4Id] = useState(
    "634031c92b4b05063fde9249"
  );
  const [paymentRequest5Id, setPaymentRequest5Id] = useState(
    "634031c92b4b05063fde92c5"
  );
  const [cluster, setCluster] = useState("mainnet-beta");
  const [isSuccess, setIsSuccess] = useState(false);
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
  });

  function SuccessPayment(event) {
    console.log("onSuccess", event);
    toast.success(event.content, toastStyle);
  }

  function PendingPayment(event) {
    console.log("onPending", event);
    toast.info(`Pending transaction: ${event.transaction}`, toastStyle);
  }

  function ErrorPayment(event) {
    console.log("onError", event);
    toast.error(event.errorMessage, toastStyle);
  }

  return (
    <>
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
          <div className="row" id="keychain">
            <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-end">
              <img
                className="img-fluid"
                src={image1}
                alt="img1"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">Custom Keychains</p>
              <p className="text">
                High quality keychains in a gift box. Rep your favourite NFT project IRL
              </p>
          <div>
      <Link to="/home/Keychains">
        <Button>VIEW ALL</Button>
      </Link>
    </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content2" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="title">Large Plaque With Stand</p>
              <p className="text">
                30x20cm (12x8 inch), included stand and two swappable magnetic
                tokens.
              </p>
              <HelioPay
                cluster={cluster}
                payButtonTitle="Pay in $Dust"
                paymentRequestId={paymentRequest2Id}
                // supportedCurrencies={["SOL"]}
                // totalAmount={0.01}
                onSuccess={(e) => {
                  SuccessPayment(e);
                }}
                onError={(e) => {
                  ErrorPayment(e);
                }}
                onPending={(e) => {
                  PendingPayment(e);
                }}
                theme={{
                  colors: {
                    primary: "#F100F5",
                  },
                }}
                
              />
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid "
                src={image2}
                alt="img2"
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
                src={image3}
                alt="img3"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">LED EDGE LIT SIGNS</p>
              <p className="text">
                Custom RGB neon sign of your NFT, controlled with a wireless
                remote.
              </p>
              <HelioPay
                cluster={cluster}
                payButtonTitle="Pay in $Dust"
                paymentRequestId={paymentRequest3Id}
                // supportedCurrencies={["SOL"]}
                // totalAmount={0.01}
                onSuccess={(e) => {
                  SuccessPayment(e);
                }}
                onError={(e) => {
                  ErrorPayment(e);
                }}
                onPending={(e) => {
                  PendingPayment(e);
                }}
                theme={{
                  colors: {
                    primary: "#F100F5",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="content4" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="title">Small Plaques</p>
              <p className="text">
                Description: 15x10cm (5.9x3.9 inch), engraved into 5mm thick
                birch wood.
              </p>
              <HelioPay
                cluster={cluster}
                payButtonTitle="Pay in $Dust"
                paymentRequestId={paymentRequest4Id}
                // supportedCurrencies={["SOL"]}
                // totalAmount={0.01}
                onSuccess={(e) => {
                  SuccessPayment(e);
                }}
                onError={(e) => {
                  ErrorPayment(e);
                }}
                onPending={(e) => {
                  PendingPayment(e);
                }}
                theme={{
                  colors: {
                    primary: "#F100F5",
                  },
                }}
              />
            </div>
            <div className="col-12 col-lg-6 align-self-start">
              <img
                className="img-fluid item-img"
                src={image4}
                alt="img4"
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
                src={image5}
                alt="img5"
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">Twitter Banner Engravings</p>
              <p className="text">
                80x30cm (31x12 inch), perfect for a twitter banner, but any
                picture in simillar format will work.
              </p>
              <HelioPay
                cluster={cluster}
                payButtonTitle="Pay in $Dust"
                paymentRequestId={paymentRequest5Id}
                // supportedCurrencies={["SOL"]}
                // totalAmount={0.01}
                onSuccess={(e) => {
                  SuccessPayment(e);
                }}
                onError={(e) => {
                  ErrorPayment(e);
                }}
                onPending={(e) => {
                  PendingPayment(e);
                }}
                theme={{
                  colors: {
                    primary: "#F100F5",
                  },
                }}
              />
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
              <p className="footer-text">
                © Kriso's Workshop 2022, All rights reserved
                <a
                  className="footer-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Kriso3D"
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
