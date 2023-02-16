import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import './styles/modal.css';


const InfoPage = () =>{
    return(

        <main>

        <div style={{ display:"flex" , justifyContent:"center" , paddingBottom:"20px" , fontSize:"30px" }} >
        <h1>INFORMATION</h1>
        </div>

        <div>
		<h3 style={{display:"flex" , justifyContent:"center" ,color:"#ffff32" }}>[PC-Build]</h3>

        <h4 style={{display:"flex" ,justifyContent:"center" , color:"#FFF" ,paddingTop:"10px" , paddingBottom:"10px"  }} >* Click on the link to get PC build*
        <a style={{color:"#ADFF2F"}} href="#"> CROTOPIA-PC</a> 
        * Note PC-Build is for OG Pass holders ONLY * </h4>

		<h4 style={{display:"flex" ,justifyContent:"center" , color:"#ED2939"  }} >* Note PC-Build is for OG Pass holders ONLY*</h4>
		<h4 style={{display:"flex" ,justifyContent:"center" , color:"#ED2939"  }} >*[WebGL-Build] and [WebGL-Build mirror] will redirect to the same CROTOPIA Build*</h4>
		</div>

        </main>

	);
      };

export default InfoPage;