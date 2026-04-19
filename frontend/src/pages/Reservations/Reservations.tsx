import "./components/css/Reservations.css";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import "dayjs/locale/fr";
import locale from "antd/es/date-picker/locale/fr_FR";
import axiosInstance from "../../api/axiosconfig";
import type { Slot } from "../../types/slot";
import LoaderInline from "../../components/Loader/LoaderInline";
import { CalendarComponent } from "./components/CalendarComponent";
import { BookingForm } from "./components/BookingForm";

export function Reservations() {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  useEffect(() => {
    if (!date) return;

    const formattedDate = date.format("YYYY-MM-DD");

    setLoading(true);

    axiosInstance
      .get(`/slots?date=${formattedDate}`)
      .then((resp: { data: Slot[] }) => {
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
          <CalendarComponent
            date={date}
            setDate={setDate}
            setSelectedSlot={setSelectedSlot}
            locale={locale}
          />

          <div className="slots-list">
            {loading ? (
              <div className="slots-loader">
                <LoaderInline />
              </div>
            ) : (
              (() => {
                const availableSlots = slots.filter(
                  (slot) => slot.is_available,
                );

                if (slots.length === 0) {
                  return (
                    <p className="slots-empty">Aucun créneau disponible</p>
                  );
                }

                if (availableSlots.length === 0) {
                  return (
                    <p className="slots-empty">
                      Il n'y a plus de créneaux disponibles ce jour
                    </p>
                  );
                }

                return (
                  <>
                    <h3 className="slots-title">Créneaux disponibles</h3>

                    <div className="slots-buttons">
                      {availableSlots.map((slot) => (
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
                );
              })()
            )}
          </div>
        </div>

        <div className="form-card">
          <BookingForm
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
            date={date}
            setSlots={setSlots}
            slots={slots}
          />
        </div>
      </div>
    </div>
  );
}
