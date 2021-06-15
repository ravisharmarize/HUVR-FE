import { Link } from 'react-router-dom';

const ScheduleTrip = () => {
  return (
    <>
      <div className="traveller-page">
        <div className="traveller-row">
          <div className="traveller-head">
            <div className="container">
              <div className="traveller-head-row">
                <div className="traveller-head-left">
                  <h2>Schedule a virtual trip <span className="title-small">to Hyderabad, India</span></h2>
                </div>
                <div className="traveller-head-right">
                  <p>Real time virtual travel at a click. <span className="app-icon"><i className="fa fa-apple"></i> <i className="fa fa-android"></i></span></p>
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="schedule-trip-body2">
              <div>
                <div className="schedule-pick-row">
                  <div className="schedule-pick-title">
                    <h4>Pick a Date</h4>
                    <p>(up to 7 days in the future)</p>
                  </div>
                  <div className="schedule-pick-cnt">
                    <h4>Monday</h4>
                    <p>April 05, 2021</p>
                  </div>
                </div>
                <div className="schedule-pick-row">
                  <div className="schedule-pick-title">
                    <h4>Pick a Time</h4>
                  </div>
                  <div className="schedule-pick-time">
                    <p>My TimeZone Indian<span>Standard Time</span></p>
                    <h4>10:07 AM</h4>
                    <h6>Destination Time Indian <span>Standard Time</span></h6>
                  </div>
                </div>
                <div className="schedule-pick-row">
                  <h4 className="package-title">Pick a Package</h4>
                  <div className="price-btn">10 Minuts for $15</div>
                  <div className="price-btn">20 Minuts for $25</div>
                  <div className="price-btn">30 Minuts for $35</div>
                  <div className="price-btn">40 Minuts for $45</div>
                  <div className="price-btn price-btn-last">Custom Length</div>
                </div>
                <div className="schedule-pick-row">
                  <div className="schedule-pick-btn">
                    <button className="btn btn-yellow">Request Scheduled Trip</button>
                  </div>
                  <h4 className="package-title">Important</h4>
                  <div className="schedulePickRowList">
                    <p>1. Your scheduled trip will be in <span className="text-red">Pending</span> status <span className="text-red">Until</span> the request has been <span className="text-red">Accepeted</span> by a walker.</p>
                    <p>2. Your will be notified once your request has been accepted.</p>
                    <p>You can check the status of your scheduled trips in the Upcoming section of <Link to="/">Your Trips</Link></p>
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
export default ScheduleTrip;