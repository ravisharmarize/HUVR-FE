const ScheduleWalker = () => {
  // let publicUrl = process.env.PUBLIC_URL + '/';
  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Select A Walker</h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="schedule-trip-body">
              <iframe title="video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.948910039214!2d78.42041951418791!3d17.414239306615308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96d91a3e800b%3A0x9d17c8ff908a0a3b!2sAppminds%20Technology%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1617879266545!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
              <div className="schedule-popup">
                <div>
                  <div className="schedule-popup-div">
                    <h4>Select A Walker</h4>
                    <p>To Begin Your Trip Select a Walker from Live Map</p>
                    <button className="btn btn-yellow">OK</button>
                  </div>
                  <div className="schedule-btn">
                    <button className="btn btn-yellow">Schedule Trip</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ScheduleWalker;