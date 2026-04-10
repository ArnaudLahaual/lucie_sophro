import { Form, Input, Select, Button } from "antd";
import "./Contact.css";
import axiosInstance from "../../api/axiosconfig";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleValidateForm = (values: any) => {
    setLoading(true);
    axiosInstance
      .post("/contact", values)
      .then((resp) => {
        console.log(resp);
        enqueueSnackbar("Votre message a bien été envoyé ! ", {
          variant: "success",
        });
        form.resetFields();
        setIsSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        enqueueSnackbar("Une erreur est survenue.", { variant: "error" });
        setLoading(false);
      });
  };

  const subjectOptions = [
    { value: "reservation", label: "Demande de réservation" },
    { value: "info", label: "Demande d'information" },
    { value: "other", label: "Autre" },
  ];

  const handleResetForm = () => {
    setIsSuccess(false);
  };

  const handleBackHome = () => {
    setIsSuccess(false);
    navigate("/");
  };

  if (isSuccess) {
    return (
      <div className="contact-page">
        <div className="contact-card success-card">
          <p className="contact-card-text">
            Merci pour votre message.<br></br> Je vous remercie de votre
            confiance et vous recontacterai très prochainement afin d’échanger
            sur votre demande en toute sérénité.<br></br>
            Mme Bordeyne
          </p>

          <div className="success-actions">
            <Button
              type="primary"
              className="cta-btn"
              onClick={handleResetForm}
            >
              Envoyer un autre message
            </Button>

            <Button type="primary" className="cta-btn" onClick={handleBackHome}>
              Retour à l’accueil
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="contact-page">
      <div className="contact-card">
        <p className="contact-card-text">
          Une question, une demande ou une prise de rendez-vous ?<br></br> Je
          vous invite à remplir le formulaire ci-dessous. Je vous répondrai avec
          plaisir dans les meilleurs délais.
        </p>

        <Form form={form} layout="vertical" onFinish={handleValidateForm}>
          <div className="form-row">
            <Form.Item
              name="lastname"
              label="Nom"
              rules={[{ required: true, message: "Veuillez entrer votre nom" }]}
              className="form-item"
            >
              <Input placeholder="Veuillez entrer votre nom" />
            </Form.Item>

            <Form.Item
              name="firstname"
              label="Prénom"
              rules={[
                { required: true, message: "Veuillez entrer votre prénom" },
              ]}
              className="form-item"
            >
              <Input placeholder="Veuillez entrer votre prénom" />
            </Form.Item>
          </div>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, type: "email", message: "Email invalide" },
            ]}
          >
            <Input placeholder="Veuillez renseigner votre email" />
          </Form.Item>

          <Form.Item
            label="Téléphone"
            name="phone"
            rules={[
              { required: true, message: "Numéro obligatoire" },
              { pattern: /^[0-9+ ]+$/, message: "Numéro invalide" },
            ]}
          >
            <Input type="tel" placeholder="Veuillez indiquer votre téléphone" />
          </Form.Item>

          <Form.Item
            label="Sujet de votre demande"
            name="subject"
            rules={[{ required: true, message: "Choisissez un sujet" }]}
          >
            <Select
              placeholder="Choisir un sujet"
              options={subjectOptions}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="message"
            label="message"
            rules={[
              { required: true, message: "Veuillez renseigner votre demande" },
            ]}
          >
            <Input.TextArea
              placeholder="Veuillez renseigner votre demande"
              showCount
              maxLength={300}
              rows={5}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="cta-btn"
              loading={loading}
            >
              Envoyer
            </Button>
          </Form.Item>
        </Form>
      </div>
      {loading && <Loader />}
    </div>
  );
}
