import { useState } from 'react';
import Hero from '../components/Hero';
import BookingCalendar from '../components/BookingCalendar';
import './TennisBookingPage.css'; /* shared booking styles */

const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00',
];

const EQUIPMENT = [
  { name: 'Yonex Voltric Serie', desc: 'Profi-Leihschläger', price: '15,00 €' },
  { name: 'Yonex AS-50 (12er Rolle)', desc: 'Turnier-Federbälle', price: '28,00 €' },
];

const WEEKDAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const MONTHS_SHORT = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'];

export default function BadmintonBookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const formatDate = (date) => {
    if (!date) return '—';
    return `${WEEKDAYS[date.getDay()]}, ${date.getDate()}. ${MONTHS_SHORT[date.getMonth()]}`;
  };

  return (
    <div className="booking-page">
      <Hero
        title="An die Grenzen gehen"
        subtitle="Professionelle Platzreservierungen für Höchstleistungen."
        compact
        align="center"
      />

      <section className="section booking-content">
        <div className="container">
          <div className="booking-grid">
            {/* Left: Calendar + Equipment */}
            <div className="booking-left">
              <BookingCalendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />

              {/* Platzübersicht */}
              <div className="booking-surfaces">
                <h4>Platzübersicht</h4>
                <div className="booking-surfaces__grid">
                  <button className="surface-btn surface-btn--active">
                    <span className="material-symbols-outlined">sports_tennis</span>
                    <strong>Badminton Arena</strong>
                    <span className="surface-btn__count">4 Felder verfügbar</span>
                  </button>
                </div>
              </div>

              {/* Time Slots */}
              <div className="booking-times" id="time-slots-badminton">
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

              {/* Equipment */}
              <div className="booking-equipment" id="equipment-rental">
                <h4>Ausrüstungsverleih</h4>
                <div className="equipment-grid">
                  {EQUIPMENT.map((e) => (
                    <div key={e.name} className="equipment-item">
                      <div className="equipment-item__info">
                        <strong>{e.name}</strong>
                        <span>{e.desc}</span>
                      </div>
                      <span className="equipment-item__price">{e.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Summary */}
            <div className="booking-right">
              <div className="booking-summary" id="booking-summary-badminton">
                <h3>Buchungsübersicht</h3>
                <div className="booking-summary__rows">
                  <div className="booking-summary__row">
                    <span className="label">Sport</span>
                    <span>Badminton – Platz 01</span>
                  </div>
                  <div className="booking-summary__row">
                    <span className="label">Datum</span>
                    <span>{selectedDate ? formatDate(selectedDate) : 'Bitte wählen'}</span>
                  </div>
                  <div className="booking-summary__row">
                    <span className="label">Zeitfenster</span>
                    <span>{selectedTime ? `${selectedTime} — ${String(parseInt(selectedTime) + 2).padStart(2, '0')}:00 Uhr` : 'Bitte wählen'}</span>
                  </div>
                  <div className="booking-summary__row">
                    <span className="label">Preis</span>
                    <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>27,50 €</span>
                  </div>
                </div>

                <div className="booking-storno">
                  <h5>Stornierungsbedingungen</h5>
                  <p>Volle Rückerstattung bei Stornierung bis mindestens 24 Stunden im Voraus. Bei Nichterscheinen wird der volle Reservierungsbetrag berechnet.</p>
                </div>

                <button
                  className="btn btn--primary btn--large booking-summary__btn"
                  disabled={!selectedDate || !selectedTime}
                  id="confirm-booking-badminton"
                  style={{ marginTop: 'var(--space-6)' }}
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
