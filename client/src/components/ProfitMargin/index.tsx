import React from 'react';
import { Box, Typography } from '@mui/material';
import GridPaper from '@components/GridPaper';
import GridPaperLineChart from '@components/GridPaperLineChart';
import IconBackground from '@components/IconBackground';
import { ProfitReportIcon } from '@assets/icons';
import { theme } from '@assets/theme';

const data = [
  { amount: 800 },
  { amount: 100 },
  { amount: 50 },
  { amount: 400 },
];
const color = theme.palette.orange;
const dataKey = 'amount';

function ProfitMargin() {
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
            <ProfitReportIcon />
          </IconBackground>
          <Typography variant='subtitle2'>Margen</Typography>
        </Box>
        <Typography variant='h3'>$54.7K</Typography>
      </Box>
      <GridPaperLineChart data={data} color={color} dataKey={dataKey} />
    </GridPaper>
  );
}

export default ProfitMargin;
