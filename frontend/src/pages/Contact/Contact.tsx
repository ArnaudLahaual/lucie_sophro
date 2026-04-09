import { Form, Input, Select, Button } from "antd";
import "./Contact.css";
import axiosInstance from "../../api/axiosconfig";
// import { useSnackbar } from "notistack";

export function Contact() {
  //   const navigate = useNavigate();
  const [form] = Form.useForm();
//   const { enqueueSnackbar } = useSnackbar();

  const handleValidateForm = (values: any) => {
    console.log("values:", values);

    axiosInstance
      .post("/contact", values)
      .then((resp) => {
        console.log(resp);
        // enqueueSnackbar("Message envoyé avec succès !", {
        //   variant: "success",
        // });
        form.resetFields();
      })
      .catch(() => {});
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
            <Button type="primary" htmlType="submit" className="cta-btn">
              Envoyer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
