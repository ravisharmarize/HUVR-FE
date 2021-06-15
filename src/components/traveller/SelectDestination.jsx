const SelectDestination = () => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Select A Destination <span className="upcoming-walk">Upcoming Walk<em>5</em></span></h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="destination-body">
              <div className="destination-box">
                <div className="box-left">
                  <figure>
                    <img alt="" src={publicUrl + "assets/images/inner-page/opera.jpg"} />
                  </figure>
                </div>
                <div className="box-center">
                  <h4>Opera House</h4>
                  <p>Sydney Australia</p>
                </div>
                <div className="box-right">
                  <i className="fa fa-angle-right" data-toggle="modal" data-target="#myModal"></i>
                </div>
              </div>
              <div className="destination-box">
                <div className="box-left">
                  <figure>
                    <img alt="" src={publicUrl + "assets/images/inner-page/opera.jpg"} />
                  </figure>
                </div>
                <div className="box-center">
                  <h4 variant="h4">Opera House</h4>
                  <p>Sydney Australia</p>
                </div>
                <div className="box-right">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="destination-box">
                <div className="box-left">
                  <figure>
                    <img alt="" src={publicUrl + "assets/images/inner-page/opera.jpg"} />
                  </figure>
                </div>
                <div className="box-center">
                  <h4 variant="h4">Opera House</h4>
                  <p>Sydney Australia</p>
                </div>
                <div className="box-right">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="destination-box">
                <div className="box-left">
                  <figure>
                    <img alt="" src={publicUrl + "assets/images/inner-page/opera.jpg"} />
                  </figure>
                </div>
                <div className="box-center">
                  <h4 variant="h4">Opera House</h4>
                  <p>Sydney Australia</p>
                </div>
                <div className="box-right">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="destination-box">
                <div className="box-left">
                  <figure>
                    <img alt="" src={publicUrl + "assets/images/inner-page/opera.jpg"} />
                  </figure>
                </div>
                <div className="box-center">
                  <h4 variant="h4">Opera House</h4>
                  <p>Sydney Australia</p>
                </div>
                <div className="box-right">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="destination-box">
                <div className="box-left">
                  <figure>
                    <img alt="" src={publicUrl + "assets/images/inner-page/opera.jpg"} />
                  </figure>
                </div>
                <div className="box-center">
                  <h4 variant="h4">Opera House</h4>
                  <p>Sydney Australia</p>
                </div>
                <div className="box-right">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="destination-box">
                <div className="box-left">
                  <figure>
                    <img alt="" src={publicUrl + "assets/images/inner-page/opera.jpg"} />
                  </figure>
                </div>
                <div className="box-center">
                  <h4 variant="h4">Opera House</h4>
                  <p>Sydney Australia</p>
                </div>
                <div className="box-right">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popup start here */}
      <div className="modal fade destination-body-popup" id="myModal">
        <div>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content payment-popup-body">
              <div className="popup-scroll">
                <button type="button" className="close" data-dismiss="modal"><i className="la la-times"></i></button>
                <figure className="destination-img">
                  <img src={publicUrl + "assets/images/inner-page/destination-img.jpg"} alt="" />
                </figure>
                <div className="payment-popup-cnt">
                  <h4>Welcome to Ntr Stadium</h4>
                  <em>Guduivada, Andhra Pardhesh, India</em>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className="payment-popup-btn">
                <button className="btn btn-yellow">Huvr there Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default SelectDestination;