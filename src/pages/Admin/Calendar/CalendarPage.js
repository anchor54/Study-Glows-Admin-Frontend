import React from 'react'
import { AdminSidebar } from '../../../components/AdminSidebar/AdminSidebar'
import { AdminNavbar } from '../../../components/AdminNavbar/AdminNavbar'
import { Calendar } from '../../../components/AdminCalendar/Calendar'
import './Calendar.scss'
export const CalendarPage = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: 0,
        padding: 0,
        background: "#F1F2F5",
        fontFamily: "Lato",
      }}
    >
      <AdminSidebar />
      <div className="calendar-dash">
        <AdminNavbar />
        <div className="main-calendar-div">
          <Calendar />
        </div>
      </div>
    </div>
  )
}
