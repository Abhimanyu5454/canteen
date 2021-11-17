import React from 'react';
import bevarages from './beverages.jpg';
import fastFood from './fastFood.jpg';
import snacks from './snacks.jpg';
import sweets from './sweets.jpg';
import './Welcome.css'
import { Link } from 'react-router-dom'


export default function Welcome(){
    return(
        <div className="my-4" style={{padding:"63px 0px 0px 0px",background:"#dde8f6"}}>
            <h1 style={{display:"flex", justifyContent:"center", fontSize:"60px"}}>Welcome</h1>
            <div className="container">
                <div className="row container-fluid" style={{padding:"20px 185px"}}>
                    <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                        <img src={bevarages} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <div className="card-body">
                            <Link to="/beverages" className="btn btn-primary" style={{margin:"0px 0px 0px 70px",borderRadius:'5px'}}>Beverages</Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                        <img src={fastFood} className="card-img-top" alt="..." style={{height:"247px"}}/>
                        <div className="card-body">
                            <a href="/" className="btn btn-primary" style={{margin:"0px 0px 0px 69px",borderRadius:'5px'}}>Fast Food</a>
                        </div>
                    </div>
                </div>

                <div className="row container-fluid" style={{padding:"20px 185px"}}>
                <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                    <img src={snacks} className="card-img-top" alt="..." style={{height:"247px"}}/>
                    <div className="card-body">
                        <a href="/" className="btn btn-primary" style={{margin:"0px 0px 0px 75px",borderRadius:'5px'}}>Snacks</a>
                    </div>
                </div>

                <div className="card" style={{width: "18rem", margin:"0px 83px",borderRadius:'20px',boxShadow:"6px 7px 12px 3px black"}}>
                    <img src={sweets} className="card-img-top" alt="..." style={{height:"247px"}}/>
                    <div className="card-body">
                        <a href="/" className="btn btn-primary" style={{margin:"0px 0px 0px 77px",borderRadius:'5px'}}>Sweets</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}