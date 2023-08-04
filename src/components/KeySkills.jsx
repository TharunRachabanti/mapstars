import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const KeySkills = () => {
  const containerStyle = {
    gridArea: 'keySkills',
    width: '100%',
    height: '300px',
    backgroundColor: 'lightgreen',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'auto', // Enable scroll for the content exceeding container height
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    alignItems: 'center',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '10px 0', // Add margin to the heading
    textAlign: 'center', // Center the heading text
  };

  const listStyle = {
    width: '100%',
    padding: '0',
    listStyle: 'none', // Remove default list styles
  };

  const listItemStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px 8px', // Decrease the padding to make skills smaller
    margin: '5px', // Add some margin for spacing between skills
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT JS',
    'PYTHON',
    'JAVA',
    'C LANGUAGE',
    'FLUTTER',
    'DART',
    'DATA SCIENCE',
    'MACHINE LEARNING',
    'DEEP LEARNING',
    'DATA STRUCTURES',
    'ALGORITHMS',
    'STSTISTICS',
    // ... Add your 20 skills here
  ];

  return (
    <Paper style={containerStyle}>
      <h2 style={headingStyle}>Skills Set</h2>
      <List style={listStyle}>
        {skills.map((skill, index) => (
          <ListItem key={index} style={listItemStyle}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default KeySkills;
