import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        // let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" style={{backgroundImage: 'url('+publicUrl+'assets/images/bg/2.png)'}}>
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-5 col-md-6">
				        <div className="footer-widget widget">
				          <div className="about_us_widget">
				            <Link to="/" className="footer-logo"> 
				              <img src={publicUrl+"assets/images/footer-logo.png"} alt="footer logo" />
				            </Link>
				            <p>Forget canned virtual travel and pre-recorded videos. <span className="text-block">Explore the world and experience virtual teleportation in real-time.</span> <span className="text-block">You are in the drivers seat and if you seek, you shall find plenty with Huvr.</span></p>
				            <ul className="social-icon">
				              <li>
				                <a className="facebook" href="https://www.facebook.com/huvrapp" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" /></a>
				              </li>
				              <li>
				                <a className="twitter" href="https://twitter.com/HuvrApp" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" /></a>
				              </li>
				              <li>
				                <a className="pinterest" href="https://www.instagram.com/huvrapp/" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" /></a>
				              </li>
							  <li>
				                <a className="pinterest" href="https://www.linkedin.com/company/69161747/" target="_blank"  rel="noreferrer"><i className="fa fa-linkedin" /></a>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
					  	<div className="footer-widget widget">
				          <h4 className="widget-title">For Businesses</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><a href="https://marketing.huvr.com/huvrpro/" target="_blank"  rel="noreferrer">huvr Pro</a></li>
				            <li><a href="https://marketing.huvr.com/huvrcares/" target="_blank"  rel="noreferrer">Huvr Cares</a></li>
				            <li><a href="https://marketing.huvr.com/huvrpro/" target="_blank"  rel="noreferrer">Huvr Educate</a></li>
				            <li><a href="https://marketing.huvr.com/advertising/" target="_blank"  rel="noreferrer">Advertise</a></li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget body-font">
				          <h4 className="widget-title">Quick Link</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/">Home</Link></li>
				            <li><Link to="/">About Us</Link></li>
				            <li><Link to="/">Destinations</Link></li>
				            <li><Link to="/">Blog</Link></li>
				            <li><a href="https://marketing.huvr.com/contact-us/" target="_blank"  rel="noreferrer">Contact</a></li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget body-font">
				          <h4 className="widget-title">Instagram Gallery</h4>
				          <ul className="widget-instagram-feed">
				            <li><a href="/#"><img src={publicUrl+"assets/images/footer/1.png"} alt="img" /></a></li>
				            <li><a href="/#"><img src={publicUrl+"assets/images/footer/2.png"} alt="img" /></a></li>
				            <li><a href="/#"><img src={publicUrl+"assets/images/footer/3.png"} alt="img" /></a></li>
				            <li><a href="/#"><img src={publicUrl+"assets/images/footer/4.png"} alt="img" /></a></li>
				            <li><a href="/#"><img src={publicUrl+"assets/images/footer/5.png"} alt="img" /></a></li>
				            <li><a href="/#"><img src={publicUrl+"assets/images/footer/6.png"} alt="img" /></a></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
					© 2021 Huvr, Inc. All International Rights Reserved.
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1