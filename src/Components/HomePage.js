import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import {FaTwitter,FaLinkedin} from 'react-icons/fa'

function HomePage() {
    return ( 
        <>
            <section id="section1" style={{overflow:"hidden"}}>
                <div id="hm-div1">
                    <div id="hm-childdiv1">
                        <div>
                            <h2>
                                Data-powered solutions <br/> for industrial Excellence
                            </h2>
                            <button id="sec1-button">Read More</button>
                        </div>
                    </div>
                    <div id="hm-childdiv2">
                        <img id="sec1-img" src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"></img>
                    </div>
                </div>
            </section>
            <section id="section2" className="section2andmore CommonSection" style={{overflow:"hidden"}}>
                <div className="sec2andmore-parentDiv upsidedownsections">
                    <div className="sec2andmore-childDiv1">
                        <h6 className="sec2andmore-h6">
                            Mine-To-Mill-To-Mine <br/> Optimization
                        </h6>
                        <p className="ptagtextalign">
                            NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.
                        </p>
                        <button className="sec2andmore-button">Read More</button>
                    </div>
                    <div className="sec2andmore-childDiv2">
                        <img className="sec2andmore-img" src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"></img>
                    </div>
                </div>
            </section>
            <section id="section3" className="section2andmore CommonSection" style={{overflow:"hidden"}}>
                <div className="sec2andmore-parentDiv">
                    <div className="sec2andmore-childDiv1">
                        <img className="sec2andmore-img" src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"></img>
                    </div>
                    <div className="sec2andmore-childDiv2">
                        <h6 className="sec2andmore-h6">
                            Sustainability
                        </h6>
                        <p className="ptagtextalign">
                            Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
                        </p>
                        <p className="ptagtextalign">
                            With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
                        </p>
                        <button className="sec2andmore-button" id="sec3-button">Read More</button>
                    </div>
                </div>
            </section>
            <section id="section4" className="section2andmore" style={{overflow:"hidden"}}>
                <div className="sec2andmore-parentDiv CommonSection upsidedownsections">
                    <div className="sec2andmore-childDiv1">
                        <h6 className="sec2andmore-h6">
                            Mineral Processing
                        </h6>
                        <p className="ptagtextalign">
                           NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption
                        </p>
                        <button className="sec2andmore-button" id="sec4-button">Read More</button>
                    </div>
                    <div className="sec2andmore-childDiv2">
                        <img className="sec2andmore-img" src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"></img>
                    </div>
                </div>
            </section>
            <section id="section5" className="section2andmore CommonSection" style={{overflow:"hidden"}}>
                <div className="sec2andmore-parentDiv">
                    <div className="sec2andmore-childDiv1">
                        <img className="sec2andmore-img" src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"></img>
                    </div>
                    <div className="sec2andmore-childDiv2">
                        <h6 className="sec2andmore-h6">
                            Oil & Gas
                        </h6>
                        <p className="ptagtextalign">
                            Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 
                        </p>
                        <p className="ptagtextalign">
                            NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
                        </p>
                        <button className="sec2andmore-button" id="sec5-button">Read More</button>
                    </div>
                </div>
            </section>
            <section id="footer" className="CommonSection" style={{overflow:"hidden"}}>
                <div id="footer-parent-div">
                    <img id="foot-img" src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"></img>
                    <ul className="nav-ul footer-ul">
                        <li className="nav-li"><Link className="nav-link footer-link" to="*">Home</Link></li>
                        <li className="nav-li"><Link className="nav-link footer-link" to="*">About Us</Link></li>
                        <li className="nav-li"><Link className="nav-link footer-link" to="*">Contact Us</Link></li>
                        <li className="nav-li"><Link className="nav-link footer-link" to="*">Privacy Policy</Link></li>
                        <li className="nav-li"><Link className="nav-link footer-link" to="*">Sitemap</Link></li>
                    </ul>
                    <p className="footer-p" style={{color:"gray"}}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
                    <div>
                        <FaTwitter className="footericons"></FaTwitter>
                        <FaLinkedin className="footericons"></FaLinkedin>
                    </div>
                    <p className="footer-p" style={{color:"gray",margin:"0"}}>© 2022. Ntwist Inc.</p>
                </div>
            </section>
            <p className="footer-p" style={{margin:"0"}}>Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a reCAPTCHA challenge.</p>
        </>
     );
}

export default HomePage;