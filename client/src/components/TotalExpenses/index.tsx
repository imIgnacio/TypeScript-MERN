import React from 'react';
import { Box, Typography } from '@mui/material';
import { ExpensesChartIcon } from '@assets/icons';
import GridPaper from '@components/GridPaper';
import IconBackground from '@components/IconBackground';
import GridPaperLineChart from '@components/GridPaperLineChart';
import { theme } from '@assets/theme';

const data = [
  { amount: 600 },
  { amount: 1000 },
  { amount: 1200 },
  { amount: 200 },
  { amount: 1500 },
  { amount: 50 },
  { amount: 500 },
  { amount: 900 },
  { amount: 500 },
  { amount: 1000 },
  { amount: 900 },
  { amount: 200 },
  { amount: 400 },
  { amount: 600 },
  { amount: 50 },
  { amount: 250 },
  { amount: 900 },
  { amount: 500 },
];
const color = theme.palette.red;
const dataKey = 'amount';

function TotalExpenses() {
  return (
    <GridPaper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <IconBackground>
            <ExpensesChartIcon />
          </IconBackground>
          <Typography variant='subtitle2'>Egresos</Typography>
        </Box>
        <Typography variant='h3'>$54.7K</Typography>
      </Box>
      <GridPaperLineChart data={data} color={color} dataKey={dataKey} />
    </GridPaper>
  );
}

export default TotalExpenses;
