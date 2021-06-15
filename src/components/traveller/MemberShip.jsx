const Membership = () => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Membership</h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="travelle-body">
              <figure className="coming-soon">
                <img src={publicUrl + "assets/images/inner-page/comingSoon.png"} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Membership;