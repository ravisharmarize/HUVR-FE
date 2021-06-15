import { Link } from 'react-router-dom';
const Login = () => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <div className="signup-container-row">
      <div className="signup-row">
        <p className="modal-close" ><Link to="/"><i className="la la-times" /></Link></p>
        <div className="signup-left">
          <div className="signup-cnt">
            <h4 component="h4">Login</h4>
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
              <h4 component="h4">Welcome Back</h4>
            </div>
            <div className="form-input-box">
              <span className="moble-number">+91</span>
              <label variant="subtitle2" component="label">Phone Number</label>
              <input type="text" />
            </div>
            <div className="signup-two">
              <div className="signup-checkbox">
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <div className="signup-forgot">
                <span>Forgot Your Password?</span>
              </div>
            </div>
            <div className="form-btn">
              <input type="submit" color="inherit" value="Log In" />
            </div>
            <div className="form-signup-cnt">
              <p>Dont'y have an account? <Link to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login