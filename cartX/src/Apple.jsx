import "./App.css";
import Second, { Img } from "./secapp.jsx";
import Footer from "./Footer.jsx";

function Middle() {
  return (
    <>
      
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div>
                <h5 className="heading">From Discovery to Delivery</h5>
                <h1 className="onehead">
                  Cart.com is Unified <br /> Commerce
                </h1>
                <p className="para">
                  Cart.com is the leading provider of unified commerce and
                  logistics solutions that enable B2C and B2B companies to sell
                  and fulfill anywhere their customers
                  <br /> <br />
                  Our interconnected suite of software and services powers
                  cross-channel commerce operations from listing to sale to
                  fulfillment for some of the world's most beloved brands and
                  most demanding organizations.
                  <br />
                  <br />
                  By unifying the digital and physical aspects of commerce
                  across channels, Cart.com is transforming how merchants sell
                  and how people buy.
                </p>
              </div>
            </div>

            <div className="col-5">
              <div>
                <img
                  src="	https://cart.com/hubfs/cart-about-hero.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Second />
      <Img />
      <Footer />
    </>
  );
}
export default Middle;
