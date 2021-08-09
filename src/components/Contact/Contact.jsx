import React, { useState } from 'react'
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { ContactSection, Container, Input, TextArea, Span } from './ContactStyles';
import { send, init } from "emailjs-com";
import { validate } from '../../utils/mail';




// const { TextArea } = Input;
const initialFormState = {
  email: "",
  name: "",
  message: "",
  disabled: false,
  emailSent: null
}

// const [formSate, setFormSate] = useState();

init(process.REACT_APP_EMAILJS_USER_ID)
const Contact = () => {
  const [mail, setMail] = useState({ fullName: '', email: '', message: '', to_name: "Abdul-latif" })

  const [error, setError] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMail({ ...mail, [name]: value });
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    const { fullName, email, message } = mail;
    const error = validate(fullName, email, message);
    if (fullName && email && message) {
      setError({});
      send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        mail,
        process.env.EMAILJS_USER_ID,
      )

        .then((response) => {
          setSent(true);
          console.log(response.text)
        })
        .catch((err) => {
          setSent(false);
          console.log(error.text)
        })
      setMail({ fullName: '', email: '', message: '', to_name: "Abdul-latif" })

    } else {
      setError({ ...error })
    }

  }

  return (
    <>
      <Section>
        <SectionDivider />
        <br />
        <br />
        <SectionTitle>Contact Me</SectionTitle>
        <SectionText marginBottom="0px">
          Connect with me lets work together.
        </SectionText>

        <form >
          <Input type="text" name="fullName" value={mail.fullName} placeholder="Full Name" onChange={handleChange}></Input>
          <Input type="text" name="email" value={mail.email} placeholder="Email Address" onChange={handleChange}></Input>
          <TextArea type="text" name="message" value={mail.message} placeholder="Message" onChange={handleChange}></TextArea>
          <br />
          <Button type="submit" onClick={handleSubmit}>Send</Button>
        </form>

      </Section>
    </>

  )
}

export default Contact
