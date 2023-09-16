import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import React from "react";
import './Calendar.css';

export const Calendar = () => {
  return (
    <div className="calendar-container">
      <div>
        <FullCalendar
        height="90vh"
        width="100%"
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay'
          }}
          allDaySlot={false}
          initialView="dayGridMonth"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvent= {true}
          weekends={true}
          nowIndicator={true}
          dateClick={() => alert("hello")}
          eventContent={() => <>Event</>}
          events={[
            { title: "event 1", date: "2023-08-01" },
            { title: "event 2", date: "2023-08-02" },
          ]}
        />
      </div>
    </div>
  );
};
