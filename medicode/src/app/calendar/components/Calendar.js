// src/components/Calendar.js

import React, { useState } from 'react';
import { Box, Button, Typography, Dialog, TextField } from '@mui/material';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState(null);

  const handleOpen = (date) => {
    setEventDate(date);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEventTitle('');
  };

  const handleAddEvent = () => {
    if (eventTitle && eventDate) {
      setEvents([...events, { title: eventTitle, date: eventDate }]);
      handleClose();
    }
  };

  const startWeek = startOfWeek(currentDate);
  const days = Array.from({ length: 7 }).map((_, index) => addDays(startWeek, index));

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Calendar
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {days.map((day) => (
          <Box
            key={day.toString()}
            onClick={() => handleOpen(day)}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              margin: '8px',
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: isSameDay(day, new Date()) ? '#e0f7fa' : 'white',
              flex: '0 0 calc(14.28% - 16px)', // 7 days in a week
              position: 'relative',
            }}
          >
            <Typography variant="h6">{format(day, 'eeee')}</Typography>
            <Typography variant="body1">{format(day, 'MMM d')}</Typography>
            {events.filter(event => isSameDay(event.date, day)).map((event, index) => (
              <Typography key={index} variant="body2">
                {event.title}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Add Event</Typography>
          <TextField
            label="Event Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Calendar;
