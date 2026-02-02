import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";

export default function Contact() {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <Form
        title="Contact Us"
        description="We'd love to hear from you! Fill out the form below to get in touch."
        message="Message"
      />
      <Footer />
      <div
        className={`modal ${IsOpen ? "fade-in" : "fade-out"}`}
        style={{ display: IsOpen ? "flex" : "none" }}
      >
        <div className="modal-content">
          <p>Thank you! Your request has been received.</p>
          <button className="close-modal" onClick={() => setIsOpen(!IsOpen)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
