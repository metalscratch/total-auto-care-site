import React from 'react';
import './TrustBar.css';

const ITEMS = [
  { icon: '📍', text: 'Perth Wide Coverage' },
  { icon: '🚗', text: 'We Come to You' },
  { icon: '⭐', text: '5-Star Rated Service' },
  { icon: '🛡️', text: '100% Satisfaction Guarantee' },
  { icon: '📅', text: 'Flexible Scheduling' },
  { icon: '✨', text: 'Professional Products Used' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="trust-bar-item">
            <span className="trust-bar-icon">{item.icon}</span>
            <span className="trust-bar-text">{item.text}</span>
            <span className="trust-bar-sep" aria-hidden="true">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
