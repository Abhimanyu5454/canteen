import React from "react";
import './Home.css';
import bevarages2 from './beverages2.png';
import fastFood from './fastFood.png';
import snacks from './snacks.png';
import sweets from './sweets.png';
//import background from "./home1.jpg";

export default function Home() {
    return(
        <>
            <div className="container" style={{height:"56px"}}>
            </div>
            <div className="fliud-container" style={{height:"697px"}}>
                <p className="animate__animated animate__backInLeft" style={{color:"white",textShadow:"2px 2px 4px #000000",padding:"41px 0px 0px 538px",textDecoration:"underline", 
                fontSize:"50px", fontFamily:"Oswald"}}>WELCOME TO PCCOE CANTEEN</p>
                <p style={{margin:"91px 0px 0px 700px",color:"#3b598f",textDecoration:"underline",fontWeight:"bold",fontSize:"31px",height:"70px"}}>Our Menu</p>
                <div className="container">
                    <div className="row">
                      <div className="col" style={{boxShadow:"6px 7px 11px 2px",margin:"0px 20px",background:"#c5c07f"}}>
                        <img src={bevarages2} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <h3 style={{margin:"-8px 0px 0px 80px",color:"#6f4df0",fontWeight:"bold",textShadow:"2px 2px 4px #000000"}}>Beverages</h3>
                      </div>
                      <div className="col" style={{boxShadow:"6px 7px 11px 2px",margin:"0px 20px",background:"#c5c07f"}}>
                        <img src={fastFood} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <h3 style={{margin:"-2px 0px 0px 80px",color:"#6f4df0",fontWeight:"bold",textShadow:"2px 2px 4px #000000"}}>Fast Food</h3>
                        </div>
                      <div className="col" style={{boxShadow:"6px 7px 11px 2px",margin:"0px 20px",background:"#c5c07f"}}>
                        <img src={snacks} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <h3 style={{margin:"-8px 0px 0px 84px",color:"#6f4df0",fontWeight:"bold",textShadow:"2px 2px 4px #000000"}}>Snacks</h3>
                      </div>
                      <div className="col" style={{boxShadow:"6px 7px 11px 2px",margin:"0px 20px",background:"#c5c07f"}}>
                        <img src={sweets} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <h3 style={{margin:"-8px 0px 0px 85px",color:"#6f4df0",fontWeight:"bold",textShadow:"2px 2px 4px #000000"}}>Sweets</h3>
                       </div>
                       
                    </div>
                </div>
            </div>
        </>

        // <div className="ibody" style={{
        //     backgroundImage: {background},
        //     height: "100%",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        // }}>
        // <br/>
        // <br/>
        // <p className="animate__animated animate__backInLeft" style={{height:"642px",color:"#3b3b4b",padding:"63px 0px 0px 538px",textDecoration:"underline", 
        // fontSize:"50px", fontFamily:"Oswald"}}>WELCOME TO PCCOE CANTEEN</p>
        // <p style={{margin:"-248px 0px 38px 651px"}}>Our Services</p>
        // <br style={{height:"100px"}}>
        // </br> 
        // <br/>
            
        //</div>   
    )
}