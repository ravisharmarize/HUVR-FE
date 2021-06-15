const WalkerKit = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Walker Kit</h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="walkerkit-body">
              <div className="walkerkit-row">
                <figure>
                  <img src={publicUrl + "assets/images/inner-page/phoneKit.png"} alt="" />
                  <span>$0.00 USD</span>
                </figure>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <div className="walkerkit-row">
                <figure>
                  <img src={publicUrl + "assets/images/inner-page/phoneKit.png"} alt="" />
                  <span>$0.00 USD</span>
                </figure>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
              <form className="walker-form">
                <div className="form-in">
                  <label>Select Country</label>
                  <select>
                    <option>India</option>
                  </select>
                  <figure class="walker-flag"><img src="/assets/images/inner-page/flag.png" alt="" /></figure>
                </div>
                <div className="form-in">
                  <label>Street Address</label>
                  <textarea type="text" rows="4" />
                </div>
                <div className="form-in">
                  <label>City</label>
                  <input type="text" />
                </div>
                <div className="formin-row">
                  <div className="formin-half">
                    <div className="form-in">
                      <label>State</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="formin-half">
                    <div className="form-in">
                      <label>Zip Code</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>I understand that Huvr is not requiring me to purchase a Walker Kit in Beta but a stabilizer stick is HIGHLY recommended for the best user experience.</span>
                </label>
                <div className="form-btn">
                  <button className="btn btn-yellow">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WalkerKit;