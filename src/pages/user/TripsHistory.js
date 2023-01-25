import React, { useState, useEffect } from "react";
import "./TripsHistory.css";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as Icons from "react-icons/fa";
import * as Icon from 'react-bootstrap-icons'
import axios from "axios";
import {  useNavigate } from "react-router-dom";


export default function TripsHistory() {
  const [changeColor, setChangeColor] =useState(" #4CAF50")
  const [changeColor1, setChangeColor1] =useState(" #4CAF50")
  const [joined, setJoined] = useState(false);
  const Navigate = useNavigate();
 function handleClick() {
    if(changeColor===" #4CAF50"){
      setChangeColor("grey")
    }
    else{
      setChangeColor(" #4CAF50")
    }
      
    }
    function handleClick1() {
      if(changeColor1===" #4CAF50"){
        setChangeColor1("grey")
      }
      else{
        setChangeColor1(" #4CAF50")
      }
        
      }
      const statusJoined = () => {
        setJoined(true);
        Navigate("/joined-trip-history");
      };
  
    return (
        <>

    <Layout>
    {/* <div className="register-body"> */}
    <div className="trip-history-container">
        <div className="Trip-Histrory-btnGrp">
            <button   style= {{backgroundColor:"grey"}}  className= "trips-Btn">Hosted</button>
            <button   onClick={() => {
                   
                    statusJoined();
                  }}className="trips-Btn">Joined</button>
        </div>
      <div className="trh-title">
        <h1> My Trips History-Hosted</h1>
      </div>
   
      <div className="trips-container">
                <div className="trips-top-container">
                  <div className=" trips-outer-box">
                    <div className="trips-detail">
                      <div className="trips-first">
                        <div className="trips-row">
                          <label>  Date: </label> <br></br>
                          <label>  Time: </label>
                        </div>
                        <div className="trips-row">
                          <label> From:<Icons.FaMapMarkerAlt/></label><br></br>
                          <label>
                            To:  <Icons.FaMapMarkerAlt/>
                          </label>
                        </div>
                        <div className="trips-row">
                          <label> price:</label><br></br>
                          
                        </div>
                      </div>
                      <div className="trips-first">
                        <div className="trips-row1">
                        <img></img><br></br>
                          <label>Name: </label>
                          <br></br>
                          <label>SYT878 </label>
                          <br></br>
                        </div>
                        

                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
       
   
     
{/*
      {/* ); */}
{/* })}  */}
    </div>
{/* </div> */}
    <Footer></Footer>
 
  </Layout>
</>
);
}





