import { Input, Button, Form, Select } from "antd";
import type { Dayjs } from "dayjs";
import type { Slot } from "../../../types/slot";
import { useState } from "react";
import { ModalBooking } from "./ModalBooking";

type BookingFormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  subject_place: string;
  time_slot_id: number | null;
};

type Props = {
  selectedSlot: number | null;
  setSelectedSlot: (value: number | null) => void;
  date: Dayjs;
  slots: Slot[];
  setSlots: (slots: Slot[]) => void;
};

export function BookingForm({
  selectedSlot,
  setSelectedSlot,
  date,
  slots,
  setSlots,
}: Props) {
  const [form] = Form.useForm<BookingFormData>();

  const [formData, setFormData] = useState<BookingFormData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const subjectOptions = [
    { value: "resa_adulte", label: "Séance adulte" },
    { value: "resa_enfant", label: "Séance enfant" },
  ];

  const subjectPlace = [
    { value: "visio", label: "En visio" },
    { value: "presentiel", label: "En présentiel" },
  ];

  return (
    <div>
      <h2>Finaliser ma demande</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={(values: Omit<BookingFormData, "time_slot_id">) => {
          const data: BookingFormData = {
            ...values,
            time_slot_id: selectedSlot,
          };

          setFormData(data);
          setIsModalOpen(true);
        }}
      >
        <div>
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: "Prénom obligatoire" }]}
          >
            <Input placeholder="Prénom" />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Nom obligatoire" }]}
          >
            <Input placeholder="Nom" />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          rules={[{ required: true, type: "email", message: "Email invalide" }]}
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
          rules={[{ required: true, message: "Choisissez le type de séance" }]}
        >
          <Select
            placeholder="Choisir le type de séance"
            options={subjectOptions}
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="subject_place"
          rules={[{ required: true, message: "Choisissez le lieu" }]}
        >
          <Select
            placeholder="Choisir le lieu"
            options={subjectPlace}
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

      <ModalBooking
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        date={date}
        slots={slots}
        formData={formData}
        setSelectedSlot={setSelectedSlot}
        setSlots={setSlots}
        form={form}
      />
    </div>
  );
}
