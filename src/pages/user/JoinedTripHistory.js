import React, { useState, useEffect } from "react";
import "./JoinedTripHistory.css";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as Icons from "react-icons/fa";
import * as Icon from 'react-bootstrap-icons'
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export default function  JoinedTripHistory() {
    
    const [hosted, setHosted] = useState(false);
    const Navigate = useNavigate();
    const [changeColor, setChangeColor] =useState("grey")
  const [changeColor1, setChangeColor1] =useState(" #4CAF50")

//  function handleClick() {
//     if(changeColor==="grey"){
//       setChangeColor(" #4CAF50")
//     }
//     else{
//       setChangeColor(" #4CAF50")
//     }
      
//     }
//     function handleClick1() {
//       if(changeColor1===" #4CAF50"){
//         setChangeColor1("grey")
//       }
//       else{
//         setChangeColor1(" #4CAF50")
//       }
        
//       }

      const statusHosted = () => {
        setHosted(true);
        Navigate("/trip-history");
      };
  
  return (
    <>

    <Layout>
    {/* <div className="register-body"> */}
    <div className="joined-history-container">
        <div className="joined-Histrory-btnGrp">
            <button onClick={() => {
                   
                   statusHosted();}} className= "joined-Btn">Hosted</button>
            <button  style= {{backgroundColor:"grey"}} className="joined-Btn">Joined</button>
        </div>
      <div className="joined-title">
        <h1> My Trips History-joined</h1>
      </div>


      <div className="joined-container">
                <div className="joined-top-container">
                  <div className=" joined-outer-box">
                    <div className="joined-detail">


                    <div className="joined-first">
                        <div className="joined-row1">
                        <img></img><br></br>
                        </div>
                         </div>
                     


                      <div className="joined-first">
                        <div className="joined-row">
                          <label>  Name: </label> 
                          
                        </div>
                        <div className="joined-row">
                          <label> From:<Icons.FaMapMarkerAlt/></label><br></br>
                          <label>
                            To:  <Icons.FaMapMarkerAlt/>
                          </label>
                        </div>
                        
                      </div>
                      <div className="joined-first">
                        <div className="joined-row">
                          <label>  price: </label> 
                          
                        </div>
                        <div className="joined-row">
                          <label> Date:</label><br></br>
                          <label>
                            Time:  
                          </label>
                        </div>
                        
                      </div>
                     
                     
                    </div>
                  </div>
                </div>
              </div>
       
   
     
  
</div>
{/* </div> */}
    <Footer></Footer>
 
  </Layout>
</>
);
}


