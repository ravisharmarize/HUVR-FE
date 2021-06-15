const EditAccount = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Edit Account</h2>
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
              <div className="edit-form-row">
                <div className="form-in">
                  <label>First Name</label>
                  <input type="text" placeholder="Prasad" />
                </div>
                <div className="form-in">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last" />
                </div>
                <div className="form-in form-in-flag">
                  <label>Phone Number</label>
                  <select>
                    <option>+91 (965) 272-5128</option>
                  </select>
                  <figure className="form-card-flag">
                    <img src={publicUrl + "assets/images/inner-page/flag.png"} alt="" />
                  </figure>
                </div>
                <div className="form-in">
                  <label>Email</label>
                  <input type="text" placeholder="prasadkatra@gmail.com" />
                  <span className="form-verify">Verify</span>
                </div>
                <div className="form-btn">
                  <button className="btn btn-yellow">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditAccount;