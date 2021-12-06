import React from 'react';
import './FastFood.css';
import burger from './burger.png';
import pizza from './pizza.jpg';
import maggi from './maggi.jpg';
import roll from './roll.jpg';

export default function beverages(){
    return(
        <div className="my-4 bbody" style={{height:"600px",backgroundColor:'lightblue'}}>
            <h1 style={{margin:"83px 0px -99px 679px",textDecoration:"underline"}}>FAST FOOD</h1>

            <div className="container">
                <div className="bcartContainer" style={{margin:"132px 176px"}}>
                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={burger} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">BURGER</h1>
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
                            <div className="amount">Rs 35/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>


                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={pizza} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">PIZZA</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px -38px 0px 9px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px 0px 0px 45px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 85/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                    
                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={maggi} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">MAGGI</h1>
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
                            <div className="amount">Rs 30/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={roll} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">ROLL</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px 7px 0px 7px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -10px 0px 0px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 45/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                </div>
            </div>

        </div>
    )
}