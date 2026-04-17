import "./Reservations.css";
import { Calendar, Input, Button, Form, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import "dayjs/locale/fr";
import locale from "antd/es/date-picker/locale/fr_FR";
import axiosInstance from "../../api/axiosconfig";
import type { Slot } from "../../types/slot";

export function Reservations() {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [form] = Form.useForm();

  // const slots = ["09:00", "10:30", "14:00", "15:30", "17:00"];
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
  useEffect(() => {
    if (!date) return;

    const getSlots = async () => {
      const formattedDate = date.format("YYYY-MM-DD");

      const resp = await axiosInstance.get(`/slots?date=${formattedDate}`);
      console.log("data axios", resp.data);
      setSlots(resp.data);
    };

    getSlots();
  }, [date]);

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
            disabledDate={(currentDate) =>
              currentDate < dayjs().startOf("day") ||
              currentDate.day() === 0 ||
              currentDate.day() === 6
            }
            headerRender={({ value }) => {
              return (
                <div className="calendar-header">
                  <button
                    type="button"
                    onClick={() => setDate(value.subtract(1, "month"))}
                  >
                    ←
                  </button>

                  <span className="calendar-title">
                    {value.format("MMMM YYYY")}
                  </span>

                  <button
                    type="button"
                    onClick={() => setDate(value.add(1, "month"))}
                  >
                    →
                  </button>
                </div>
              );
            }}
          />

          <div className="slots">
            <h3>
              {slots.length > 0 ? "Disponibilités" : "Aucune disponiblités"}
            </h3>

            <div className="slots-list">
              {slots.length > 0 ? (
                slots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    className={`slot-btn ${selectedSlot === slot.id ? "active" : ""}`}
                    onClick={() => setSelectedSlot(slot.id)}
                  >
                    {slot.time}
                  </button>
                ))
              ) : (
                <span></span>
              )}
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
