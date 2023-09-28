import React, { useState,useEffect } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import {FaCaretDown,FaSearch,FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {

    const[scrolled,setScrolled] = useState(false)
    const[mobileNavbar,setMobileNavbar] = useState(false)
    const[navChild,setNavChild] = useState(false)

    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
     
    return ( 
        <>
            <section className={`navbar ${scrolled ? 'scrolled' : ''}`}>
               <div id="nav-div">
                    <div>
                        {
                            scrolled ? <img width="150" alt="logo" src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" /> 
                            : <img width="150" alt="logo" src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" />
                        }
                    </div>
                    <div id="mobile-navchild-div2">
                        <FaSearch className="mobileNav-icons"></FaSearch>
                        <FaBars className="mobileNav-icons" onClick={()=>setMobileNavbar(true)}></FaBars>
                    </div>
                    {
                      mobileNavbar && 
                      <div id="mobileNav">
                        <div style={{width:"95%", display:"flex",justifyContent:"space-between",margin:"10px"}}>
                          <img width={100} alt="logo" src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"/>
                          <FaTimes onClick={()=>setMobileNavbar(false)}></FaTimes>
                        </div>
                        <div style={{position:"fixed",left:"30%",top:"30%"}}>
                        <ul className="Mbnav-ul">
                            <li className="Mbnav-li"><Link className="Mbnav-link" to="/">Home</Link></li>
                            <ul style={{padding:"0"}}>
                                <li className="Mbnav-li nav-industries"><Link onClick={()=>{
                                  navChild ?setNavChild(false) : setNavChild(true)
                                  console.log(navChild)
                                }} className="Mbnav-link" to="">Industries <FaCaretDown></FaCaretDown></Link></li>
                                <ul id="Mbnav-child" className={`${navChild ? 'Mbnav-child' : 'Mbnav-childl'}`}>
                                    <li className="Mbnav-li"><Link className="Mbnav-link-child"  to="">Sustainability</Link></li>
                                    <li className="Mbnav-li"><Link className="Mbnav-link-child"  to="">Mineral Processing</Link></li>
                                    <li className="Mbnav-li"><Link className="Mbnav-link-child"  to="">Mine-To-Mill-To-mine Optimization</Link></li>
                                    <li className="Mbnav-li"><Link className="Mbnav-link-child"  to="">Oil & Gas</Link></li>
                                </ul>
                            </ul>
                            <li className="Mbnav-li"><Link className="Mbnav-link"  to="/">AI Software</Link></li>
                            <li className="Mbnav-li"><Link className="Mbnav-link"  to="/">Blog</Link></li>
                            <li className="Mbnav-li"><Link className="Mbnav-link"  to="/">Contact Us</Link></li>
                        </ul>
                        </div>
                      </div>
                    }
                    <div id="navchild-div2">
                        <ul className="nav-ul">
                            <li className="nav-li"><Link className={`nav-link ${scrolled ? 'afterScrolled' : ''}`} to="/">Home</Link></li>
                            <ul style={{padding:"0"}}>
                                <li className="nav-li nav-industries"><Link className={`nav-link nav-industries ${scrolled ? 'afterScrolled' : ''}`} to="">Industries <FaCaretDown id={`${scrolled ? '' : 'i'}`}></FaCaretDown></Link></li>
                                <ul id="nav-child">
                                    <li className="nav-li"><Link className={`nav-link ${scrolled ? 'afterscrolled' : ''}`} to="">Sustainability</Link></li>
                                    <li className="nav-li"><Link className={`nav-link ${scrolled ? 'afterscrolled' : ''}`} to="">Mineral Processing</Link></li>
                                    <li className="nav-li"><Link className={`nav-link navchild-child-line-height ${scrolled ? 'afterscrolled' : ''}`} to="">Mine-To-Mill-To-mine Optimization</Link></li>
                                    <li className="nav-li"><Link className={`nav-link ${scrolled ? 'afterscrolled' : ''}`} to="">Oil & Gas</Link></li>
                                </ul>
                            </ul>
                            <li className="nav-li"><Link className={`nav-link ${scrolled ? 'afterScrolled' : ''}`} to="/">AI Software</Link></li>
                            <li className="nav-li"><Link className={`nav-link ${scrolled ? 'afterScrolled' : ''}`} to="/">Blog</Link></li>
                            <li className="nav-li"><Link className={`nav-link ${scrolled ? 'afterScrolled' : ''}`} to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
           {
            scrolled &&  <div style={{position:"fixed",bottom:"70px",right:"15px",zIndex:"999"}}>
            <button style={{cursor:"pointer"}} id="scrollTopbtn" onClick={()=>{
             window.scrollTo(0,0);
            }}>^</button>
         </div>
           }
        </>
     );
}

export default Navbar;