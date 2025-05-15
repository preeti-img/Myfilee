import"./Footer.css"

function Footer(){
    return(
        <>
        
         <div className="footer">
      <div className="leftfooter">
        <a href="#"
          ><img
            src="https://cart.com/hubfs/raw_assets/public/website-theme/images/default/logo.svg"
            alt="cartX.com"
        /></a>
        <h3>Grow further</h3>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <button id="buttn">Get Started</button>
        {/* ----------------icons below button space------------------ */}
      </div>
      <div className="rightfooter">
      <div className="fright">
          <h3>Solutions</h3>
          <h3>Fulfillment & <br />Logistics</h3>
          <ul>
            <li className="uli">Retail and Wholesale Fulfillment</li>
            <li className="uli">Ecommerce Fulfillment</li>
            <li className="uli">Fulfillment Technology</li>
            <li className="uli">Warehouse Automation</li>
            <li className="uli">Customer Success</li>
            <li className="uli">Transportation</li>
            <li className="uli">Contract Logistics</li>
            <li className="uli">Omnichannel Fulfillment</li>
            <li className="uli">Locations</li>
          </ul>
          <h3>Commerce Software</h3>
          <ul>
            <li className="uli">Fulfillment Software</li>
            <li className="uli">Marketplace Management</li>
            <li className="uli">Feed Marketing</li>
            <li className="uli">B2B Commerce Platform</li>
            <li className="uli">Inventory and Demand AI</li>
          </ul>
          <h3>
            Commerce Services
          </h3>
          <ul>
            <li className="uli">Marketplace Services</li>
            <li className="uli">Growth Marketing</li>
            <li className="uli">Customer Engagement</li>
            <li className="uli">Store Optimization Services</li>
            <li className="uli">Industries</li>
            <li className="uli">B2B Companies</li>
            <li className="uli">Consumer Brands</li>
          </ul>
        </div>
        <div className="mright">
          <h3>Industries</h3>
          <ul>
            <li className="uli">B2B Companies</li>
            <li className="uli">Consumer Brands</li>
            <li className="uli">Public Sector</li>
          </ul>
        </div>
        <div className="lright">
          <h3>Resources</h3>
          <ul>
            <li className="uli">About Cart.com</li>
            <li className="uli">Careers</li>
            <li className="uli">Newsroom</li>
            <li className="uli">Contact Us</li>
            <li className="uli">Resource Center</li>
            <li className="uli">Videos</li>
            <li className="uli">Blog</li>
            <li className="uli">Case Studies</li>
            <li className="uli">Free Brand Tools</li>
            <li className="uli">Release Notes</li>
            <li className="uli">Knowledge Center</li>
            <li className="uli">Support</li>
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}
export default Footer;