import React from 'react';
import './Sidebar.css';

// this is a left hand sidebar for a blurb of info followed by work experience
export default function Sidebar({ items, children }) {
  return (
    <div className="sidebar-container">
      {children}
      {items.map((item, index) => {
        return (
          <div className="sidebar-item" key={`sidebar-${index}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}