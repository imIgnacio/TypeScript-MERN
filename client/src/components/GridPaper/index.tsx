import React from 'react';
import { Paper } from '@mui/material';

type Props = {
  children?: React.ReactNode;
};

const GridPaper: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      variant='outlined'
      sx={{
        minHeight: 240,
        borderRadius: 5,
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Paper>
  );
};

export default GridPaper;
