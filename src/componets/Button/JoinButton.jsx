import React from "react";
import './style.css'
function JoinButton({ name, style }) {
  return (
    <button
      style={{
        ...style,
        
        padding: "0.5rem",
        fontWeight: "bold",
        width:'8rem',
        transition: "300ms all",
      }}
    >
      {name}
    </button>
  );
}

export default JoinButton;
