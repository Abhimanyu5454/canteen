import React from 'react';
import './Sweets.css';
import pastry from './pastry.png';
import chocolate from './chocolate.jpg';
import donnut from './donnut.jpg';
import icecream from './icecream.png';

export default function beverages(){
    return(
        <div className="my-4 bbody" style={{height:"600px",backgroundColor:'lightblue'}}>
            <h1 style={{margin:"83px 0px -99px 679px",textDecoration:"underline"}}>SWEETS</h1>

            <div className="container">
                <div className="bcartContainer" style={{margin:"132px 176px"}}>
                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={pastry} style={{ height:"120px",margin:"19px 0px 0px 0px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">PASTRY</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px 7px 0px 9px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -30px 0px 0px"}}>REMOVE</button>
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
                            <img src={chocolate} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">CHOCOLATE</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px 7px 0px -8px"}}>ADD</button>
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
                            <img src={donnut} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">DONNUT</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px 7px 0px 5px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -30px 0px 0px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 40/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={icecream} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">ICE CREAM</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px 7px 0px -4px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -30px 0px 0px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 25/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                </div>
            </div>

        </div>
    )
}