import React from "react";
import "./Hero.css";
import SAFE from "./safety.png";
import EARN from "./Earn.png";
import GLASS from "./glass.png";

const Hero_2 = ()=>{

    return(
        <div className="hero section" style={{backgroundColor:"black", color:"white"}}>
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
                        <span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> allows you to grow your project treasury regardless of whether you have a taxed or a non-taxed token, as all the taxes and fees are collected before or after the swap in USDC which does not devalue the project in anyway shape or form ass opposed to existing model.
                        </p>
                        <p>
                            In addition to that, all projects are required to be paired with USDC as opposed to any other volatile crypto, which leads to stabilization in prices.
                        </p>
                    </div>
                </div>
            </div>
            <div className="tag-line" style={{marginTop:"10%"}}>
                Why <span style={{color:"#F9C04C" ,fontWeight:"900", textAlign:"left"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> For Investors?
            </div>
            <div style={{display:"flex"}}>
                    
                    <div className="intro-content" style={{marginTop:"2%"}}>
                        <p><span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> is your fresher and safer DeFi companion!
                        </p>
                        <p>
                            With <span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span>, You the investors are in control of the liquidity. With our unique DAO controlled Liquidity Pool, you can sleep well knowing your funds are safe!
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
                            <p>With <span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span>'s solid referral program you can get rich without lifting a finger!
                            </p>
                            <p>
                                <span style={{color:"#F9C04C" ,fontWeight:"900"}}>Fresh<span style={{color:"#91E564"}}>Swap</span></span> promotes anyone and everyone to refer projects to launch on our platform and as a reward you earn 10% of all the fees generated from that pool for the next month!
                            </p>
                            
                    </div>
                </div>  
            </div>
        </div>
    )


}

export default Hero_2;