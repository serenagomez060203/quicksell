import React from 'react';
import './GroupingSelector.css';

const GroupingSelector = ({ grouping, onGroupingChange, onSortingChange }) => (
  <div className="grouping-selector">
    <label>
      Group By:
      <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </label>
    <label>
      Sort By:
      <select onChange={(e) => onSortingChange(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </label>
  </div>
);

export default GroupingSelector;
