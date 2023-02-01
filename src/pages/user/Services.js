// import React from "react";
// import "./Services.css";
// const Services = () => {
//   return (
//     <div className="Sevice-container">
//       <div className="service-Heading">
//         <h1> Our Services</h1>
//       </div>
//       <div>
//         <img
//           className="service-image"
//           src="https://i.ytimg.com/vi/MQsbiPvr1bE/maxresdefault.jpg"
//           alt=""
//         />
//       </div>
//       <p>dddddddddd</p>
//       <p>dddddddddd</p>
//       <p>dddddddddd</p>
//       <p>dddddddddd</p>
//       <p>dddddddddd</p>
//     </div>
//   );
// };

// export default Services;


import React, { useContext } from "react";
import "./Services.css";
// import Card from "./Card";



// import { themeContext } from "./Context";
import { motion } from "framer-motion"
import HomePage from "./HomePage";

const Services = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 5,
    type: "spring",
  };

  return (

    <div className="Sevice-container">
      <div className="service-Heading">         <h1> Our Services</h1>
      </div>
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <spane >Our Awesome services</spane>
        <spane></spane>
        <spane>
          Lorem ispum is simpley dummy
          <br />
          ispum is simpley dummy text of printing
        </spane><br></br>
      
        <button 
                  
                        className="request-btn">Explore</button>
                    
   
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <div  className="card">
          <h3>Same company carpool



</h3>
          <spane>Make your boring rides a fun ride

</spane>
          </div>
           
           
       
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        <div  className="card">
          
        <h3>​Better service


</h3>
          <spane>We know you better, we serve you better

</spane>
            </div>
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
         <div  className="card">
           
           <h3>Grow your network

</h3>
          <spane>Travel safe with verified professionals
</spane>
         
            </div>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
    </div>
  );
};

export default Services;
