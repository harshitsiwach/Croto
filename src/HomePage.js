import { Typography} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import './styles/style.css';
import './styles/newstyle.css';
import './styles/gallery.css';
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";

import kr from './assets/images/kr.mp3'

// IMAGES IMPORT

import diss from './assets/images/diss.png'; 
import tweet from './assets/images/tweet.png'; 
import insta from './assets/images/insta.png'; 
import one from './assets/images/1.png'; 
import two from './assets/images/2.png'; 
import trans1 from './assets/images/trans1.png'; 
import trans2 from './assets/images/trans2.png'; 
import poster from './assets/images/poster.png'; 
import WhitePaper from './assets/images/whitepaper.png'; 
import GBot1 from './assets/images/GBot1.png'; 
import GBot2 from './assets/images/GBot2.png'; 
import GBot3 from './assets/images/GBot3.png'; 
import GBot4 from './assets/images/GBot4.png'; 
import GBot5 from './assets/images/GBot5.png'; 
import GBot6 from './assets/images/GBot6.png'; 
import GBot7 from './assets/images/GBot7.png'; 
import GBot8 from './assets/images/GBot8.png'; 


// import $ from 'jquery'; 
// import shadows from '@material-ui/core/styles/shadows';



function HomePage() {

  const marquee = "Metaverse centric project which consists of troops assembled to conquer the metaverse with their own individual identities. Each Crotopia NFT is rigged to make them compatible to be your own personal identities in the metaverse. Crotopia is ready to take the world by storm with their diverse set of weapons, skills and Utilities.";
  const team = "A team is defined as a group of people who perform interdependent tasks to work toward accomplishing a common mission or specific objective. Some teams have a limited life: for example, a design team developing a new product, or a continuous process improvement team organized to solve a particular problem.";
  const BBDes = "Metaverse centric project which consists of troops assembled to conquer the metaverse with their own individual identities. Each Crotopia NFT is rigged to make them compatible to be your own personal identities in the metaverse. Crotopia is ready to take the world by storm with their diverse set of weapons, skills and Utilities.";
  
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState();
  const [claimingNft, setClaimingNft] = useState(false);

  const [counter, setCounter] = useState(1);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  var isWhiteList = false;
  
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  if (counter >= 20) {
    incrementCounter = () => setCounter(20);
  }

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    var address = "0x87Fc368Db5Ab03FCd34626B673dEAef430718637";
    var gasLimitValue = 250000 * _amount;;
    var nftPrice = 850 * _amount;
	
    setFeedback("Preparing your NFT.");
    setClaimingNft(true);


    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        gasLimit: gasLimitValue,
        to: address,

        from: blockchain.account,
        value: blockchain.web3.utils.toWei((nftPrice).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction Cancelled!");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "NFT Minted!"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  async function isAddressWhitlisted() {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      if(data.whitelistPeriod == true){
        await blockchain.smartContract.methods.isWhitelist(blockchain.account)
          .call().then((res) => {
            //console.log(res);
            if (res == false){
              if(document.getElementById("WLMint") != null)
              {
                document.getElementById("WLMint").style.visibility = "hidden"; 
                document.getElementById("WLIncDecCounter").style.visibility = "hidden";
                setFeedback(
                  "You are not whitelisted."
                 );
              }
            }
            else {
              //gasLimitCheck();
            }
        });
      }
      else {
        //gasLimitCheck();
      }
    }
  }

  var gasPrice = 0;
  async function gasLimitCheck()
  {
    if(data.whitelistPeriod == true){
    gasPrice = await blockchain.smartContract.methods.whiteListMint(1)
                  .estimateGas({ from: blockchain.account });
    } else {
      gasPrice = await blockchain.smartContract.methods.mint(1)
                  .estimateGas({ from: blockchain.account });
    }
    console.log(gasPrice);
  }

  const claimNFTWL = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    var address = "0x87Fc368Db5Ab03FCd34626B673dEAef430718637";
    var gasLimitValue = 250000 * _amount;
    var nftPrice = 750 * _amount;
	
    setFeedback("Preparing your NFT.");
    setClaimingNft(true);
    
    blockchain.smartContract.methods
      .whiteListMint(_amount)
      .send({
        gasLimit: gasLimitValue,
        to: address,

        from: blockchain.account,
        value: blockchain.web3.utils.toWei((nftPrice).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction Cancelled.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "NFT Minted"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
   
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };


  useEffect(() => {
    getData();
  }, [blockchain.account]);

	
  function Display(props) {
    return (
      <label style={{ marginLeft: '.5rem' }} >{props.message}</label>
    )
  }

  return (

    <main>
      <div className='section2' >
        {/* <div className='BBDes' style={{ border:"5px solid #4ccfe6", borderRadius:"30px",}} > */}
        <Typography style={{ padding: "35px", fontSize: "30px", fontWeight: '800', }}>{BBDes}</Typography>
        {/* </div> */}

        <div className="photu boxy">
          <div className="special">
            <div className="imgBx">
              <img style={{ width: "290px", }} src={trans2}></img>
            </div>
            <div className="contentBx aniglo">
              <h2>MECHABROS</h2>
              <div className="size">
                <h3>Crotopia For Life </h3>
              </div>
              <div className="color">
              </div>
              <a href="#mintus">Mint Now!</a>
            </div>
          </div>
        </div>
      </div>



      <marquee className='marquee' id='mintus'>
        {marquee} {marquee} {marquee} {marquee}
      </marquee>


      {/* MINT Button */}

      <div style={{ paddingLeft: "100px", paddingRight: "100px" }} className='mintstation' >
       

      <div  className='feedback'>{feedback}</div>
        <div className='total_supply' >{data.totalSupply}/1000</div>
        {Number(data.totalSupply) === 1000 ? (
          <>
            <span className='sale'>Sold Out!</span>
          </>
        ) : (
        <>
        {blockchain.account === "" ||
            blockchain.smartContract === null ? (
            <span className='textw'>Please Connect Wallet</span>
            ) : (
              <>     
        <div id="WLIncDecCounter" className='InDe' >
        <div className = 'small_buttons' style = {{ paddingTop: "5px", paddingBottom: "5px", marginBottom: "20px", marginRight: "40px" }} >
          <Button style={{fontWeight:"700", fontSize:"20px" }} onClick={(e) => { e.preventDefault(); decrementCounter(); }}>-</Button>
        </div>
        <span style={{fontSize:"40px" , marginTop:"-14px" , fontWeight:"700"}}>
          <Display message={counter} /> </span>
        <div className='small_buttons' style={{ paddingTop: "5px", paddingBottom: "5px", marginBottom: "20px", marginLeft: "40px" }} >
          <Button style={{fontWeight:"700", fontSize:"20px" }} onClick={(e) => { e.preventDefault(); incrementCounter(); }}> +
          </Button>
        </div>
      </div>

      <div id="WLMint" class="wrapper" onLoad={isAddressWhitlisted()} style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "30px" }} >
        <div class="pard">
        {data.whitelistPeriod === true ? (
              <Button disabled={claimingNft ? 1 : 0} onClick={(e) => { e.preventDefault(); claimNFTWL(counter); getData(); }}>
              <h5>
                  <span >
                    {claimingNft ? "Processing." : "WL MINT"}
                  </span>
                </h5>
              </Button>
                  ) : (   
              <>        
          <Button disabled={claimingNft ? 1 : 0} onClick={(e) => { e.preventDefault(); claimNFTs(counter); getData(); }}>
          <h5>
              <span >
                {claimingNft ? "Processing." : "MINT NFT"}
              </span>
            </h5>
          </Button>
          </>
          )} 
        </div>

      </div>
      </>
            )
              }
              </>
      )}
    </div>
 

{/* Mint Button */}



<img style={{marginBottom:'-200px', marginRight:"-1000px", width:"1000px" ,height:"auto"}} src={poster} />


<marquee className='marquee' id="gallery">
{marquee} {marquee} {marquee} {marquee}  
</marquee>




<div className='BroTeam' >#Crotopia-GALLERY</div>

<div className='maingall' >

  <div class="buntainer">
    <div class="cards">
      <div class="card card-one">
        <p class="date"><img style={{width:"200px"}} src={GBot1} /></p>
        <p class="date">BOT<a style={{color:"rgb(118, 232, 240)"}}>: #TALOS</a></p>
      </div>
      
      <div class="card card-two">
        <p class="date"><img style={{width:"200px"}} src={GBot2} /></p>
        <p class="date">BOT <a style={{color:"rgb(118, 232, 240)"}}>: #NUKE</a></p>
      </div>
      
      <div class="card card-three">
  
        <p class="date"><img style={{width:"200px"}} src={GBot3} /></p>
        <p class="date">BOT <a style={{color:"rgb(118, 232, 240)"}}>: #BUNNIE</a></p>
      </div>
      
      <div class="card card-four">

        <p class="date"><img style={{width:"200px"}} src={GBot4} /></p>
        <p class="date">BOT <a style={{color:"rgb(118, 232, 240)"}}>: #ULTRON</a></p>
      </div>
    </div>
  </div>
  <div class="buntainer">
    <div class="cards">
      <div class="card card-one">
        <p class="date"><img style={{width:"200px"}} src={GBot5} /></p>
        <p class="date">BOT <a style={{color:"rgb(118, 232, 240)"}}>: #ELLIE</a></p>
      </div>
      
      <div class="card card-two">
        <p class="date"><img style={{width:"200px"}} src={GBot6} /></p>
        <p class="date">BOT <a style={{color:"rgb(118, 232, 240)"}}>: #ATOM</a></p>
      </div>
      
      <div class="card card-three">
  
        <p class="date"><img style={{width:"200px"}} src={GBot7} /></p>
        <p class="date">BOT <a style={{color:"rgb(118, 232, 240)"}}>: #JYNX</a></p>
      </div>
      
      <div class="card card-four">

        <p class="date"><img style={{width:"200px"}} src={GBot8} /></p>
        <p class="date">BOT <a style={{color:"rgb(118, 232, 240)"}}>: #CP-98</a></p>
      </div>
    </div>
  </div>

  </div>





<marquee className="marqueeTeam" id="theTeam" > {team}{team}{team}{team}</marquee>
<div className='BroTeam'>#Crotopia-TEAM</div>




<div class="PP">
  <div class="frame frame0">
    <div class="border">
      <h2>0xKami<br/>Owner/Admin</h2>
      <div className='socials' >
        <div className='s1'>
      <a href='https://twitter.com/CROtopia_NFT' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={tweet}/></a>

        
        </div>
        

        </div>

    </div>
  </div>
  <div class="frame frame1">
    <div class="border">
      <h2>mrSniper <br/>UNITY 3D Dev.</h2>

      <div className='socials' >
        <div className='s1'>
        
        </div>

        <div className='s2'>
        <a href='https://twitter.com/0xmrsniper' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={tweet}/></a>
        </div>

        </div>

      
    </div>
  </div>
  <div class="frame frame2">
    <div class="border">
      <h2> Hazard <br/>3D Artist</h2>

      <div className='socials' >
        <div className='s1'>
        
        </div>

        <div className='s2'>
        <a href='https://twitter.com/hazardtln' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={tweet}/></a>
        </div>
        

        </div>


    </div>
  </div>
</div>
<div class="PP2">
  <div class="frame frame3">
    <div class="border">
      <h2>0xDinu <br/>Senior Dev.</h2>

      <div className='socials' >
        <div className='s1'>
        
        </div>

        <div className='s2'>
        <a href='https://twitter.com/0xDinu' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={tweet}/></a>
        </div>

        </div>


    </div>
  </div>
  <div class="frame frame4">
    <div class="border">
      <h2>MilitantNoob <br/>UI/UX Design</h2>

      <div className='socials' >
        <div className='s1'>
        
        </div>

        <div className='s2'>
        <a href='https://twitter.com/MilitantNoob' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={tweet}/></a>
        </div>
        
        </div>


    </div>
  </div>
  <div class="frame frame5">
    <div class="border">
      <h2>David <br/>Contract Auditor</h2>

      <div className='socials' >
        <div className='s1'>
        
        </div>

        <div className='s2'>
        <a href='https://twitter.com/davidpius10' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={tweet}/></a>
        </div>
        
        </div>


    </div>
  </div>
</div>


<div class="PP3">
  <div class="frame frame6">
    <div class="border">
      <h2>Wavy <br/>Manager</h2>

      <div className='socials' >
        <div className='s1'>
        <a href='https://discord.gg/B6UUUzTrvJ' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={diss}/></a>
        </div>

        <div className='s2'>
        <a href='https://twitter.com/Wavy_Eh' target={"blank"}><img style={{ width:'30px', height:'auto',}} src={tweet}/></a>
        </div>
        </div>


    </div>
  </div>

</div>


<footer>
  <div className='footerbutt'>
    <div className='foobtu' ><a href='https://crotopia.notion.site/crotopia/CROtopia-34e91cb8f69c47caa392ac2551730218' target={'blank'}  ><img style={{width:"40px"}} src={WhitePaper} /></a></div>
    <div className='foobtu' ><a href='https://discord.gg/abx8QcJu74' target={'blank'}  ><img style={{width:"60px"}} src={diss} /></a></div>
    <div className='foobtu' ><a href='https://twitter.com/CROtopia_NFT' target={'blank'}  ><img style={{width:"40px"}} src={tweet} /></a></div>
  </div>
</footer>


<div class="text-box" style={{display:"flex" , justifyContent:"center" , paddingTop:"30px" , paddingBottom:"30px" , marginRight:"30px" }} >
    <a href="#buldaar" class="btn btn-white btn-animate ScrollUp ">Scroll Up</a>
</div>



                           
{/* <a href='#buldaar'><div className='espan ScrollUp'>  ScrollUp</div> </a> */}


</main>
  );
}

export default HomePage;
