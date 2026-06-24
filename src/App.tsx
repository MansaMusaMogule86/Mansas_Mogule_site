import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import GridBackground from './components/GridBackground'
import HomePage from './pages/HomePage'
import OracleOSPage from './pages/OracleOSPage'
import DivisionsPage from './pages/DivisionsPage'
import DivisionDetailPage from './pages/divisions/DivisionDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="relative min-h-screen bg-[#F8F9FC]">
      <GridBackground />
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oracle-os" element={<OracleOSPage />} />
          <Route path="/divisions" element={<DivisionsPage />} />
          <Route path="/divisions/:slug" element={<DivisionDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
