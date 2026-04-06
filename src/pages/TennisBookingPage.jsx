import { useState } from 'react';
import Hero from '../components/Hero';
import BookingCalendar from '../components/BookingCalendar';
import './TennisBookingPage.css';

const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00',
];

const SURFACES = [
  { id: 'hart', label: 'Hallen-Hartplatz', count: 4, icon: 'warehouse' },
  { id: 'sand', label: 'Sandplatz', count: 8, icon: 'park' },
];

const WEEKDAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const MONTHS_SHORT = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'];

export default function TennisBookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSurface, setSelectedSurface] = useState('hart');
  const [selectedTime, setSelectedTime] = useState(null);

  const formatDate = (date) => {
    if (!date) return '—';
    return `${WEEKDAYS[date.getDay()]}, ${date.getDate()}. ${MONTHS_SHORT[date.getMonth()]}`;
  };

  return (
    <div className="booking-page">
      <Hero
        title="Platz Reservieren"
        subtitle="Wählen Sie Datum, Belag und Zeitfenster – in wenigen Klicks zu Ihrem Match."
        compact
        align="center"
      />

      <section className="section booking-content">
        <div className="container">
          <div className="booking-grid">
            {/* Left side: Calendar + Filters */}
            <div className="booking-left">
              <BookingCalendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />

              {/* Surface Selection */}
              <div className="booking-surfaces" id="surface-select">
                <h4>Belag wählen</h4>
                <div className="booking-surfaces__grid">
                  {SURFACES.map((s) => (
                    <button
                      key={s.id}
                      className={`surface-btn ${selectedSurface === s.id ? 'surface-btn--active' : ''}`}
                      onClick={() => setSelectedSurface(s.id)}
                    >
                      <span className="material-symbols-outlined">{s.icon}</span>
                      <strong>{s.label}</strong>
                      <span className="surface-btn__count">{s.count} Plätze verfügbar</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="booking-times" id="time-slots">
                <h4>Verfügbare Zeiten</h4>
                <div className="booking-times__grid">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      className={`time-btn ${selectedTime === t ? 'time-btn--active' : ''}`}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Summary */}
            <div className="booking-right">
              <div className="booking-summary" id="booking-summary">
                <h3>Buchungsübersicht</h3>
                <div className="booking-summary__rows">
                  <div className="booking-summary__row">
                    <span className="label">Datum</span>
                    <span>{selectedDate ? formatDate(selectedDate) : 'Bitte wählen'}</span>
                  </div>
                  <div className="booking-summary__row">
                    <span className="label">Platz</span>
                    <span>{SURFACES.find(s => s.id === selectedSurface)?.label} #2</span>
                  </div>
                  <div className="booking-summary__row">
                    <span className="label">Zeitfenster</span>
                    <span>{selectedTime ? `${selectedTime} — ${parseInt(selectedTime) + 1}:00 Uhr` : 'Bitte wählen'}</span>
                  </div>
                </div>
                <div className="booking-summary__note">
                  <span className="material-symbols-outlined">info</span>
                  Kostenlose Stornierung bis zu 24 Std. vor Spielbeginn
                </div>
                <button
                  className="btn btn--primary btn--large booking-summary__btn"
                  disabled={!selectedDate || !selectedTime}
                  id="confirm-booking"
                >
                  Buchung bestätigen
                  <span className="material-symbols-outlined">check_circle</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
