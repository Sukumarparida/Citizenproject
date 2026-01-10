import { useState } from "react";
import "./Roletabs.css";

function Roletabs() {
  const [active, setActive] = useState("ADMIN");

  const roles = ["ADMIN", "CITIZEN", "STAFF"];

  return (
    <div className="role-tabs">
      <div className="tabs">
        {roles.map((role) => (
          <button
            key={role}
            className={active === role ? "active" : ""}
            onClick={() => setActive(role)}
          >
            {role}
          </button>
        ))}

        <span
          className="slider"
          style={{
            transform: `translateX(${roles.indexOf(active) * 100}%)`,
          }}
        />
      </div>
    </div>
  );
}

export default Roletabs;
