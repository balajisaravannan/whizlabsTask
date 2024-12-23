import logo from './logo.svg';
import './App.css';
import Router from './Routes/Router';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import CustomizedSnackbar from './components/redux/SnackBar';

function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <CustomizedSnackbar />
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
