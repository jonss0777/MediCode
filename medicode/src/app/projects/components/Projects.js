// src/app/components/Projects.js
'use client'
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Tabs, Tab } from '@mui/material';
import styles from './Projects.module.css';

const existingProjects = [
  {
    title: 'Project One',
    description: 'This is a description for project one.',
    image: '/images/medicode.jpeg',
  },
  {
    title: 'Project Two',
    description: 'This is a description for project two.',
    image: '/images/medicode.jpeg',
  },
  {
    title: 'Project Three',
    description: 'This is a description for project three.',
    image: '/images/medicode.jpeg',
  },
  // Add more projects as needed
];

const Projects = () => {
  const [tabValue, setTabValue] = useState(0);
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    console.log({ proposalTitle, proposalDescription });
    setProposalTitle('');
    setProposalDescription('');
  };

  return (
    <Box className={styles.projectsContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>

      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} centered>
        <Tab label="Existing Projects" />
        <Tab label="Submit a Proposal" />
      </Tabs>

      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
        {tabValue === 0 && (
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {existingProjects.map((project, index) => (
              <Box className={styles.projectBox} key={index} m={1} width={200}>
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
                <Typography variant="h6" align="center">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {project.description}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {tabValue === 1 && (
          <Box mt={4} width="100%" maxWidth={400}>
            <Typography variant="h5" align="center" gutterBottom>
              Submit a Project Proposal
            </Typography>
            <form onSubmit={handleProposalSubmit}>
              <TextField
                label="Project Title"
                value={proposalTitle}
                onChange={(e) => setProposalTitle(e.target.value)}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Project Description"
                value={proposalDescription}
                onChange={(e) => setProposalDescription(e.target.value)}
                fullWidth
                multiline
                rows={4}
                required
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit Proposal
              </Button>
            </form>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
