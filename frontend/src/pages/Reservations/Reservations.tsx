import "./Reservations.css";
import { Calendar, Input, Button, Form, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import "dayjs/locale/fr";
import locale from "antd/es/date-picker/locale/fr_FR";

export function Reservations() {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form] = Form.useForm();

  const slots = ["09:00", "10:30", "14:00", "15:30", "17:00"];
  const subjectOptions = [
    { value: "resa_adulte", label: "Séance adulte" },
    { value: "resa_enfant", label: "Séance enfant" },
  ];

  const handleValidateForm = (values: any) => {
    const data = {
      ...values,
      date: date ? date.format("YYYY-MM-DD") : null,
      time: selectedSlot,
    };

    console.log("data", data);
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
            locale={locale}
            value={date}
            onSelect={(value) => {
              setDate(value);
              setSelectedSlot(null);
            }}
          />

          <div className="slots">
            <h3>Créneaux disponibles</h3>

            <div className="slots-list">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`slot-btn ${selectedSlot === slot ? "active" : ""}`}
                  onClick={() => setSelectedSlot(slot)}
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
            <Form.Item
              name="lastname"
              rules={[{ required: true, message: "Nom obligatoire" }]}
            >
              <Input placeholder="Nom" />
            </Form.Item>

            <Form.Item
              name="firstname"
              rules={[{ required: true, message: "Prénom obligatoire" }]}
            >
              <Input placeholder="Prénom" />
            </Form.Item>

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
              rules={[{ required: true, message: "Téléphone obligatoire" }]}
            >
              <Input placeholder="Téléphone" />
            </Form.Item>

            <Form.Item
              name="subject"
              rules={[{ required: true, message: "Choisissez un sujet" }]}
            >
              <Select
                placeholder="Choisir le type de séance"
                options={subjectOptions}
                size="large"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              disabled={!selectedSlot || !date}
              className="submit-btn"
            >
              Envoyer
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
