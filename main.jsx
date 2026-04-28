import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Uniparent from './Uniparent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Uniparent />
  </StrictMode>,
)