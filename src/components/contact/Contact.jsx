import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

import "./contact.css";
import ContactItem from "./ContactItem";

const Contact = () => {
  const form = useRef();

  const [contactList, setContactList] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    errorName: "",
    errorEmail: "",
    errorMessage: "",
  });

  const sendEmailHandler = (e) => {
    e.preventDefault();

    if (!input.name) {
      setError((prevState) => ({
        ...prevState,
        errorName: "Please enter your name.",
      }));
    }

    if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      setError((prevState) => ({
        ...prevState,
        errorEmail: "Please enter a valid email address.",
      }));
    }

    if (!input.message) {
      setError((prevState) => ({
        ...prevState,
        errorMessage: "Please enter a message.",
      }));
    }

    if (
      !input.name ||
      !input.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email) ||
      !input.message
    ) {
      return;
    }

    emailjs
      .sendForm(
        "service_hfgylib",
        "template_sxo5jk8",
        form.current,
        "QpoviVkRezdZv3L9t"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text, "<<< ERROR SEND MESSAGE");
          alert("Oops, something went wrong. Please try again.");
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/json/contacts.json")
      .then((res) => res.json())
      .then((data) => setContactList(data))
      .catch((err) => console.error(err, "<<< ERROR FETCH CONTACT LIST"));
  }, []);

  useEffect(() => {
    if (error.errorName !== "" && input.name !== "") {
      setError((prevState) => ({ ...prevState, errorName: "" }));
    }
    if (
      error.errorEmail !== "" &&
      input.email !== "" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)
    ) {
      setError((prevState) => ({ ...prevState, errorEmail: "" }));
    }
    if (error.errorMessage !== "" && input.message !== "") {
      setError((prevState) => ({ ...prevState, errorMessage: "" }));
    }
  }, [
    error.errorEmail,
    error.errorMessage,
    error.errorName,
    input.email,
    input.message,
    input.name,
  ]);

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {contactList.map((list, index) => (
              <ContactItem
                key={index}
                icon={list.icon}
                title={list.title}
                detail={list.detail}
                href={list.href}
              />
            ))}
            {/* Email */}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your message</h3>

          <form
            ref={form}
            onSubmit={sendEmailHandler}
            className="contact__form"
          >
            <div className="contact__form-div">
              <label htmlFor="text" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Input your name..."
                onChange={(e) =>
                  setInput((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <label className={"contact__form-error"}>{error.errorName}</label>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Input your email..."
                onChange={(e) =>
                  setInput((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <label className={"contact__form-error"}>{error.errorEmail}</label>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="message" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write me a message..."
                onChange={(e) =>
                  setInput((prevState) => ({
                    ...prevState,
                    message: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <p className={"contact__form-error"}>{error.errorMessage}</p>

            <button className="button button--flex">
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 24"
                fill="#FFF"
                width="35"
                height="24"
                id="message"
              >
                <path
                  fill="#FFF"
                  d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
