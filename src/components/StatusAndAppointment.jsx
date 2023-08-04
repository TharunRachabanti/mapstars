import React from 'react';

const StatusAndAppointment = () => {
  const boxStyle = {
    gridArea: 'statusAndAppointment',
    width: '100%',
    height: '100px',
    backgroundColor: 'lightblue',
    border: '2px solid black',
    borderRadius: '10px', // Adjust the value as per your preference
    padding: '10px', // Add some padding to make it look better
    boxSizing: 'border-box', // Make sure padding is included in the overall width/height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    overflow: 'auto',
  };

  const statusStyle = {
    color: 'white',
    backgroundColor: 'green',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const appointmentLinkStyle = {
    color: 'black',
    textDecoration: 'none',
    border: '2px solid black',
    padding: '8px 15px',
    borderRadius: '5px',
  };

  return (
    <div style={boxStyle}>
      <div>
        <span>Status: </span>
        <span style={statusStyle}>Open</span>
      </div>
      <a
        href="#appointment"
        style={appointmentLinkStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        Make an Appointment
      </a>
    </div>
  );
};

export default StatusAndAppointment;
