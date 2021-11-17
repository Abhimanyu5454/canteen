import React from 'react';
import './Beverages.css';
import tea from './tea.jpg';
import coffee from './coffee.png';
import juice from './juice.jpg';
import coldDrink from './coldDrink.jpg';

export default function beverages(){
    return(
        <div className="my-4 bbody" style={{height:"600px"}}>
            {/* <h1>Beverages</h1> */}

            <div className="container">
                <div className="bcartContainer" style={{margin:"132px 176px"}}>
                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={tea} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">Tea</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px -24px 0px 2px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -33px 0px 30px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 15/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>


                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={coffee} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">COFFEE</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px -38px 0px -17px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px 0px 0px 45px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 25/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                    
                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={juice} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">JUICE</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px -25px 0px -10px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -30px 0px 0px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 20/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={coldDrink} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">COLD DRINK</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px -25px 0px -31px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -10px 0px 0px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 35/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                </div>
            </div>

        </div>
    )
}