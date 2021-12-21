import React from "react";
import './Contact.css'

export default function Contact() {
    return (
        <div className="container" id="icontainer" style={{width:"1142px",height:"500px",padding:"44px 22px", margin:"171px 0px 0px 203px"}}>
        
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">PCCOE, Nigdi</div>
          <div className="text-two">Pune-411044</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">020-2760 0000</div>
          <div className="text-two">020-2760 0006</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">pccoeadmin@gmail.com</div>
          {/* <div className="text-two">info.codinglab@gmail.com</div> */}
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p></p>
        <br/>
      <form action="#">
        <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
        </div>
        <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
        </div>
        <div className="mb-3">
            <textarea className="form-control" style={{height:"110px"}} placeholder="Enter your message" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="button">
          <input type="button" value="Send Now"/>
        </div>
      </form>
    </div>
    </div>
  
        </div>
    )
}