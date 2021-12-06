import React from 'react';
import './MyCard';


export default function beverages(){
    return(
        <div className="my-4 bbody" style={{height:"600px",backgroundColor:'lightblue'}}>
            <h1 style={{margin:"83px 0px -99px 679px",textDecoration:"underline"}}>MY CART</h1>

            <div className="container">
                <div className="bcartContainer" style={{margin:"132px 375px",width:'40%'}}>
                    <div className="bCart-Items">
                        
                        <div className="babout">
                            <h1 className="title" style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'normal'}}>1 x COLD DRINK</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            
                            
                        </div>
                        <div className="prices">
                            <div className="amount" style={{fontFamily:'sans-serif',fontWeight:'normal'}}>Rs 35/-</div>
                        </div>
                    </div>

                   

                    <div className="bCart-Items">
                        
                        <div className="babout">
                            <h1 className="title" style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'normal'}}>1 x NACHOS</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            
                            
                        </div>
                        <div className="prices">
                            <div className="amount" style={{fontFamily:'sans-serif',fontWeight:'normal'}}>Rs 45/-</div>
                        </div>
                    </div>

                                        
                    <div className="bCart-Items">
                        
                        <div className="babout">
                            <h1 className="title" style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'normal'}}>1 x BURGER</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            
                            
                        </div>
                        <div className="prices">
                            <div className="amount" style={{fontFamily:'sans-serif',fontWeight:'normal'}}>Rs 35/-</div>
                        </div>
                    </div>

                    
                    <div className="bCart-Items">
                        
                        <div className="babout">
                            <h1 className="title" style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'normal'}}>1 x ICE CREAM</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter">
                            
                           
                        </div>                       
                        <div className="prices">
                            <div className="amount" style={{fontFamily:'sans-serif',fontWeight:'normal'}}>Rs 25/-</div>
                        </div>
                    </div>

                    <div className="container" style={{height:"46px"}}></div>
                    <div className="bCart-Items">
                        
                        <div className="babout">
                            <h1 className="title" style={{fontSize:'20px',fontFamily:'sans-serif',fontWeight:'bold'}}>GRAND TOTAL = 140/-</h1>
                        </div>
                            <div className="bcounter"></div>
                        <div className="bprices"></div>
                        <div className="bcounter"></div>                       
                    </div>
                    <div className="container" style={{height:"20px"}}></div>
                    <button type="button" className="btn btn-primary btn-sm" style={{margin:'0px 0px 7px 192px'}}>CONFIRM ORDER</button>
                </div>
            </div>
        </div>
    )
}