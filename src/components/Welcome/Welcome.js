import React from 'react';
import bevarages2 from './beverages2.png';
import fastFood from './fastFood.png';
import snacks from './snacks.png';
import sweets from './sweets.png';
import './Welcome.css'
import { Link } from 'react-router-dom'
// import balkground from './baclground.jpg'


export default function Welcome(){
    return(
        <div className="" style={{padding:"63px 0px 0px 0px",background:"#blue"}}>
            <h1 style={{display:"flex", justifyContent:"center", fontSize:"60px",textDecoration:"underline"}}>Menu</h1>
            <div className="container">
                <div className="row container-fluid" style={{padding:"20px 185px"}}>
                    <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                        <img src={bevarages2} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <div className="card-body">
                            <Link to="/beverages" className="btn btn-primary" style={{margin:"0px 0px 0px 70px",borderRadius:'5px'}}>Beverages</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                        <img src={fastFood} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <div className="card-body">
                            <Link to="/fastFood" className="btn btn-primary" style={{margin:"0px 0px 0px 69px",borderRadius:'5px'}}>Fast Food</Link>
                        </div>
                    </div>
                </div>

                <div className="row container-fluid" style={{padding:"20px 185px"}}>
                <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                    <img src={snacks} className="card-img-top" alt="..." style={{height:"247px"}}/>
                    <div className="card-body">
                        <Link to="/snacks" className="btn btn-primary" style={{margin:"0px 0px 0px 75px",borderRadius:'5px'}}>Snacks</Link>
                    </div>
                </div>

                <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                    <img src={sweets} className="card-img-top" alt="..." style={{height:"247px"}}/>
                    <div className="card-body">
                        <Link to="/sweets" className="btn btn-primary" style={{margin:"0px 0px 0px 77px",borderRadius:'5px'}}>Sweets</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}