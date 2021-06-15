import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import compose from 'recompose/compose';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Switch from "react-switch";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			left: false,
			switchMode: false
		}
	}
	handleChange = (checked) => {
		this.setState({ switchMode: checked });
	}

	toggleDrawer = (side, open) => () => {
		console.log(side, open, 'test')
		this.setState({
			[side]: open,
		});
	};

	closeDrawer = () => {
		this.setState({
			left: false
		});
	}

	handleClose = () => {
		this.setState({
			left: true
		});
	}

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = 'logo'
		// let anchor = '#';
		const pageName = this.props.location.pathname;
		let addClass = '';
		if (pageName === '/membership' ||
			pageName === '/select-destinations' ||
			pageName === '/your-trips' ||
			pageName === '/destination-wishlist' ||
			pageName === '/welcome-back' ||
			pageName === '/payment-method' ||
			pageName === '/payment-method-edit' ||
			pageName === '/add-card' ||
			pageName === '/update-card' ||
			pageName === '/gift-card' ||
			pageName === '/edit-account' ||
			pageName === '/schedule-walker' ||
			pageName === '/schedule-trip' ||
			pageName === '/walker-kit' ||
			pageName === '/payout-accounts' ||
			pageName === '/walker-terms' ||
			pageName === '/background-agreement' ||
			pageName === '/background-check' ||
			pageName === '/walk-map' ||
			pageName === '/walk-request' ||
			pageName === '/walker-profile-description' ||
			pageName === '/payment-method-walker' ||
			pageName === '/rating-details' ||
			pageName === '/welcome-back-walker' ||
			pageName === '/schedule-trip-walker' ||
			pageName === '/walker-rating') {
			addClass = ' inner-page';
		}

		return (
			<nav className={`navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top${addClass}`}>
				<div className="container nav-container">
					<div className="responsive-mobile-menu">
						<div className="mobile-logo">
							<Link to="/">
								<img src={publicUrl + "assets/images/sticky-logo.png"} alt={imgattr} />
							</Link>
						</div>
						<button className="navbar-toggler float-right mobile-hide" type="button" data-toggle="collapse" data-target="#tp_main_menu" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggle-icon">
								<span className="line" />
								<span className="line" />
								<span className="line" />
							</span>
						</button>
						<div className="nav-right-content">
							<ul className="pl-0">
								<li className="top-bar-btn-booking">
									<Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn2.png"} alt={imgattr} className="huvr-btn" /></Link>
								</li>
								<li className="search">
									<i className="ti-search" />
								</li>
								<li className="notification">
									<a className="signUp-btn" href="/#">
										<i className="fa fa-user-o" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="collapse navbar-collapse" id="tp_main_menu">
						<div className="logo-wrapper desktop-logo">
							<Link to="/" className="main-logo">
								<img src={publicUrl + "assets/images/logo.png"} alt="logo" />
							</Link>
							<Link to="/" className="sticky-logo">
								<img src={publicUrl + "assets/images/sticky-logo.png"} alt="logo" />
							</Link>
						</div>
						<ul className="navbar-nav">
							<li className="menu-item-has-children">
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/">About Huvr</Link>
							</li>
							<li className="menu-item-has-children">
								<a href="/#">Beta Destinations</a>
							</li>
							<li className="menu-item-has-children">
								<Link to="/">Our Blog</Link>
							</li>
						</ul>
					</div>
					<div className="nav-right-content">
						<ul>
							<li className="mobile-hide">
								<Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn2.png"} alt={imgattr} className="huvr-btn" /></Link>
							</li>
							<li className="menu-item-has-children mobile-hide">
								<Link to="/login">Login</Link>
							</li>
							<li className="menu-item-has-children mobile-hide">
								<Link to="/register">Sign Up</Link>
							</li>

							<li className="menu" onClick={this.toggleDrawer('left', true)}>
								<i className="fa fa-bars" ></i>
							</li>

							<li className="search mobile-hide">
								<i className="ti-search" />
							</li>
						</ul>

						<SwipeableDrawer
							open={this.state.left}
							onOpen={this.toggleDrawer('left', true)}
							docked={false}
							onClose={this.handleClose}
							className="app-drawer"
							onRequestChange={this.closeDrawer}
						>
							<div className="swipebar-row">
								<p className="mobile-icon"><i className="la la-times" onClick={this.closeDrawer}></i></p>
								<p className="login-text">Login/Signup to start your virtual journey</p>
								<div>
									<div className="profile-box-row">
										<div className={`profile-row ${this.state.switchMode === true ? 'profile-row-two' : ''}`}>
											<div className="toggle-row">
												<Switch
													onChange={(e) => this.handleChange(e)}
													checked={this.state.switchMode}
												/>
												<span className="toggle-title">{this.state.switchMode === false ? 'Traverller' : 'walKer'}</span>
											</div>
											{this.state.switchMode === false ?
												(<div className="profile-row-flex">
													<div className="profile-row-left">
														<figure>
															<img src={publicUrl + "assets/images/testimonial-img1.jpg"} alt="" />
														</figure>
													</div>
													<div className="profile-row-right">
														<h5>James Martin</h5>
														<div className="flex-div">
															<span className="rating-star">&nbsp;</span>
														</div>
													</div>
												</div>)
												:
												(<div className="profile-row-flex" >
													<div className="profile-row-left">
														<figure>
															<img src={publicUrl + "assets/images/testimonial-img1.jpg"} alt="" />
														</figure>
													</div>
													<div className="profile-row-right">
														<h5>James Martin2</h5>
														<div className="flex-div">
															<span className="rating-star">
																<span>
																	4.96
																	<i className="fa fa-star" />
																</span>
															</span>
														</div>
													</div>
												</div>)
											}
										</div>

										<div className="header-list">
											<div className="toggle-one">
												<List>
													<ListItem className="active" button>
														<ListItemText primary="Traveler" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Edit Account" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Manage Membership (coming soon)" />
													</ListItem>
													<ListItem className="submenuListTwo" button>
														<ListItemText primary="Archived Trips" />
													</ListItem>
													<ListItem className="submenuListTwo" button>
														<ListItemText primary="Join A Group Trip" />
													</ListItem>
													<ListItem className="submenuListTwo" button>
														<ListItemText primary="Schedule Your Favorite Walker" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Payment Methods" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Send a Gift Card" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Create Destination Wish List" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Help" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Settings" />
													</ListItem>
													<ListItem className="submenuList" button>
														<ListItemText primary="Sign out" />
													</ListItem>
												</List>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwipeableDrawer>

					</div>
				</div>
			</nav>

		)
	}
}


// export default Navbar


const enhance = compose(
	withRouter,
);
export default enhance(Navbar);