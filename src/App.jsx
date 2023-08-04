import React from 'react';
import { Grid, Box } from '@mui/material';
import Appbar from './components/Appbar';
import ProfilePicture from './components/ProfilePicture';
import Tagline from './components/Tagline';
import StatusAndAppointment from './components/StatusAndAppointment';
import KeySkills from './components/KeySkills';
import ExperienceSummary from './components/ExperienceSummary';
import Qualification from './components/Qualification';
import './components/styles.css';

const App = () => {
  return (
    <>
      <Appbar />
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <ProfilePicture />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Tagline />
              </Grid>
              <Grid item xs={12} md={12}>
                <StatusAndAppointment />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <KeySkills />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ExperienceSummary />
          </Grid>
          <Grid item xs={12}>
            <Qualification />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
