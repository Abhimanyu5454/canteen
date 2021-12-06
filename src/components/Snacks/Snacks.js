import React from 'react';
import './Snacks.css';
import chips from './chips.jpg';
import cookies from './cookies.jpg';
import nachos from './nachos.jpg';
import popcorn from './popcorn.png';

export default function beverages(){
    return(
        <div className="my-4 bbody" style={{height:"600px",backgroundColor:'lightblue'}}>
            <h1 style={{margin:"83px 0px -99px 679px",textDecoration:"underline"}}>SNACKS</h1>

            <div className="container">
                <div className="bcartContainer" style={{margin:"132px 176px"}}>
                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={chips} style={{ height:"120px",margin:"19px 0px 0px 0px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">CHIPS</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px -25px 0px 15px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -33px 0px 30px"}}>REMOVE</button>
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
                            <img src={cookies} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">COOKIES</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px -39px 0px 5px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px 0px 0px 45px"}}>REMOVE</button>
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
                            <img src={nachos} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">NACHOS</h1>
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
                            <div className="amount">Rs 45/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                    <div className="bCart-Items">
                        <div className="bimage-box">
                            <img src={popcorn} style={{ height:"120px"}} alt="..." />
                        </div>
                        <div className="babout">
                            <h1 className="title">POPCORN</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            <button type="button" className="btn btn-warning" style={{margin:"0px 7px 0px 0px"}}>ADD</button>
                            <button type="button" className="btn btn-warning" style={{margin:"0px -10px 0px 0px"}}>REMOVE</button>
                            {/* <div className="bbtn">ADD</div>
                            <div className="bbtn">REMOVE</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">Rs 30/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"20px"}}></div>

                </div>
            </div>

        </div>
    )
}