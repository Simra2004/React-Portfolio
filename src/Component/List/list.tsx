import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

export default function AlignItemsList() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="COD" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="COLLEGE OF DUPAGE"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' , marginleft:

                }}
              >
                2022-current
              </Typography>
              {"- Currently Enrolled in BSCS"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ST JOSEPHS COLLEGE" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="ST JOSEPHS COLLEGE"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
            
              >
              2019-2021
              </Typography>
              {"- SCIENCE"}
            </React.Fragment>
          }
        />
        
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="HAPPY HOME SCHOOL" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="HAPPY HOME SCHOOL"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
               2010-2018
              </Typography>
              {'- SCHOOLING'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    <img
    src="https://media.licdn.com/dms/image/v2/D4D12AQF3jz7NSHlzXg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1696416198976?e=2147483647&v=beta&t=K0_8uDGwsOynJPmLKQ_4ku1sCPpmNINiodFKnYAheAs"
    alt="Education Graphic"
    style={{ width: '500px', height: 'auto', borderRadius: '10px', objectFit: 'cover' }}
  />
  </Box>
  
  );
}
