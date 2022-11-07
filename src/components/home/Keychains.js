import { useState, useEffect, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../images/logo.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
//import image4 from "../../images/image4.png";
//import image5 from "../../images/image5.png";
import footerline from "../../images/footer.png";
import "../common/Spinner.css";
import { HelioPay } from "@heliofi/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Modal } from "bootstrap";
import "@solana/wallet-adapter-react-ui/styles.css";
//section 1 imgages
import section_img1_1 from "../../images/section_img1_1.png";
import section_img1_2 from "../../images/section_img1_2.png";
//section 2 imgages
import section_img2_1 from "../../images/section_img2_1.png";
import section_img2_2 from "../../images/section_img2_2.png";
//section 3 imgages
import section_img3_1 from "../../images/section_img3_1.png";
import section_img3_2 from "../../images/section_img3_2.png";
//section 4 imgages
//import section_img4_1 from "../../images/section_img4_1.png";
//import section_img4_2 from "../../images/section_img4_2.png";
//section 5 imgages
//import section_img5_1 from "../../images/section_img5_1.png";
//import section_img5_2 from "../../images/section_img5_2.png";
import { Link } from 'react-router-dom';
import styled from "styled-components";
var imgModal;
const elemImages = {
  section1: [
    { id: 0, img: section_img1_1 },
    { id: 1, img: section_img1_2 },
  ],
  section2: [
    { id: 0, img: section_img2_1 },
    { id: 1, img: section_img2_2 },
  ],
  section3: [
    { id: 0, img: section_img3_1 },
    { id: 1, img: section_img3_2 },
  ],
};

const elemText = {
  section1:
    "",
  section2:
    "",
  section3:
    "",
};

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
  const [modalImgs, setModalImgs] = useState(elemImages["section1"]);
  const [modalText, setModalText] = useState("");
  const [paymentRequest1Id, setPaymentRequest1Id] = useState(
    "634031bc2b4b05063fde3cc1"
  );
  const [paymentRequest2Id, setPaymentRequest2Id] = useState(
    "634031cc2b4b05063fdea3b3"
  );
  const [paymentRequest3Id, setPaymentRequest3Id] = useState(
    "635431d30ffed8cd8db6d6e0"
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

  useEffect(() => {
    imgModal = new Modal("#imgModal", {
      backdrop: true,
    });
  });

  function showItem(element) {
    console.log("showItem()");
    console.log(element);
    setModalImgs(elemImages[element]);
    setModalText(elemText[element]);
    imgModal.show();
  }

  function carouselItems() {
    let items = modalImgs.map((item) => (
      <div
        className={item.id == 0 ? "carousel-item active" : "carousel-item"}
        key={item.id}
      >
        <img src={item.img} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Section</h5>
          <p>{modalText}</p>
        </div>
      </div>
    ));

    return items;
  }

 const Button = styled.button`
  background-color: #F100F5;
  color: white;
  font-size: 15px;
  padding: 25px 25px;
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

  function carouselBtns() {
    let btns = modalImgs.map((item) => (
      <Button
        key={item.id}
        type="Button"
        data-bs-target="#carouselModal"
        data-bs-slide-to={item.id}
        className={item.id == 0 ? "active" : ""}
        aria-current={item.id == 0 ? "true" : "false"}
        aria-label={`Slide ${item.id + 1}`}
      ></Button>
    ));
    return btns;
  }

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
                src={image1}
                alt="img1"
                onClick={(e) => {
                  showItem("section1");
                
                }}
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">DeGods</p>
              <p className="text">
                3D printed keychains
                <div>Multiple variations available: </div>
                <div>OG DeGods, MickeyDeGods, DeGods Anniversary</div>
                <div>Comes in a gift box</div>
            
              </p>
              <HelioPay
                cluster={cluster}
                payButtonTitle="Pay in $DUST"
                paymentRequestId={paymentRequest1Id}
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

      <div id="content2" className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="title">Liberty Square</p>
              <p className="text">
                3D printed, then filled with clear epoxy resin and hand polished for a shiny finish
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
                onClick={(e) => {
                  showItem("section2");
                }}
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
                onClick={(e) => {
                  showItem("section3");
                }}
              ></img>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 center">
              <p className="title">y00ts</p>
              <p className="text">
                3D printed base
                <div>Each letter and background carefully hand filled with different colors of epoxy resin</div>
                <div>Every keychain with a unique colour or pattern</div>
                <div>Shipped at random - mint style</div>
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
                © Kriso's Workshop 2022, All rights reserved
              </p>
              <p className="footer-sub-text">By @kevincaughman</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid" style={{ padding: 0 }}>
        <div
          className="modal fade"
          id="imgModal"
          tabIndex="-1"
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div
                id="carouselModal"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-pause="false"
              >
                <div className="carousel-indicators">{carouselBtns()}</div>
                <div className="carousel-inner">{carouselItems()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keychains;
