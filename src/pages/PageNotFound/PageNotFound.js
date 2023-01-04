import React from "react";
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "10vw" }}>404</div>
      <div>Page Not Found!</div>
      <Link to="/">
      <button
                type="button"
                class="btn btn-outline-secondary"
                style={{
                  color: "white",
                  backgroundColor:"red"
                }}
                to="/"
              >
                GO BACK TO SAFE ZONE
              </button>
              </Link>
    </div>
</>
  );
}

export default PageNotFound;
