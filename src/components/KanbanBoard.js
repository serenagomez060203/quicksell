import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import GroupingSelector from './GroupingSelector';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const { data: tickets, loading, error } = useFetch('https://api.quicksell.co/v1/internal/frontend-assignment');
  const [groupingOption, setGroupingOption] = useState('status'); // Default grouping by status

  const handleGroupingChange = (option) => {
    setGroupingOption(option);
  };

  const groupTickets = (tickets) => {
    if (!tickets) return {};

    const grouped = {};

    switch (groupingOption) {
      case 'status':
        tickets.forEach((ticket) => {
          if (!grouped[ticket.status]) {
            grouped[ticket.status] = [];
          }
          grouped[ticket.status].push(ticket);
        });
        break;

      case 'user':
        tickets.forEach((ticket) => {
          if (!grouped[ticket.user]) {
            grouped[ticket.user] = [];
          }
          grouped[ticket.user].push(ticket);
        });
        break;

      case 'priority':
        tickets.forEach((ticket) => {
          if (!grouped[ticket.priority]) {
            grouped[ticket.priority] = [];
          }
          grouped[ticket.priority].push(ticket);
        });
        break;

      default:
        break;
    }

    return grouped;
  };

  const groupedTickets = groupTickets(tickets);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="kanban-board">
      <GroupingSelector onChange={handleGroupingChange} />
      <div className="kanban-columns">
        {Object.keys(groupedTickets).map((group) => (
          <div key={group} className="kanban-column">
            <h2>{group}</h2>
            {groupedTickets[group].map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
