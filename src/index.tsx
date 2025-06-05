import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

import { BrowserRouter, Routes } from 'react-router'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('content') as HTMLElement)
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
