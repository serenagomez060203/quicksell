import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => (
  <div className={`ticket-card priority-${ticket.priority}`}>
    <h3>{ticket.title}</h3>
    <p>Status: {ticket.status}</p>
    <p>Assigned To: {ticket.user || 'Unassigned'}</p>
    <p>Priority: {ticket.priority}</p>
  </div>
);

export default TicketCard;
