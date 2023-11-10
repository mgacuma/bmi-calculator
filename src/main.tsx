import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BMIPage } from './bmi-page.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BMIPage />
  </React.StrictMode>,
)
