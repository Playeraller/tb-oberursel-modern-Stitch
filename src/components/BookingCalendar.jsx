import { useState } from 'react';
import './BookingCalendar.css';

const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

export default function BookingCalendar({ onDateSelect, selectedDate }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const handleSelect = (day) => {
    const date = new Date(year, month, day);
    onDateSelect?.(date);
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const isToday = (day) => {
    return (
      now.getDate() === day &&
      now.getMonth() === month &&
      now.getFullYear() === year
    );
  };

  const blanks = Array.from({ length: firstDay }, (_, i) => (
    <div key={`blank-${i}`} className="cal__cell cal__cell--blank" />
  ));

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return (
      <button
        key={day}
        className={`cal__cell cal__cell--day ${isSelected(day) ? 'cal__cell--selected' : ''} ${isToday(day) ? 'cal__cell--today' : ''}`}
        onClick={() => handleSelect(day)}
      >
        {day}
      </button>
    );
  });

  return (
    <div className="cal" id="booking-calendar">
      <div className="cal__header">
        <button className="cal__nav" onClick={prevMonth} aria-label="Vorheriger Monat">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h4 className="cal__title">{MONTHS[month]} {year}</h4>
        <button className="cal__nav" onClick={nextMonth} aria-label="Nächster Monat">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <div className="cal__weekdays">
        {DAYS.map(d => <div key={d} className="cal__weekday">{d}</div>)}
      </div>
      <div className="cal__grid">
        {blanks}
        {days}
      </div>
    </div>
  );
}
