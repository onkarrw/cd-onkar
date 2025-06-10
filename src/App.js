import { StrictMode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';

let theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2',
      light: '#7bb9ff',
      dark: '#0066b0',
    },
    secondary: {
      main: '#aa0964',
      light: '#e14b93',
      dark: '#750039',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#2d2d2d',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Chivo Mono", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

// Make typography responsive
theme = responsiveFontSizes(theme);

function App() {
  return (
    <StrictMode>
      <CustomThemeProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeToggle />
          <Header />
          <Hero />
          <Experience />
          <Projects />
          <Skills />
        </MuiThemeProvider>
      </CustomThemeProvider>
    </StrictMode>
  );
}

export default App;