import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import OtpInput from 'react-otp-input';

const RegisterStepTwo = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [hasError, setHasError] = useState({});
  const [phoneOtp, setPhoneOtp] = useState("");

  useEffect(() => {
    document.title = "Register Otp Verification";
  }, []);

  const submitOTP = (e) => {
    e.preventDefault();
  }

  return (
    <div className="signup-container-row">
      <div className="signup-row">
        <p className="modal-close" ><Link to="/"><i className="la la-times" /></Link></p>
        <div className="signup-left">
          <div className="signup-cnt">
            <h4 component="h4">Sign Up</h4>
            <p>Huvr is an app connecting virtual Travelers to human Huvr approved Walkers across the globe. They provide individual or group experiences unlike anything on the market today.</p>
            <Link to="/" className="btn"><i className="fa fa-external-link"></i> Learn More</Link>
          </div>
        </div>
        <div className="signup-right">
          <div className="signup-form">
            <div className="form-title">
              <figure>
                <img src={publicUrl + "assets/images/favicon.png"} alt="" />
              </figure>
              <h4 component="h4">Welcome to Huvr</h4>
            </div>
            <form onSubmit={submitOTP}>
              <div className="form-input-box">
                <label variant="subtitle2" component="label">Enter OTP Here</label>
                <div className="otp-input">
                  <OtpInput
                    variant="outlined"
                    name="phoneOtp"
                    margin="normal"
                    // className={otpFail === false ? classes.textField : classes.errorMessage}
                    // onChange={handleOtpInputChange}
                    numInputs={5}
                    value={phoneOtp}
                    shouldAutoFocus={true}
                    separator={<span>-</span>
                    }
                  />
                </div>
                <div className="form-btn">
                  <input type="submit" color="inherit" value="Verify OTP" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegisterStepTwo;