import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupingSelector from './components/GroupingSelector';
import './App.css';

const App = () => {
  const [grouping, setGrouping] = useState('status');

  const groupingOptions = [
    { value: 'status', label: 'Status' },
    { value: 'user', label: 'User' },
    { value: 'priority', label: 'Priority' },
  ];

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Kanban Board</h1>
      </header>
      <GroupingSelector
        options={groupingOptions}
        selectedOption={grouping}
        onChange={handleGroupingChange}
      />
      <KanbanBoard grouping={grouping} />
    </div>
  );
};

export default App;
