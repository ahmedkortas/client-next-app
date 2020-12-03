import React from "react";
import { createPopper } from "@popperjs/core";
import MapExampleScript from '../components/Maps/MapExample';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const About = () => {
  
 
  return (
    <>
     <div >
       <IndexNavbar/>
       <div className="flex flex-wrap">
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
      <h2><span>Contact</span></h2>
        <p></p>
        <p class="contact_info"> <span>Adresse:</span> 10 Avenue Habib Bourguiba, <br/>
          Imm. Zaphyr B3-1 – Ariana 2080<br/>
          <span>Tel:</span> +216 71&nbsp;703&nbsp;733<br/>
          <span>Fax:</span> +216 71 703&nbsp;302<br/>
          <span>E-mail:</span> <a href="">irada.consulting13@gmail.com</a> </p>
          <br/>
      </span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
      <MapExampleScript/>
      </span>
    </div>
  </div>
       
        
 </div>
 <br/><br/>
<Footer/>
    </>
  );
};

export default About;