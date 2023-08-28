require('dotenv').config();

/* eslint-disable import/first */
import express from 'express';
import path from 'path';
import app from './src/app';
import db from './src/config/connection';

const PORT = process.env.PORT || 8080;

// if we're in production, serve client/dist as static assets
// Same for development environment
if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'development'
) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on port: ${PORT}`);
  });
});

db.once('error', err => {
  console.log(err);
});
