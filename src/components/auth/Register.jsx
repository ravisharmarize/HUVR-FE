import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import $ from 'jquery';
import { isValidPhoneNumber } from 'react-phone-number-input';
import OtpInput from 'react-otp-input';

const Register = () => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumerError, setPhoneNumberError] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [hasError, setHasError] = useState({});

  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);

  const [phoneOtp, setPhoneOtp] = useState("");

  useEffect(() => {
    document.title = "Register";
  }, [phoneNumber]);

  const handlePhoneNumber = (number) => {
    if ((number !== undefined)) {
      $('#outlined-phone-number-input').prop('disabled', false);
      if (isValidPhoneNumber(number)) {
        setPhoneNumber(number);
        setPhoneNumberError("");
      } else {
        setPhoneNumberError('Please Enter valid Phone Number.');
      }
    }
  }

  const handleFocus = () => {
    if ($('#outlined-phone-number-input').val() === '') {
      $('#outlined-phone-number-input').prop('disabled', true);
      setPhoneNumberError('Please Select Country Calling Code.');
    }
  }

  const handleTermsAndCondition = (e) => {
    setTermsConditions(e.target.checked);
    let errors = {};
    setHasError(errors);
  }

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (phoneNumber === "") {
      setPhoneNumberError('Please enter Phone Number.');
      formIsValid = false;
    }
    if (!termsConditions) {
      formIsValid = false;
      errors["termsConditions"] = "Please accept the terms & conditions.";
    }
    setHasError(errors);
    return formIsValid;
  }

  const submitPhoneNumber = (e) => {
    e.preventDefault();
    console.log(phoneNumber, termsConditions)

    if (validateForm()) {
      setStepOne(false);
      setStepTwo(true);
    }
  }


  let publicUrl = process.env.PUBLIC_URL + '/';
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

            {/* step 1 */}
            {stepOne &&
              <form name="phoneVerfication" onSubmit={submitPhoneNumber}>
                <div className="form-input-box">
                  {/* <span className="moble-number">+91</span> */}
                  <label variant="subtitle2" component="label">Phone Number</label>
                  <PhoneInput
                    international={true}
                    countryCallingCodeEditable={false}
                    defaultCountry=""
                    id="outlined-phone-number-input"
                    placeholder="Enter Phone Number"
                    className={`phone-input-data`}
                    type="text"
                    name="phoneNumber"
                    margin="normal"
                    variant="outlined"
                    onFocus={handleFocus}
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                  {phoneNumerError !== "" && <p className="is-invalid">{phoneNumerError}</p>}
                </div>
                <div className="signup-two">
                  <div className="signup-checkbox checkbox-full">
                    <input
                      type="checkbox"
                      name="termsandcondition"
                      checked={termsConditions}
                      onChange={handleTermsAndCondition}
                    />
                    <label>I agree to <Link to="/" className="terms-Link">Terms & Conditions</Link></label>
                    <div className='is-invalid'>{hasError.termsConditions}</div>
                  </div>
                </div>
                <div className="form-btn">
                  <input type="submit" color="inherit" value="Sign Up" />
                </div>

                <div className="form-signup-cnt">
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </form>
            }

            {stepTwo &&
              <form>
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
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;