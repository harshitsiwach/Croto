import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import './styles/modal.css';


export default function SelectDownloadModal(props) {
	const { downloadPc, downloadWeb , downloadWeb2 } = props;
	return (props.trigger)? (
<main>

        <div className="Crotopia_Downloads">
	    <div style={{paddingTop:"20px" , paddingBottom:"20px"}}>
        <h1 style={{display:"flex" , justifyContent: "center" ,color:"#191919" }} >Crotopia Links</h1>
        
        <div style={{display:"flex" , justifyContent:"space-between" , paddingLeft:"200px" , paddingRight:"200px" }}>

            <Button 
		    onClick={() => {
				downloadPc();
			    props.setTrigger(false)
		    }}
		    w="100%">
		    
              <div className='Download_Button_PC'>
                <span><h4> PC-Build </h4></span>  
            </div>
		  </Button>

		  <Button
		    variant="outline"
		    onClick={() => {
				downloadWeb();
			    props.setTrigger(false)
		    }}
		    w="100%">
		      <div className='Download_Button_Web'>
                <span><h4>WebGL-Build</h4></span>  
            </div>
		</Button>

		<Button
		    variant="outline"
		    onClick={() => {
				downloadWeb2();
			    props.setTrigger(false)
		    }}
		    w="100%">
		      <div className='Download_Button_Web'>
                <span><h4>WebGL-Build Mirror</h4></span>  
            </div>
		</Button>

		<Button onClick={() => props.setTrigger(false)}>
			<div className='Download_Button_Close'>
			X
			</div>
		</Button>

        </div>
        </div>
        </div>

		<div >
		<h3 style={{display:"flex" , justifyContent: "center" ,color:" #ED2939" }}>Note</h3>
		<h4 style={{display:"flex" , justifyContent: "center" ,color:" #ED2939" }} >*[PC-Build] is for OG Pass holders ONLY*</h4>
		<h4 style={{display:"flex" , justifyContent: "center" ,color:" #ED2939" }} >*[WebGL-Build] and [WebGL-Build mirror] will redirect to the same CROTOPIA Build*</h4>
		<h4 style={{display:"flex" , justifyContent: "center" ,color:" #ED2939" }} >*To know the difference between CROTOPIA [PC] and [WebGL] Build. Click [Info]*</h4>
		<h4 style={{display:"flex" , justifyContent: "center" ,color:" #ED2939" }} >*CROTOPIA 2.0 sneak peeks also avaliable at [INFO]*</h4>
		</div>

</main>
	) : "";
      }