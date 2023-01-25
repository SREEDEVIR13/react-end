import React, { useState, useEffect } from "react";
import "./TripRequest.css";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as Icons from "react-icons/fa";
import * as Icon from 'react-bootstrap-icons'
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export default function TripsRequest() {



  return (
    <>

<Layout>

<div className="request-container">
  <div className="request-right">
    <div className="request-title">
      <h1> My Ride Request</h1>
    </div>
    <div className=" Request-outer-box">
                    <div className="request-detail">


                    <div className="request-first">
                        <div className="request-row1">
                        <img></img><br></br>
                        </div>
                         </div>
                     


                      <div className="request-first">
                        <div className="request-row">
                          <label>  Name: </label> 
                          
                        </div>
                        <div className="request-row">
                          <label> From:<Icons.FaMapMarkerAlt/></label><br></br>
                          <label>
                            To:  <Icons.FaMapMarkerAlt/>
                          </label>
                        </div>
                        
                      </div>
                      <div className="request-first">
                        <div className="request-row">
                          <label>  Date: </label> 
                          
                        </div>
                        <div className="request-row">
                          <label> Ride start Time</label><br></br>
                          
                        </div>
                        
                      </div>
                      <div className="request-first">
                        <div className="request-row2">
                          <label> Ride request Accepted </label> 
                          
                        </div>
                        <div className="request-row2">
                        <button className="request-btn1">Cancel Ride</button>
                          
                    </div>
                        
                      </div>
                     
                    </div>
                  </div>
             

  </div>

  <div className="request-right">
    <div className="request-title">
    <div class="vl"></div>
    </div> 
    </div>




  <div className="request-right">
    <div className="request-title">
      <h1> My  Invitations</h1>
    </div> 


   <div className=" Request-outer-box">
                    <div className="request-detail">


                    <div className="request-first">
                        <div className="request-row1">
                        <img></img><br></br>
                        </div>
                         </div>
                     


                      <div className="request-first">
                       
                        <div className="request-row">
                          <label> From:<Icons.FaMapMarkerAlt/></label><br></br>
                          <label>
                            To:  <Icons.FaMapMarkerAlt/>
                          </label>
                        </div>
                        
                      </div>
                      <div className="request-first">
                        <div className="request-row">
                          <label>  Date: </label> 
                          
                        </div>
                        <div className="request-row">
                          <label> Ride start Time</label><br></br>
                          
                        </div>
                        
                      </div>
                      <div className="request-first">
                      <div className="request-buttons">
                        <button  className="request-btn">
                    Accept
                        </button>
                        <br></br>
                        <button className="request-btn">Cancel Ride</button>
                      </div>
                          
                    
                        
                      </div>
                     
                    </div>
                  </div>
                  </div>


</div>

 

<Footer></Footer>

</Layout>
</>
);
}



