import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import TotalIncome from '@components/TotalIncome';
import TotalExpenses from '@components/TotalExpenses';
import CashFlow from '@components/CashFlow';
import ProfitMargin from '@components/ProfitMargin';

function Dashboard() {
  return (
    <Container sx={{ marginTop: 6 }}>
      <Typography variant='h1'>Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TotalIncome />
        </Grid>
        <Grid item xs={3}>
          <TotalExpenses />
        </Grid>
        <Grid item xs={3}>
          <CashFlow />
        </Grid>
        <Grid item xs={3}>
          <ProfitMargin />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
