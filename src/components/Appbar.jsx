import React from 'react';
import './AppBar.css';
import { AccountCircle } from '@mui/icons-material';
import { Typography } from '@mui/material';

function Appbar() {
  return (
    <div className="app-bar">
      <div className="icon-container">
        {/* Replace 'appIcon' with your actual image source */}
        <img src="/stars.svg" alt="App Icon" className="app-icon" />
        <div className="app-title-container">
          <Typography variant="h6" className="app-title">
            Mappstars
          </Typography>
        </div>
      </div>
      <Typography variant="subtitle1">Tharun Rachabanti</Typography>
      <div className="icon-container">
        <AccountCircle className="profile-icon" />
      </div>
    </div>
  );
}

export default Appbar;
