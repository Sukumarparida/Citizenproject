import { useState } from "react";
import Welcome from "./Pages/WelcomeLogin";
import Login from "./Pages/Login";

function App() {
  const [page, setPage] = useState("welcome");
  const [transition, setTransition] = useState(false);

  const goToLogin = () => {
    setTransition(true);
    setTimeout(() => {
      setPage("login");
      setTransition(false);
    }, 400);
  };

  const goToWelcome = () => {
    setPage("welcome");
  };

  return (
    <>
      {page === "welcome" && (
        <Welcome goToLogin={goToLogin} transition={transition} />
      )}

      {page === "login" && (
        <Login goBack={goToWelcome} />
      )}
    </>
  );
}

export default App;
