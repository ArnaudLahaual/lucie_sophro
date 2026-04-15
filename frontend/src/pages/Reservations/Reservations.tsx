import "./Reservations.css";
import { Calendar, Input, Button, Form } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

export function Reservations() {
  const [date, setDate] = useState(dayjs());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form] = Form.useForm();

  const slots = ["09:00", "10:30", "14:00", "15:30", "17:00"];

  const handleValidateForm = (values: any) => {
    const data = {
      ...values,
      date: date.format("YYYY-MM-DD"),
      time: selectedSlot,
    };

    console.log("values", data);
  };

  return (
    <div className="reservations-container">
      <div className="reservations-header">
        <h1>Prendre rendez-vous</h1>
      </div>

      <div className="reservations-content">
        <div className="calendar-card">
          <Calendar
            fullscreen={false}
            value={date}
            onSelect={(value, info) => {
              if (info.source === "date") {
                setDate(value);
              }
            }}
          />

          <div className="slots">
            <h3>Créneaux disponibles</h3>

            <div className="slots-list">
              {slots.map((slot) => (
                <button
                  key={slot}
                  className={`slot-btn ${
                    selectedSlot === slot ? "active" : ""
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                  type="button"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="form-card">
          <h2>Finaliser ma demande</h2>

          <Form form={form} layout="vertical" onFinish={handleValidateForm}>
            <div className="form-row">
              <Form.Item
                name="lastname"
                rules={[
                  { required: true, message: "Veuillez entrer votre nom" },
                ]}
              >
                <Input placeholder="Nom" />
              </Form.Item>

              <Form.Item
                name="firstname"
                rules={[
                  { required: true, message: "Veuillez entrer votre prénom" },
                ]}
              >
                <Input placeholder="Prénom" />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              rules={[
                { required: true, type: "email", message: "Email invalide" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Numéro obligatoire" },
                { pattern: /^[0-9+ ]+$/, message: "Numéro invalide" },
              ]}
            >
              <Input placeholder="Téléphone" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-btn"
                disabled={!selectedSlot}
              >
                Envoyer
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
