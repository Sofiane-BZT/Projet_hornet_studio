import React from "react";
import { useNavigate } from "react-router-dom";

function ContactButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Contact");
  }

  return (
    <button className="contact-button" onClick={handleClick}>
      Contactez-nous
    </button>
  );
}

export default ContactButton;
