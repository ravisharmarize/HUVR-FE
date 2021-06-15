const DestinationWishList = () => {
  // let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Destination Wish List</h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="destination-list-body">
              <p className="destination-para">Submit your favorite destnations want to Huvr to, and we'all start working on getting walkers available in those places.</p>
              <form>
                <div className="form-in">
                  <input type="text" placeholder="Destination" />
                </div>
                <div className="form-in">
                  <input type="text" placeholder="City" />
                </div>
                <div className="form-in">
                  <input type="text" placeholder="Country" />
                </div>
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
export default DestinationWishList;