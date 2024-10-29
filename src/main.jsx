import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import ReactDOM from 'react-dom/client'
import React from 'react'

import theme from './styles/theme';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { DishDetails } from './pages/DishDetails';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { AdmMenu } from './pages/AdmMenu';
import { AdmHome } from './pages/AdmHome';
import { AdmDishDetails } from './pages/AdmDishDetails';
import { NewDish } from './pages/NewDish';
import { DishEdit } from './pages/DishEdit';

import { Routes } from './routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
