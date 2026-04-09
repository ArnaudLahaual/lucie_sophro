import { Form, Input, Select, Button } from "antd";
import "./Contact.css";

export function Contact() {
  const [form] = Form.useForm();

  const handleValidateForm = (values: any) => {
    console.log("data du formulaire:", values);
    form.resetFields();
  };

  const subjectOptions = [
    { value: "reservation", label: "Demande de réservation" },
    { value: "info", label: "Demande d'information" },
    { value: "other", label: "Autre" },
  ];

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
            label="Sujet de vôtre demande"
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
            label="Message"
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
            <Button type="primary" htmlType="submit" className="cta-btn">
              Envoyer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
