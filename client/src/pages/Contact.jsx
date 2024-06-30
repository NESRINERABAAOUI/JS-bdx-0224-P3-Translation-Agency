import { useState } from "react";
import "../styles/ContactForm.scss";

function ContactForm() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`${username} Your form has been submitted successfully!`);
  };
  return (
    <>
      <h2 className="contactTitle">Send us a message</h2>
      <form className="ContactForm" onSubmit={handleSubmit}>
        <label className="labelContact" htmlFor="username">
          Username
        </label>
        <input
          className="inputContact"
          type="text"
          minLength="5"
          id="username"
          required
          onChange={(e) => setusername(e.target.value)}
        />
        <label className="labelContact" htmlFor="email">
          Email
        </label>
        <input
          className="inputContact"
          type="email"
          id="email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <label className="labelContact" htmlFor="message">
          Message
        </label>
        <textarea
          className="textareaContact"
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
          onChange={(e) => setmsg(e.target.value)}
        />
        <button className="contactButton" type="submit" aria-label="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
