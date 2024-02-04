
import React from 'react';

export function Info({ name, titles, address, email, phone }) {
  return (
    <div className="flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <img src="images/purdue_logo.jpg" alt="Logo" />
      </div>
      <div className="mt-10 text-right" style={{ textAlign: 'right' }}>
        <p>{name}</p>
        {titles.map((title, index) => (
          <p key={index}>{title}</p>
        ))}
        <p>{address}</p>
        <p>E-mail: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

