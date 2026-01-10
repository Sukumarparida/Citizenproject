import "./SocialLogin.css";

function SocialLogin() {
  return (
    <div className="social-login">
      <p className="social-text">Login with Others</p>

      <div className="social-icons">
        <button className="social-btn google">
          <i className="fa-brands fa-google"></i>
        </button>

        <button className="social-btn facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </button>

        <button className="social-btn apple">
          <i className="fa-brands fa-apple"></i>
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
