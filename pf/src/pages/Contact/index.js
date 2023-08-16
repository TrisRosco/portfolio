import { React, useEffect, useRef } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import PhysicsTest from "../../components/PhysicsTest";
import emailjs from "@emailjs/browser";

const Contact = () => {

  useEffect(() => {
    console.log("Contact loaded");
  }, []);

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button pressed");
    emailjs
      .sendForm(
        "service_ovomt55",
        "template_k4ul5w8",
        event.target,
        "ajBbLf733lblmWZ4K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ); 
    form.current.reset();
    alert("Message sent!");
  };

  function handleMessageCheck() {
    let input = document.getElementById("message");
    let limit = document.getElementsByClassName("input-limit")[0];
    limit.innerHTML = input.value.length + "/255";
  }



  return (
    <div className="contact-container">
      <header className="contact-header">
        <NavBar />
      </header>
      <div className="contact-content">
        <div className="contact-content-item">
          <p> Contact Me </p>
          <form className="contact-input" ref={form} onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="user_name" maxLength={50}/>
            <label>Email</label>
            <input type="email" name="user_email" maxLength={50}/>
            <label>Message</label>
            <label className="input-limit"></label>
            <textarea id="message" name="message" maxLength={255} onChange={handleMessageCheck} />
            <input id="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
