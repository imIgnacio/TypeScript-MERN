/* eslint-disable no-unused-vars */
import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    red: string;
    green: string;
    blue: string;
    violet: string;
    orange: string;
    yellow: string;
    indigo: string;
    emerald: string;
    fuchsia: string;
    sky: string;
    pink: string;
  }

  interface PaletteOptions extends MuiPaletteOptions {
    red: string;
    green: string;
    blue: string;
    violet: string;
    orange: string;
    yellow: string;
    indigo: string;
    emerald: string;
    fuchsia: string;
    sky: string;
    pink: string;
  }
}

export const palette = {
  primary: {
    main: '#7747CA',
  },
  secondary: {
    main: '#2775FF',
  },
  error: {
    main: '#E23738',
  },
  warning: {
    main: '#EC8C56',
  },
  info: {
    main: '#ECE663',
  },
  success: {
    main: '#5EEA8D',
  },
  red: '#E23738',
  green: '#50D1B2',
  blue: '#2775FF',
  violet: '#7747CA',
  orange: '#EC8C56',
  yellow: '#ECE663',
  indigo: '#5415F1',
  emerald: '#5EEA8D',
  fuchsia: '#DD50D6',
  sky: '#0BD6F4',
  pink: 'FB7BB8',
};
