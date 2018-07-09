import React from 'react';
import "./EventList.css"


const EventList = ({when, time, attendees, partyOf, offer}) => (
  
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
          <h4 className="event-card-date">{when}</h4>
          <p className="event-card-time">{time}</p>
          <p className="event-card-partipants">{attendees}/{partyOf}</p>
          <p className="event-card-offer">{offer}</p>

        </div>
        <div className="card-action">
          <a className="card-link-edit" href="#">edit</a>
        </div>
      </div>
    </div>

)

export default EventList;