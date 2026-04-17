import "./Reservations.css";
import { Calendar, Input, Button, Form, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import "dayjs/locale/fr";
import locale from "antd/es/date-picker/locale/fr_FR";
import axiosInstance from "../../api/axiosconfig";
import type { Slot } from "../../types/slot";
import LoaderInline from "../../components/Loader/LoaderInline";

export function Reservations() {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [form] = Form.useForm();

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

    const formattedDate = date.format("YYYY-MM-DD");

    setLoading(true);

    axiosInstance
      .get(`/slots?date=${formattedDate}`)
      .then((resp) => {
        setSlots(resp.data);
      })
      .catch((err) => {
        console.error("erreur lors de la récupération des slots :", err);
      })
      .finally(() => {
        setLoading(false);
      });
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

          <div className="slots-list">
            {loading ? (
              <div className="slots-loader">
                <LoaderInline />
              </div>
            ) : slots.length > 0 ? (
              <>
                <h3 className="slots-title">Créneaux disponibles</h3>

                <div className="slots-buttons">
                  {slots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      className={`slot-btn ${selectedSlot === slot.id ? "active" : ""}`}
                      onClick={() => setSelectedSlot(slot.id)}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <p className="slots-empty">Aucun créneau disponible</p>
            )}
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
