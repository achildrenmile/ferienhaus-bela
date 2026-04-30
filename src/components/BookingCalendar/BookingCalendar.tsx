import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './BookingCalendar.css'

const BOOKED_FROM = new Date(2026, 3, 30) // April 30, 2026
const BOOKED_UNTIL = new Date(2027, 4, 31) // May 31, 2027

const LANG_MAP: Record<string, string> = {
  de: 'de-AT',
  en: 'en-GB',
  it: 'it-IT',
  sl: 'sl-SI',
}

function isBooked(date: Date): boolean {
  return date >= BOOKED_FROM && date <= BOOKED_UNTIL
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay()
  // Convert Sunday=0 to Monday-based (Mon=0, Sun=6)
  return day === 0 ? 6 : day - 1
}

interface MonthCalendarProps {
  year: number
  month: number
  locale: string
  weekdays: string[]
}

const MonthCalendar = ({ year, month, locale, weekdays }: MonthCalendarProps) => {
  const monthName = new Intl.DateTimeFormat(locale, { month: 'long' }).format(
    new Date(year, month, 1)
  )

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)
  const cells: (number | null)[] = []

  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <div className="bc-month">
      <div className="bc-month-name">{monthName}</div>
      <div className="bc-weekdays">
        {weekdays.map((wd) => (
          <span key={wd}>{wd}</span>
        ))}
      </div>
      <div className="bc-days">
        {cells.map((day, i) => {
          if (day === null) return <span key={`e${i}`} className="bc-day bc-empty" />
          const date = new Date(year, month, day)
          const booked = isBooked(date)
          const today = new Date()
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          return (
            <span
              key={day}
              className={`bc-day${booked ? ' bc-booked' : ' bc-free'}${isToday ? ' bc-today' : ''}`}
            >
              {day}
            </span>
          )
        })}
      </div>
    </div>
  )
}

const BookingCalendar = () => {
  const { t, i18n } = useTranslation()
  const [year, setYear] = useState(new Date().getFullYear())
  const locale = LANG_MAP[i18n.language] || 'de-AT'

  const weekdays = Array.from({ length: 7 }, (_, i) => {
    // i=0 is Monday
    const d = new Date(2024, 0, i + 1) // Jan 1, 2024 is Monday
    return new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(d)
  })

  return (
    <div className="bc-calendar">
      <div className="bc-header">
        <button
          className="bc-nav"
          onClick={() => setYear((y) => y - 1)}
          aria-label={t('preise.calendar.prevYear')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="bc-year">{year}</span>
        <button
          className="bc-nav"
          onClick={() => setYear((y) => y + 1)}
          aria-label={t('preise.calendar.nextYear')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
      <div className="bc-grid">
        {Array.from({ length: 12 }, (_, m) => (
          <MonthCalendar key={m} year={year} month={m} locale={locale} weekdays={weekdays} />
        ))}
      </div>
      <div className="bc-legend">
        <span className="bc-legend-item">
          <span className="bc-legend-dot bc-legend-free" />
          {t('preise.calendar.free')}
        </span>
        <span className="bc-legend-item">
          <span className="bc-legend-dot bc-legend-booked" />
          {t('preise.calendar.booked')}
        </span>
      </div>
    </div>
  )
}

export default BookingCalendar
