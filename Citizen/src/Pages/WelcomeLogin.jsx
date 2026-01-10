import Button from "../components/Button";
import "./WelcomeLogin.css";


function Welcome({ goToLogin }) {
  return (
    <div className="welcome">
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
      <h1>WELCOME TO CITIZEN</h1>
      <Button text="GO TO LOGIN" onClick={goToLogin} />
    </div>
  );
}

export default Welcome;

