import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AagaazPage from './pages/AagaazPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aagaaz" element={<AagaazPage />} />
      </Routes>
    </BrowserRouter>
  )
}
