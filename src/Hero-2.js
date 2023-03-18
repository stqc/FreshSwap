import React from "react";
import "./Hero.css";
import SAFE from "./safety.png";
import EARN from "./Earn.png";
import GLASS from "./glass.png";

const Hero_2 = ()=>{

    return(
        <div className="hero section" id="h" style={{backgroundColor:"black", color:"white"}}>
            <div style={{display:"flex"}}>
                <div className="intro-img">
                            <img src={GLASS} style={{width:"15vw"}}/>
                </div>
                <div style={{marginLeft:"2%"}}>
                    <div className="tag-line">Why <span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> For Your Project?</div>
                    <div className="intro-content">
                        <p><span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> is all you need to add some Freshness to your project!
                        </p>
                        <p>
                        <span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> allows you to grow your project's treasury regardless of whether you have a taxed or a non-taxed token, as all the taxes and fees are collected before or after the swap in $BNB, which does not devalue the project in any way as opposed to existing models.
                        </p>
                       
                    </div>
                </div>
            </div>
            <div className="tag-line" style={{marginTop:"10%"}}>
                Why Use <span style={{color:"#F9C04C" ,fontWeight:"900", textAlign:"left"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> As Your DEX?
            </div>
            <div style={{display:"flex"}}>
                    
                    <div className="intro-content" style={{marginTop:"2%"}}>
                        <p><span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span>  is the fresher and safer DeFi companion! With FreshSwap, investors are in control of the liquidity for any project that they have tokens of. With our unique DAO controlled liquidity Pool, users will be able vote on pulling the liquidity. This is a default option for all projects listed with us. Any token with a tax can be traded on FreshSwap without trading fees as well!
                        </p>
                    </div>
                    <div className="intro-img">
                            <img src={SAFE} style={{width:"15vw"}}/>
                    </div>
            </div>
            
            <div style={{display:"flex"}}>
                <div className="intro-img">
                            <img src={EARN} style={{width:"15vw"}}/>
                </div>
                <div style={{marginLeft:"2%"}}>
                    <div className="tag-line" style={{marginTop:"10%"}}>
                        Earn Passively With <span style={{color:"#F9C04C" ,fontWeight:"900", textAlign:"left"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span>.
                    </div>
                    <div className="intro-content" style={{marginTop:"2%"}}>
                            <p>With <span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span>'s referral program, anyone can earn extra passive income when they refer a project they know on FreshSwap. We offer a generous 10% on all transaction fees from the referred project to the referrer for one whole month!
                            </p>
                           
                            
                    </div>
                </div>  
            </div>
        </div>
    )


}

export default Hero_2;
