const WelcomeBack = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Welcome Profile</h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="travelle-body">
              <div className="profile-row">
                <div className="profile-left">
                  <figure>
                    <img src={publicUrl + "assets/images/inner-page/profile.jpg"} alt="" />
                  </figure>
                  <div className="profile-title">
                    <h4>Welcome Back,</h4>
                    <p>Prasad Babu</p>
                  </div>
                </div>
                <div className="profile-right">
                  <figure>
                    <img src={publicUrl + "assets/images/favicon.png"} alt="" />
                  </figure>
                  <span>Traveler</span>
                </div>
              </div>
              <figure className="coming-soon">
                <img src={publicUrl + "assets/images/inner-page/Verified-Virtual-Walker.png"} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WelcomeBack;