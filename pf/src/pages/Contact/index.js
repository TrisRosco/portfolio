import { React, useEffect, useRef } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    console.log("Contact loaded");
  }, []);

  const form = useRef();

  const checkValidity = (event) => {
    let name = document.getElementsByName("user_name")[0];
    let email = document.getElementsByName("user_email")[0];
    let message = document.getElementById("message");

    if (name.value.length < 1) {
      alert("Name is empty");
      event.preventDefault();
    } else if (email.value.length < 1) {
      alert("Email is empty");
      event.preventDefault();
    } else if (message.value.length < 1) {
      alert("Please enter a message");
      event.preventDefault();
    } else if (message.value.length < 10) {
      alert("Message is too short");
      event.preventDefault();
    } else {
      handleSubmit(event);
    }
  };

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

    if (input.value.length > 54 || input.value.length < 2) {
      limit.classList.add("name-limit-error");
    } else {
      limit.classList.remove("name-limit-error");
    }
  }

  function handleEmailCheck() {
    let input = document.getElementsByName("user_email")[0];
    let limit = document.getElementsByClassName("email-limit")[0];
    limit.innerHTML = input.value.length + "/55";

    if (input.value.length > 54 || input.value.length < 5) {
      limit.classList.add("email-limit-error");
    } else {
      limit.classList.remove("email-limit-error");
    }
  }

  function handleMessageCheck() {
    let input = document.getElementById("message");
    let limit = document.getElementsByClassName("message-limit")[0];
    limit.innerHTML = input.value.length + "/255";

    if (input.value.length > 254 || input.value.length < 10) {
      limit.classList.add("message-limit-error");
      limit.innerHTML = input.value.length + "/255 (Min 10 characters)";
    }
    if (input.value.length === 255) {
      limit.classList.add("message-limit-error");
      limit.innerHTML = input.value.length + "/255 (Max 255 characters)";
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
          <form className="contact-input" ref={form} onSubmit={checkValidity}>
            <label>Name</label>
            <div classname="input-container">
              <label className="name-limit"></label>
              <input
                type="text"
                name="user_name"
                maxLength={55}
                onChange={handleNameCheck}
              />
            </div>
            <label>Email</label>
            <div classname="input-container">
              <label className="email-limit"></label>
              <input
                type="email"
                name="user_email"
                maxLength={55}
                onChange={handleEmailCheck}
              />
            </div>
            <label>Message</label>
            <div classname="input-container">
              <label className="message-limit"></label>
              <textarea
                id="message"
                name="message"
                maxLength={255}
                onChange={handleMessageCheck}
              />
            </div>
            <input id="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
