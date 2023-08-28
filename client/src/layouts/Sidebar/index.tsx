import React, { useState } from 'react';
import {
  // Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { sidebarItems } from './Sidebar.config';

function Sidebar() {
  const DRAWER_WIDTH = 260;
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event: Event | undefined, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <List>
        {sidebarItems.map((element, index) => (
          <ListItem key={index}>
            <ListItemButton
              sx={{ justifyContent: 'center' }}
              selected={selectedIndex === index}
              onClick={() => {
                handleListItemClick(event, index);
                navigate(`${element.path}`);
              }}
            >
              <ListItemIcon>{React.createElement(element.icon)}</ListItemIcon>
              <ListItemText>{element.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
