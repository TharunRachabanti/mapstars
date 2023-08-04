import React from 'react';

const Qualification = () => {
  const containerStyle = {
    gridArea: 'qualification',
    width: '100%',
    height: '120px', // Set the height to 120px
    backgroundColor: 'lightsalmon',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'auto',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
    textAlign: 'center',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const listItemStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    margin: '5px 0',
    padding: '8px 12px',
    borderRadius: '5px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
  };

  const qualifications = [
    'Bachelor of Science in Computer Science',
    'Master of Business Administration',
    'Certification in Web Development',
    'Certification in Project Management',
    'Certification in Data Science',
    'Certification in Machine Learning',
    'Certification in Agile Methodology',
    // ... Add your qualifications here
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Qualifications</h2>
      <ul style={listStyle}>
        {qualifications.map((qualification, index) => (
          <li key={index} style={listItemStyle}>
            {qualification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Qualification;
