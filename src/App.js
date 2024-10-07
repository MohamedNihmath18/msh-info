import React, { useEffect, useState } from 'react';
import './App.css'; // Import the stylesheet

function App() {
  const [patientName, setPatientName] = useState('Nik'); // Replace with actual patient name
  const [roomNumber, setRoomNumber] = useState('123'); // Replace with actual room number
  const [doctorAdvice, setDoctorAdvice] = useState('Follow doctor\'s instructions'); // Replace with actual doctor advice

  useEffect(() => {
    // ... (same as before)
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img src="https://www.mahsahospital.com/wp-content/uploads/2019/11/mahsa-logo.png" alt="Your Hospital Logo" className="logo" />
        {/* <h1>Your Hospital Name</h1> */}
        <div className="patient-info">
          <p>Patient Name: {patientName}</p>
          <p>Room Number: {roomNumber}</p>
          <p>Doctor Advice: {doctorAdvice}</p>
        </div>
      </header>
      <main className="content">
        {/* Your app's content here */}
      </main>
      <footer className="footer">
        <a href="https://www.youtube.com/" target="_blank">YouTube</a>
        <a href="https://www.netflix.com/" target="_blank">Netflix</a>
        <a href="https://www.amazon.com/prime-video" target="_blank">Amazon Prime</a>
      </footer>
    </div>
  );
}

export default App;