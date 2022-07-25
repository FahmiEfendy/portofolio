import { useRef, useState } from "react";
import { ReactComponent as PhoneLogo } from "../../img/icons/phone.svg";
import { ReactComponent as MailLogo } from "../../img/icons/mail.svg";
import { ReactComponent as HomeLogo } from "../../img/icons/home.svg";
import { ReactComponent as LinkedInLogo } from "../../img/icons/linkedin.svg";
import { ReactComponent as DribbbleLogo } from "../../img/icons/dribbble.svg";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfgylib",
        "template_sxo5jk8",
        formRef.current,
        "QpoviVkRezdZv3L9t"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <div className="Contact__Background"></div>
      <div className="Contact__Wrapper">
        <div className="Contact__Wrapper-Left">
          <h1 className="Contact__Title">Catch Up With Me!</h1>
          <div className="Contact__Info">
            <div className="Contact__Info--Item">
              <PhoneLogo className="Contact__Icon" />
              +628 13 7981 6407
            </div>
            <div className="Contact__Info--Item">
              <MailLogo className="Contact__Icon" />
              itsfahmiefendy@gmail.com
            </div>
            <div className="Contact__Info--Item">
              <DribbbleLogo className="Contact__Icon" />
              <a href="https://dribbble.com/fahmiefendy">
                https://dribbble.com/fahmiefendy
              </a>
            </div>
            <div className="Contact__Info--Item">
              <LinkedInLogo className="Contact__Icon" />
              <a href="https://www.linkedin.com/in/fahmi-efendy/">
                https://www.linkedin.com/in/fahmi-efendy/
              </a>
            </div>
            <div className="Contact__Info--Item">
              <HomeLogo className="Contact__Icon" id="Contact__Icon--Home" />
              Pademangan Raya 3 Street, Pademangan Timur, Jakarta Utara -
              Indonesia
            </div>
          </div>
        </div>
        <div className="Contact__Wrapper-Right">
          <p className="Contact__Description">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={submitHandler}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="text" name="user_email" placeholder="Email" />
            <textarea name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
            {isMessageSent && "Thank you for emailed me!"}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
