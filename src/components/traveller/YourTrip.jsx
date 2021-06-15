// import Box from '@material-ui/core/Box';


const YourTrip = () => {
  // let publicUrl = process.env.PUBLIC_URL + '/';

  // const a11yProps = (index) => {
  //   return {
  //     id: `simple-tab-${index}`,
  //     'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }

  // const TabPanel = (props) => {
  //   const { children, value, index, ...other } = props;
  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`simple-tabpanel-${index}`}
  //       aria-labelledby={`simple-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && (
  //         <Box p={3}>
  //           {/* <Typography>{children}</Typography> */}
  //         </Box>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Your Trips</h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="trips-tab-row">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Past</a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Upcoming</a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="panel-row">
                    <div className="panel-head">
                      <div className="panel-head-left">
                        <p>Friday April 2nd, 10:07 AM</p>
                      </div>
                      <div className="panel-head-right">
                        <div className="list-rating">
                          <span className="spanrate"><i className="fa fa-star"></i></span>
                          <span className="spanrate"><i className="fa fa-star"></i></span>
                          <span className="spanrate"><i className="fa fa-star"></i></span>
                          <span className="spanrate"><i className="fa fa-star"></i></span>
                          <span className="spanrate"><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price-rate">
                          <span><i className="fa fa-dollar"></i>10</span>
                        </div>
                        <div className="	">
                          <i className="fa fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="panel-video">
                      <iframe title="Travelers Experiances" src="https://www.youtube.com/embed/2OzRmaRusw0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <div className="subscribe-btn">
                      <button className="btn btn-yellow">Subscribe today to save more trips</button>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className="subscribe-btn subscribe-btn-cancel">
                    <button className="btn btn-yellow">Cancelled Trips</button>
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
export default YourTrip;