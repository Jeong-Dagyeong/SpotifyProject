import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

import { BrowserRouter, Routes } from 'react-router'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('content') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
