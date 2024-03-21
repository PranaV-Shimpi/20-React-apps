import React from 'react';
import Frodo from '../img/frodo.png';

export default function Dashboard() {
  return (
    <div className="page dashboard">
      <div>
        <img src={Frodo} alt="Frodo" />
        <h2>Welcome... You have successfully Logged IN</h2>
      </div>
    </div>
  );
}