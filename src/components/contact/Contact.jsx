import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hfgylib",
      "template_sxo5jk8",
      form.current,
      "QpoviVkRezdZv3L9t"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {/* Email */}
            <div className="contact__card">
              <div className="bx bx-mail-send contact__card-icon"></div>

              <h3 className="contact__card-title ">Email</h3>
              <span className="contact__card-data">
                itsfahmiefendy@gmail.com
              </span>

              <a
                href="mailto:itsfahmiefendy@gmail.com"
                className="contact__button"
              >
                Contact me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="contact__card">
              <div className="bx bxl-whatsapp contact__card-icon"></div>

              <h3 className="contact__card-title ">WhatsApp</h3>
              <span className="contact__card-data">+62813 7981 6407</span>

              <a
                href="https://wa.me/+6281379816407"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Contact me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Line */}
            <div className="contact__card">
              <div className="uil uil-line contact__card-icon"></div>

              <h3 className="contact__card-title ">Line</h3>
              <span className="contact__card-data">fahmie-</span>

              <a
                href="http://line.me/ti/p/~fahmie-"
                className="contact__button"
              >
                Contact me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
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
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Input your email..."
              />
            </div>

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
              ></textarea>
            </div>

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
