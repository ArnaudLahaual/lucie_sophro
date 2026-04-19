import { Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  date: Dayjs;
  setDate: (value: Dayjs) => void;
  setSelectedSlot: (value: number | null) => void;
  locale: any;
};

export function CalendarComponent({
  date,
  setDate,
  setSelectedSlot,
  locale,
}: Props) {
  return (
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

            <span className="calendar-title">{value.format("MMMM YYYY")}</span>

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
  );
}
