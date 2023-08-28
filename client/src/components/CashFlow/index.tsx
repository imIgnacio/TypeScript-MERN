import React from 'react';
import { Box, Typography } from '@mui/material';
import GridPaper from '@components/GridPaper';
import GridPaperLineChart from '@components/GridPaperLineChart';
import IconBackground from '@components/IconBackground';
import { CashFlowIcon } from '@assets/icons';
import { theme } from '@assets/theme';

const data = [
  { amount: 100 },
  { amount: 1000 },
  { amount: 200 },
  { amount: 2000 },
];
const color = theme.palette.blue;
const dataKey = 'amount';

function CashFlow() {
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
            <CashFlowIcon />
          </IconBackground>
          <Typography variant='subtitle2'>Flujo Caja</Typography>
        </Box>
        <Typography variant='h3'>$54.7K</Typography>
      </Box>
      <GridPaperLineChart data={data} color={color} dataKey={dataKey} />
    </GridPaper>
  );
}

export default CashFlow;
