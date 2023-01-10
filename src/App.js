import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink
          activeClassName={({ isActive }) => (isActive ? "active" : "unactive")}
          to="/component1"
        >
          Component 1
        </NavLink>

        <NavLink
          activeClassName={({ isActive }) => (isActive ? "active" : "unactive")}
          to="/component2"
        >
          component 2
        </NavLink>
      </nav>
      <div className="Instructions">
        <p className="block">
          For this exercise, you will have to change the style of the link when
          the URL matches the path. When a link is <b>active</b> it needs to be{" "}
          <b>bold</b> and <span style={{ color: "red" }}>red</span>.
          <br />
          <br />
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reacttraining.com/react-router/web/api/NavLink"
          >
            Help{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
