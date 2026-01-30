import Header from "../components/Header";
import Footer from "../components/Footer";
import Bahaa from "../../assets/Images/About/Bahaa's Avatar.png";
import Hassanieh from "../../assets/Images/About/hassanieh's Avatar.png";
import Osama from "../../assets/Images/About/osama-Avatar.png";
import "../../assets/CSS/About.css";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="story">
          <h2>Our Story</h2>
          <p>
            We’re a group of three students who realized life gets a whole lot
            easier when you have good food — and a bear who knows how to cook.
            CookLab started as a small idea during exams when instant noodles
            betrayed us one too many times.
          </p>
        </section>

        <div className="pretty-line"></div>

        <section className="mission">
          <h2>Daaboolos's Mission</h2>
          <p>
            As the official Head Chef (and part-time cookie thief), our bear
            promises recipes that are warm, simple, and made with love. If it
            doesn’t pass the Bear Sniff Test™ — it doesn’t get posted.
          </p>
        </section>

        <div className="pretty-line"></div>

        <div className="team-container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src={Bahaa} alt="Member 1" />
              <h3>Bahaa El Rawass</h3>
              <p>Integrated Daaboolos AI and recipe book</p>
            </div>

            <div className="team-card">
              <img src={Hassanieh} alt="Member 2" />
              <h3>Mohammed Hassanieh</h3>
              <p>Provided the images and motivation</p>
            </div>

            <div className="team-card">
              <img src={Osama} alt="Member 3" />
              <h3>Osama Ayoub</h3>
              <p>Helped with the design and forms</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
