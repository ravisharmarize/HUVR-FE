
import { Link } from 'react-router-dom';
import Banner from '../components/banner';
const Home = () => {

  let publicUrl = process.env.PUBLIC_URL + '/'
  let imgattr = 'logo'

  return (
    <>
      <Banner />
      {/* serah section */}
      <div className="search-area tp-main-search-area viaje-go-top">
        <div className="container">
          <div className="tp-main-search">
            <div className="row">
              <div className="col-lg-10 col-md-8">
                <div className="tp-search-single-wrap">
                  <input className="w-100" type="text" placeholder="Search our Available Beta Destinations" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 order-12">
                <Link className="btn btn-yellow" to="/"><i className="ti-search" /> Search</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* intro section  */}
      <div className="intro-area pd-top-112">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
                <h4 className="intro-title">
                  <span className="intro-count">01</span>
                  <Link className="intro-cat" to="/">Select a Destination</Link>
                </h4>
                <p>Simply login to the Huvr App and select any of the Pre-Loaded Destinations</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
                <h4 className="intro-title">
                  <span className="intro-count">02</span>
                  <Link className="intro-cat" to="/">Select a Walker</Link>
                </h4>
                <p>Once you are in Live Huvr Map, simply select the Huvr Walker of your choice</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
                <h4 className="intro-title">
                  <span className="intro-count">03</span>
                  <Link className="intro-cat" to="/">Go Live and Explore</Link>
                </h4>
                <p>Finally, select a time package and you can instantly <span className="text-big">Go-Live</span>, or you can schedule a trip to suit your calendar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* offer section  */}
      <div className="offer-area pd-top-70 offer-area-row">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">Our Beta Destinations</h2>
                <p>
                  <span className="text-block">Forget canned virtual travel and pre-recorded videos.</span>
                  <span className="text-block">Explore the world and experience virtual teleportation in real-time.</span>
                  <span className="text-block">You are in the drivers seat and if you seek, you shall find plenty with Huvr.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="destinations-list-slider-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
                <div className="destinations-list-slider">
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <img src={publicUrl + "assets/images/destination-list/1.png"} alt="list" />
                      </div>
                      <div className="details">
                        <h4 className="title">Opera House</h4>
                        <h5 className="title">Sydney, Australia</h5>
                        <p className="content">The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings</p>
                        <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <img src={publicUrl + "assets/images/destination-list/3.png"} alt="list" />
                      </div>
                      <div className="details">
                        <h4 className="title">Christ the Redeemer</h4>
                        <h5 className="title">Rio de Jenero, Brazil</h5>
                        <p className="content">Giant (98-ft.-tall) mountaintop statue of Jesus Christ, accessed by train & offering city views.</p>
                        <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <img src={publicUrl + "assets/images/destination-list/4.png"} alt="list" />
                      </div>
                      <div className="details">
                        <h4 className="title">Bolsa Palace</h4>
                        <h5 className="title">Porto, Portugal</h5>
                        <p className="content">Huge, 19th-century landmark building with rooms for private events, a restaurant & guided tours.</p>
                        <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <img src={publicUrl + "assets/images/destination-list/5.png"} alt="list" />
                      </div>
                      <div className="details">
                        <h4 className="title">Big Ben</h4>
                        <h5 className="title">London, England</h5>
                        <p className="content">Big Ben has chimed with a slightly different tone ever since, and is still in use today with the crack unrepaired.</p>
                        <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <img src={publicUrl + "assets/images/destination-list/6.png"} alt="list" />
                      </div>
                      <div className="details">
                        <h4 className="title">Garden of Gods</h4>
                        <h5 className="title">Colorado Springs, CO, USA</h5>
                        <p className="content">Comprising 1,300 acres of sandstone formations, this park offers a visitor center & hiking trails.</p>
                        <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 align-self-center order-lg-11">
                <div className="container">
                  <div className="destinations-slider-controls">
                    <div className="slider-nav tp-control-nav" />
                    {/*slider-nav*/}
                    <div className="tp-slider-extra slider-extra">
                      <div className="text">
                        <span className="first">01 </span>
                        <span className="last" />
                      </div>
                      {/*text*/}
                      <div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                        <span className="slider__label sr-only" />
                      </div>
                    </div>
                    {/*slider-extra*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="video-area tp-video-area pd-top-110 video-area-row" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/bg/7.png)' }}>
        <div className="container viaje-go-top">
          <div className="row">
            <div className="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
              <div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
                <h2 className="title">What Do You Know <br /> About US</h2>
                <p>HUVR is a global virtual marketplace, that connects Human Walkers to Virtual Travelers who want to explore the world in real-time.</p>
                <p>With thousands of destinations that you can visit from your smartphone, whether you  are using the app as an inspired traveler, an investor or someone who loves to shop, educate or simply experience an array of culture and happenings in another country or city - Huvr can take you there.</p>
                <Link className="btn btn-yellow" to="/"><span>Read More<i className="la la-arrow-right" /></span></Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 offset-xl-1 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
              <div className="video-popup-wrap">
                <div className="thumb">
                  <img src={publicUrl + "assets/images/video.png"} alt="video" />
                </div>
                <div className="video-popup-btn">
                  <a href="https://vimeo.com/525230363/89efd44e6b" target="_blank" rel="noreferrer"  className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holiday plan  */}
      <div className="holiday-plan-area tp-holiday-plan-area mg-top-96 holiday-plan-area-row" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/bg/8.png)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="section-title text-center">
                <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">New Destinations</h2>
                <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">Here are the Newest Destination <span className="text-block">Huvr has to offer.</span></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                <div className="thumb">
                  <img src={publicUrl + "assets/images/destination-list/maldives.png"} alt="list" />
                </div>
                <div className="details">
                  <p className="location"><img src={publicUrl + "assets/images/icons/1.png"} alt="map" />Maldives</p>
                  <h4 className="title">Hurawalhi Island</h4>
                  <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.2s">
                <div className="thumb">
                  <img src={publicUrl + "assets/images/destination-list/indonesia.png"} alt="list" />
                </div>
                <div className="details">
                  <p className="location"><img src={publicUrl + "assets/images/icons/1.png"} alt="map" />Indonesia</p>
                  <h4 className="title">Bali Province</h4>
                  <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.3s">
                <div className="thumb">
                  <img src={publicUrl + "assets/images/destination-list/bangladesh.png"} alt="list" />
                </div>
                <div className="details">
                  <p className="location"><img src={publicUrl + "assets/images/icons/1.png"} alt="map" />Bangladesh</p>
                  <h4 className="title">Cox's bazar Sea Beach</h4>
                  <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="1.1s" data-wow-delay="0.4s">
                <div className="thumb">
                  <img src={publicUrl + "assets/images/destination-list/spain.png"} alt="list" />
                </div>
                <div className="details">
                  <p className="location"><img src={publicUrl + "assets/images/icons/1.png"} alt="map" />Spain</p>
                  <h4 className="title">Barcelona city beach</h4>
                  <Link className="btn btn-yellow" to="/"><img src={publicUrl + "assets/images/huvr-btn.png"} alt={imgattr} className="huvr-btn" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reivew section  */}

      <div className="client-review-area client-review-area-home client-review-area-row pd-top-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="thumb wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                <div className="client-review-thumb">
                  <img src={publicUrl + "assets/images/travel-map.png"} alt="review" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-client-review wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                <p className="sub-title">A spotlight On</p>
                <h3 className="location-name">Huvr</h3>
                <p>Huvr is an app connecting virtual Travelers to human "Huvr approved" Walkers across the globe. Our Certified and Trained Huvr Walkers provide individual or group experience unlike anything on the market today.</p>
                <p>We are currently in Beta mode and have about 20 destinations in 10 countries available for virtual travel experiences...but we add destinations at the time.</p>
                <p className="travel-head">Our Mission is Simple:</p>
                <p>It is to ignite global opportunity to communities and economies at scale. We do this by creating jobs that supply unrivaled experiences to inspired travelers, all in real-time via our virtual travel app.</p>
                <div className="media">
                  <div className="media-left">
                    <img src={publicUrl + "assets/images/testimonial-img1.png"} alt="client" />
                  </div>
                  <div className="media-body">
                    <h6>Jaime-Lee Fraser</h6>
                    <p>Chief Marketing Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog section  */}

      <div className="blog-area pd-top-120 viaje-go-top blog-area-row">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-blog single-blog-wrap style-two">
                <div className="thumb single-blog-left-wrap">
                  <img src={publicUrl + "assets/images/blog/1.png"} alt="blog" />
                </div>
                <div className="single-blog-details single-blog-right-wrap">
                  <Link className="tag" to="/blog-details">Europe</Link>
                  <p className="date">19 September 2019</p>
                  <h4 className="title">Why You Shouldn’t Ride Elephants In France.</h4>
                  <p className="content">Kava contains 30 demos as for now, and we’re planning to release more! Except demos, Kava theme has more and more features for.. users, business, companies, developers, bloggers and other categories of users. Even if you are an absolute beginner</p>
                  <Link className="btn btn-yellow" to="/"><span>Read More<i className="la la-arrow-right" /></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-blog style-three">
                    <div className="thumb">
                      <img src={publicUrl + "assets/images/blog/2.png"} alt="blog" />
                    </div>
                    <div className="single-blog-details-wrap">
                      <div className="single-blog-details text-center">
                        <Link className="tag" to="/blog-details">Europe</Link>
                        <p className="date">19 September 2019</p>
                        <h4 className="title">Why You Shouldn’t Ride Elephants In Thailand</h4>
                        <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-blog style-three">
                    <div className="thumb">
                      <img src={publicUrl + "assets/images/blog/3.png"} alt="blog" />
                    </div>
                    <div className="single-blog-details-wrap">
                      <div className="single-blog-details text-center">
                        <Link className="tag" to="/blog-details">Europe</Link>
                        <p className="date">18 September 2019</p>
                        <h4 className="title">10 Best Highways for Romantic Long Drive</h4>
                        <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-blog style-three">
                    <div className="thumb">
                      <img src={publicUrl + "assets/images/blog/4.png"} alt="blog" />
                    </div>
                    <div className="single-blog-details-wrap">
                      <div className="single-blog-details text-center">
                        <Link className="tag" to="/blog-details">Europe</Link>
                        <p className="date">18 September 2019</p>
                        <h4 className="title">Rock Climbing Limestone Cliffs At Railay Beach</h4>
                        <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-blog style-three">
                    <div className="thumb">
                      <img src={publicUrl + "assets/images/blog/5.png"} alt="blog" />
                    </div>
                    <div className="single-blog-details-wrap">
                      <div className="single-blog-details text-center">
                        <Link className="tag" to="/blog-details">Europe</Link>
                        <p className="date">19 September 2019</p>
                        <h4 className="title">Magic In The Sky: Chasing Iceland’s Lights</h4>
                        <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Section */}
      <div className="ads-area pd-top-90 viaje-go-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <Link className="ads-thumb" to="/">
                <img src={publicUrl + "assets/images/blog/blog-banner.png"} alt="ads" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* subscribe */}
      <div className="newslatter-area pd-top-120 newslatter-area-row">
        <div className="container">
          <div className="newslatter-area-wrap border-tp-solid">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
                <div className="section-title mb-md-0">
                  <h2 className="title">Newsletter</h2>
                  <p>Sign up to receive the best offers</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
                <form>
                  <div className="input-group newslatter-wrap">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-envelope" /></span>
                    </div>
                    <input name="email" type="text" className="form-control" placeholder="Email" />
                    <div className="input-group-append">
                      <input type="submit" className="btn btn-yellow vaijesubmit" value="Subscribe" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;