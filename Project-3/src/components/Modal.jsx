export default function Modal({ IsOpen, setIsOpen }) {
  return (
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
  );
}
