import React from 'react';
import { Box, Typography } from '@mui/material';
import GridPaper from '@components/GridPaper';
import GridPaperLineChart from '@components/GridPaperLineChart';
import IconBackground from '@components/IconBackground';
import { IncomeChartIcon } from '@assets/icons';
import { theme } from '@assets/theme';

const data = [
  { amount: 400 },
  { amount: 800 },
  { amount: 200 },
  { amount: 1000 },
];
const color = theme.palette.green;
const dataKey = 'amount';

function TotalIncome() {
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
            <IncomeChartIcon />
          </IconBackground>
          <Typography variant='subtitle2'>Ingresos</Typography>
        </Box>
        <Typography variant='h3'>$54.7K</Typography>
      </Box>
      <GridPaperLineChart data={data} color={color} dataKey={dataKey} />
    </GridPaper>
  );
}

export default TotalIncome;
