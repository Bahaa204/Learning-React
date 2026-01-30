import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/CSS/Contact.css";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [IsOpen, setIsOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsOpen(!IsOpen);
    formRef.current.reset();
  }

  return (
    <>
      <Header />
      <section className="hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="file-upload">Upload Media (Optional)</label>
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              accept="image/*,video/*,.pdf,.doc,.docx"
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
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
