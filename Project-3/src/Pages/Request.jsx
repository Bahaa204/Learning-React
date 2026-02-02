import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import daaboolos from "../../assets/Images/daaboolos.png";
import "../../assets/CSS/Form.css";

export default function Request() {
  return (
    <>
      <Header />
      <Form
        title="Request a recipe"
        description="Tell our bear chef what you're craving 🍯"
        message="Recipe Suggestion"
      />
      <img src={daaboolos} alt="Daaboolos" className="footer-bear" />
      <Footer />
    </>
  );
}
