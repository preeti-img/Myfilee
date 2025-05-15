import "./App.css";


function Second() {
  return (
    <>
    
      <div className="containerr-fluid">
        <div>
          <h1>6000+</h1>
          <p>customers</p>
        </div>
        <div>
          <h1>1500+</h1>
          <p>employees</p>
        </div>
        <div>
          <h1>7</h1>
          <p>Offices in 3 countries</p>
        </div>
        <div>
          <h1>$10B+</h1>
          <p>Annual GMV supported</p>
        </div>
      </div>
      
    </>
  );
}

 export function Img(){
    return(
<div className="container-fluid">
    <div className="row">
        <div className="col">
            <img style={{padding:"100px"}} src="https://cart.com/hubfs/cart.com-1.svg" alt="" className="img-fluid" />
        </div>
    </div>
</div>

    )
}
export default Second;
