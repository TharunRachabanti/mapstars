import React from 'react';

const Tagline = () => {
  const containerStyle = {
    gridArea: 'tagline',
    width: '100%',
    height: '100px',
    backgroundColor: 'lightgray',
    border: '2px solid black',
    borderRadius: '10px', // Increase the border radius for a tagline-like appearance
    padding: '10px', // Add some padding to make it look better
    boxSizing: 'border-box', // Make sure padding is included in the overall width/height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem', // Increase the font size for a bolder tagline look
    fontWeight: 'bold', // Add some boldness to the tagline text
    textTransform: 'uppercase',
    overflow: 'auto', // Convert the tagline text to uppercase
  };

  return (
    <div style={containerStyle}>
      Innovative Software Engineer
    </div>
  );
};

export default Tagline;
