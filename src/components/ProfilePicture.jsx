import React from 'react';


const ProfilePicture = ({ imageUrl }) => {
  const boxStyle = {
    gridArea: 'profile',
    width: '100%',
    height: '216px',
    backgroundColor: 'gray',
    border: '2px solid black',
    borderRadius: '10px', // Adjust the value as per your preference
    padding: '10px', // Add some padding to make it look better
    //margin: '20px', // Add margin for spacing around the box
    boxSizing: 'border-box', // Make sure padding is included in the overall width/height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Fit the image within the container while maintaining aspect ratio
    borderRadius: '10px', // Adjust the value to match the container's borderRadius
  };

  return (
    
    <div style={boxStyle}>
      {/* Your profile picture content here */}
      <img src='https://media.istockphoto.com/id/637234116/photo/doing-it-for-the-love-of-success.jpg?s=612x612&w=0&k=20&c=aAb3V2diocnkHeQ8ZweS1tJkoDBRN1XWBgh-heOVvHo=' alt="Profile" style={imageStyle} />
    </div>
  );
};

export default ProfilePicture;
