import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Contact() {
  return (
    <>
      <Header />
      <Form
        title="Contact Us"
        description="We'd love to hear from you! Fill out the form below to get in touch."
        message="Message"
      />
      <Footer />
    </>
  );
}
