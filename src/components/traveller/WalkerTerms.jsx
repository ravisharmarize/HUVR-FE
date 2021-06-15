const WalkerTerms = () => {
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
              <div className="welcome-sign welcome-sign-title">
                <span>Walker Terms</span>
                <p>Please read and sign below</p>
              </div>
              <div className="welcome-terms-para">
                <span>Terms Dated <br />
											March 05, 2021 <br />
                  <strong>Huvr Walker<sup>TM</sup> Terms Addendum</strong> <br />
                  <em>Last Updated: January 7, 2021</em>
                </span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className="welcome-sign">
                <span>Sign with fingers after reading</span>
              </div>
              <div className="welcome-form">
                <p className="welcome-form-btn"><span className="edit-btn">Save</span><span className="delete-btn">Clear</span></p>
                <div className="form-in">
                  <textarea rows="4"></textarea>
                  <button className="btn btn-yellow">Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WalkerTerms
