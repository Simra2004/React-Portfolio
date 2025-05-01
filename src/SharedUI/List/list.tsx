// import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  Box
} from '@mui/material';

export default function EducationSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 4,
        padding: 4,
        backgroundColor: '#0d0d0d',
        borderRadius: '12px',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#fff' }}>
          🎓 My Education
        </Typography>
        <List
          sx={{
            width: '100%',
            backgroundColor: '#1a1a1a',
            borderRadius: 2,
            boxShadow: 3,
            padding: 2,
          }}
        >
          <ListItem alignItems="flex-start" sx={{ mb: 2, borderRadius: 2, '&:hover': { backgroundColor: '#2c2c2c' } }}>
            <ListItemAvatar>
              <Avatar alt="College of DuPage" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  College of DuPage
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: '#aaa' }}>
                  2022 – Present — Currently Enrolled in BSCS
                </Typography>
              }
            />
          </ListItem>

          <Divider sx={{ backgroundColor: '#444' }} />

          <ListItem alignItems="flex-start" sx={{ my: 2, borderRadius: 2, '&:hover': { backgroundColor: '#2c2c2c' } }}>
            <ListItemAvatar>
              <Avatar alt="St Josephs College" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  St Josephs College
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: '#aaa' }}>
                  2019 – 2021 — Science
                </Typography>
              }
            />
          </ListItem>

          <Divider sx={{ backgroundColor: '#444' }} />

          <ListItem alignItems="flex-start" sx={{ mt: 2, borderRadius: 2, '&:hover': { backgroundColor: '#2c2c2c' } }}>
            <ListItemAvatar>
              <Avatar alt="Happy Home School" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  Happy Home School
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: '#aaa' }}>
                  2010 – 2018 — Schooling
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ flex: 1 }}>
        <img
          src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Education Illustration"
          style={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            borderRadius: '12px',
            objectFit: 'cover',
            boxShadow: '0 0 20px rgba(255,255,255,0.1)',
            marginTop:45
          }}
        />
      </Box>
    </Box>
  );
}
