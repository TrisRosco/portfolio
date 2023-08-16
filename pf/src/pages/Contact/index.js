import { React, useEffect, useRef } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
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

  function handleNameCheck() {
    let input = document.getElementsByName("user_name")[0];
    let limit = document.getElementsByClassName("name-limit")[0];
    limit.innerHTML = input.value.length + "/55";

    if (input.value.length > 54) {
      limit.classList.add("name-limit-error");
    } else {
      limit.classList.remove("name-limit-error");
    }
  }

  function handleEmailCheck() {
    let input = document.getElementsByName("user_email")[0];
    let limit = document.getElementsByClassName("email-limit")[0];
    limit.innerHTML = input.value.length + "/55";

    if (input.value.length > 54) {
      limit.classList.add("email-limit-error");
    } else {
      limit.classList.remove("email-limit-error");
    }
  }

  function handleMessageCheck() {
    let input = document.getElementById("message");
    let limit = document.getElementsByClassName("message-limit")[0];
    limit.innerHTML = input.value.length + "/255";

    if (input.value.length > 254) {
      limit.classList.add("message-limit-error");
    } else {
      limit.classList.remove("message-limit-error");
    }
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
            <label className="name-limit"></label>
            <input
              type="text"
              name="user_name"
              maxLength={55}
              onChange={handleNameCheck}
            />
            <label>Email</label>
            <label className="email-limit"></label>
            <input
              type="email"
              name="user_email"
              maxLength={55}
              onChange={handleEmailCheck}
            />
            <label>Message</label>
            <label className="message-limit"></label>
            <textarea
              id="message"
              name="message"
              maxLength={255}
              onChange={handleMessageCheck}
            />
            <input id="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
