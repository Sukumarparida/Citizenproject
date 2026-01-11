import RoleTabs from "../components/Roletabs";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin";
import "./Login.css";

function Login({ goBack }) {
  return (
    <div className="login">

  <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/src/assets/video/herobg.mp4" type="video/mp4" />
      </video>

    <div className="video-overlay"></div>
    
      {/* BACK BUTTON */}
      <div className="back-btn-wrapper">
        <Button text="←" variant="secondary" onClick={goBack} />
      </div>

      <div className="login-wrapper">
        <div className="login-card">
          <h1 className="logintext">Login with Email</h1>

          <RoleTabs />

          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />

          {/* LOGIN BUTTON */}
          <Button text="LOGIN" onClick={goBack} />

          <div className="forgot-wrapper">
            <span className="forgot-text">Forgot password ?</span>
          </div>
        </div>

        <SocialLogin />
      </div>
    </div>
  );
}

export default Login;
