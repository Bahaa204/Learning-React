import { useRef, useState } from "react";
import Modal from "./Modal";
import "../../assets/CSS/Form.css";

export default function Form({ title, description, message }) {
  const formRef = useRef(null);
  const [IsOpen, setIsOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsOpen(!IsOpen);
    formRef.current.reset();
  }

  return (
    <>
      <section className="hero">
        <h1>{title}</h1>
        <p>{description}</p>
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
            <label htmlFor="message">{message}</label>
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
      <Modal IsOpen={IsOpen} setIsOpen={setIsOpen} />
    </>
  );
}
