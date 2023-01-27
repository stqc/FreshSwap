import React from "react";
import "./Hero.css";
import LOGO from "./LOGO.png";
import EL from "./EL.png";

const Hero = ()=>{

    return(
        <div className="hero section">
            <div style={{display:"flex"}}>
                <div>
                    <h1 style={{color:"#4E4E4E" , alignSelf:"flex-start", fontSize:"2.7em",fontWeight:"900", textAlign:"left"}}>Fresh<span style={{color:"#F9F991"}}>Swap</span></h1>
                    <div className="tag-line">
                        CREATE. INNOVATE. FRESHEN UP!
                    </div>
                    
                        <div className="intro-content">
                            
                            <p><span style={{color:"#4E4E4E" ,fontWeight:"900"}}>Fresh<span style={{color:"#F9F991"}}>Swap</span></span> is a fresher take on the existing DEX model,
                            it has been rebuilt from the ground up to facilitate and tackle the fresher needs and issues of the DeFi world.</p>
                            <p>What this means is that <span style={{color:"#4E4E4E" ,fontWeight:"900"}}>Fresh<span style={{color:"#F9F991"}}>Swap</span></span> is not a fork of the existing DEX model, rather it takes inspiration from it where ever necessary, and then adds it's own freshness on top of it.</p>
                            <div className="app-btn" style={{marginBottom:"20%"}}>
                                LAUNCHING SOON  
                             </div>
                        </div>
                        
                        
                </div>
                <div className="intro-img">
                        <img src={LOGO}/>
                        <img src={EL}/>
                </div>
            </div>
            <div className="wave-1" >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )


}

export default Hero;