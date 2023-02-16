import './styles/header.css';
import './styles/modal.css';


import swal from 'sweetalert'
import HomePage from './HomePage'
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { connectMM } from "./redux/blockchain/blockchainActions";
import { connectWC } from "./redux/blockchain/blockchainActions";

import { useNavigate } from "react-router-dom";
import BBLogo from "./assets/images/HeadLogo.gif";
import { $ } from 'jquery';

import SelectWalletModal from "./Modal";
import SelectDownloadModal from './Download';



 /*  MAIN MAIN MAIN MAIN MAIN         */
var networkName = "CRO";

const networks = {
	CRO: {
		chainId: `0x${Number(25).toString(16)}`,
        chainName: "Cronos Mainnet Beta",
        nativeCurrency: {
          name: "Cronos Mainnet Beta",
          symbol: "CRO",
          decimals: 18
        },
        rpcUrls: ["https://evm.cronos.org"],
        blockExplorerUrls: ["https://cronoscan.com/"]
      },
};

const changeNetwork = async ({ networkName, setError }) => {
	try {
	  if (!window.ethereum) throw new Error("No crypto wallet found");
	  await window.ethereum.request({
	    method: "wallet_addEthereumChain",
	    params: [
	      {
		...networks[networkName]
	      }
	    ]
	  });
	  
	} catch (err) {
	  console.log(err.message);
	}
      };



function Header() {

    //const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const [feedback, setFeedback] = useState("Reveal What Your Destiny Holds!");
	const [claimingNft, setClaimingNft] = useState(false);

    const [selectWalletPopup, setSelectWalletPopup] = useState(false);

    const [selectDownloadPopup , setSelectDownloadPopup] = useState(false);

   	const [counter, setCounter] = useState(1);
	
	var accountSelected = "";

	const getData = () => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));

			accountSelected = blockchain.account;

            document.getElementById('accountHolder').textContent = shorten(accountSelected);
        }
    };

    const shorten = (str) => {
        if (str.length < 10) return str;
        return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
      }
    
    const [error, setError] = useState();

    const handleNetworkSwitch = async () => {
        //alert("metamask");
        blockchain.smartContract = null;
        setError();
        await changeNetwork({ networkName, setError });
	    dispatch(connectMM());
        getData();
    };

    const handleDefiConnect = async () => {
        blockchain.smartContract = null;
        setError();
	    dispatch(connectWC());
        getData();
    }

	const networkChanged = (chainId) => {
	console.log({ chainId });
    };
    
    const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};

	useEffect(() => {

		//getBrowser();
		getData();
    }, [blockchain.account]);

    const downloadPc = () =>{
        window.location.replace('https://drive.google.com/file/d/1U0zf0JcWA1bUeOfDFyF2ro5VKRiSTwOP/view?usp=share_link');
    };

    const downloadWeb = () =>{
        swal("ComingSoon", "ComingSoon!", "info");
        // window.open('http://www.crotopia.world/');
    };

    const downloadWeb2 = () =>{
        swal("ComingSoon", "ComingSoon!", "info");
        // window.open('http://www.crotopia.land/');
    };

	return (

        

      <div>
<header className='header'  >
    
        <div class="page-title">
        <a href='https://c.tenor.com/Xq6Ij1fSSqMAAAAd/pepe-money.gif' target={"blank"} ><img  style={{ width:'180px', height:'auto', marginRight:'100px', }} src={BBLogo}/> </a> 
        </div>

        <main class="site-wrapper ">
        <div class="pt-table desktop-768">
          <div style={{className:'pt-tablecell page-home relative',}} >
                          <div class="container">
                              <div class="row">
                                      <div class="AllHex ">
                                      <div class="hexagon-menu clear">
                                          <div class="hexagon-item">
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <a  class="hex-content" href='#mintus' >
                                                  <span class="hex-content-inner">
                                                      <span class="icon">
                                                          <i class="fa fa-universal-access"></i>
                                                      </span>
                                                      <span id="buldaar" class="title">MINT</span>
                                                  </span>
                                                  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                              </a>
                                          </div>
                                          <div class="hexagon-item">
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <a  class="hex-content scroll-down" href='#gallery' >
                                                  <span class="hex-content-inner">
                                                      <span class="icon">
                                                          <i class="fa fa-bullseye"></i>
                                                      </span>
                                                      <span class="title">GALLERY</span>
                                                  </span>
                                                  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                              </a>
                                          </div>
                                          <div class="hexagon-item">
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <a  class="hex-content" href='#theTeam'>
                                                  <span class="hex-content-inner">
                                                      <span class="icon">
                                                          <i class="fa fa-braille"></i>
                                                      </span>
                                                      <span class="title">TEAM</span>
                                                  </span>
                                                  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                              </a>    
                                          </div>
                                          <div class="hexagon-item">
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <a  class="hex-content"  onClick={ () => setSelectWalletPopup(true)}>
                                                  <span class="hex-content-inner"  >
                                                      <span class="icon" >
                                                          <i class="fa fa-id-badge" ></i>
                                                    </span>
                                                    <span style={{ color: "rgb(118, 232, 240", fontSize: "15px", fontWeight: "700" }} class="title titlee" id="accountHolder"
                                                        >CONNECT WALLET</span>
                                                  </span>
                                                  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                              </a>
                                            </div>


                                            <div class="hexagon-item">
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <div class="hex-item">
                                                  <div></div>
                                                  <div></div>
                                                  <div></div>
                                              </div>
                                              <a  class="hex-content" onClick={ () => setSelectDownloadPopup(true)} >
                                                  <span class="hex-content-inner">
                                                      <span class="icon">
                                                          <i class="fa fa-braille"></i>
                                                      </span>
                                                      <span style={{ color: "#CAF1DE", fontSize: "15px", fontWeight: "700" }} class="title titlee">
                                                        CROTOPIA</span>
                                                  </span>
                                                  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                              </a>    
                                          </div>

                                        </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
        </main>
        </header>

                  <div className='whole-modal'>
                  <SelectWalletModal trigger={selectWalletPopup} setTrigger={setSelectWalletPopup} handleNetworkSwitch={handleNetworkSwitch} handleDefiConnect={handleDefiConnect}></SelectWalletModal>
                  </div>

                  <div className='download'>
                  <SelectDownloadModal trigger={selectDownloadPopup} setTrigger={setSelectDownloadPopup} downloadPc={downloadPc} downloadWeb={downloadWeb} downloadWeb2={downloadWeb2} > </SelectDownloadModal>
                  </div>
        
        {/* Crotopia Download BUTTONS */}

        {/* <div className="Crotopia_Downloads">

        <div style={{paddingTop:"20px" , paddingBottom:"20px"}}>
        <h1 style={{display:"flex" , justifyContent: "center" }} >Crotopia Download links</h1>
        
        <div style={{display:"flex" , justifyContent:"space-between" , paddingLeft:"200px" , paddingRight:"200px" }}>

            <div className='Download_Button_PC'>
                <span><h4>PC-Build</h4></span>  
            </div>

            <div className='Download_Button_Web'>
                <span><h4>WebGL-Build</h4></span>  
            </div>
        
        </div>
        </div>
        </div> */}

        </div>  
	);
  }
  
  export default Header;
