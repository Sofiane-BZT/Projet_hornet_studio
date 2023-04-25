import React from "react";
import ContactButton from "./ContactButton";
function ContactSection() {
  return (
    <>
      <div className="contact-section center">
        <div className="contact-text center">
          <p>
            Un projet en tête, un souhait de tatouage, une demande de devis ?
          </p>
        </div>
        <div className="contact_button center">
          <ContactButton />
        </div>
      </div>
    </>
  );
}

export default ContactSection;
