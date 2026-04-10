import { useState } from "react";
import "./Contact.css";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import ContactForm from "../../components/ContactForm/ContactForm";

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      {isSuccess ? (
        <SuccessMessage onReset={() => setIsSuccess(false)} />
      ) : (
        <ContactForm onSuccess={() => setIsSuccess(true)} />
      )}
    </>
  );
}
