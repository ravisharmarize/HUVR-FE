import { useEffect, useState } from 'react';
import { withApollo } from "react-apollo";
import { withRouter, Link } from 'react-router-dom';

import compose from 'recompose/compose';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import $ from 'jquery';
import { isValidPhoneNumber } from 'react-phone-number-input';
import OtpInput from 'react-otp-input';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


const Register = (props) => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumerError, setPhoneNumberError] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [hasError, setHasError] = useState({});

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    document.title = "Register";
    console.log(props,)
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
      // props.
      // otp-verification
      props.history.push('/otp-verification');
    }
  }

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #f3941e;
`;


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

            <form name="phoneVerfication" onSubmit={submitPhoneNumber}>
              {/* <div className="loader"><ClipLoader color={color} loading={loading} css={override} size={100} /></div> */}
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

          </div>
        </div>
      </div>
    </div>
  )
}

// export default Register;
const enhance = compose(
  withRouter,
  withApollo
);
export default enhance(Register);