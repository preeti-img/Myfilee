import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="fulllength">
        <div className="row">
          <div className="col">
            <div className="form">
              <div className="img">
                <img
                  width={112}
                  height={42}
                  src="https://storage.googleapis.com/cart-branding-public/auth0/cart-logo.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="head">
                <h1>Log in</h1>
                <p>
                  Need a Cart.com account? <a href="#">Create an Account</a>
                </p>
              </div>
              <div className="mb-3 ps-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter your email"
                />
              </div>
              <div className="bbuttun">
                <button>Continue</button>
                <div className="strike">
                  <span>or</span>
                </div>
                <button id="coloor">Continue with google</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div id="marketing">
              <h1>
                Sell everywhere. <br />
                Manage anywhere. <br />
                Expand your <br /> business.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
