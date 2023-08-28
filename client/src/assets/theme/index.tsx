import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';

export const theme = createTheme({
  spacing: 4,
  palette,
  typography,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: 14,
          borderRadius: 8,
          '&:hover': {},
        },
        outlined: {
          color: '#000000',
          border: '1px solid #000000',
          '&:hover': {
            border: '1px solid #000000',
          },
        },
        sizeSmall: {
          borderRadius: 4,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {},
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: 24,
          height: 24,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#F5F5FA',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'default',
        position: 'static',
      },
      styleOverrides: {
        root: {
          boxShadow: '0 0 0',
          backgroundColor: '#FFFFFF',
          height: 60,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          '@media (min-width: 600px)': {
            paddingLeft: 26,
            paddingRight: 26,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(119, 71, 202, 0.08)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          width: 240,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 24,
          width: 24,
          height: 24,
          marginRight: 16,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '& > div': {
            color: '#000000',
          },
          '&:hover': {
            backgroundColor: 'rgba(119, 71, 202, 0.08)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(119, 71, 202, 0.9)',
            '& > div': {
              color: '#FFFFFF',
            },
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgba(59, 11, 142, 0.6)',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {},
        container: {
          marginTop: 20,
        },
      },
    },
  },
});
