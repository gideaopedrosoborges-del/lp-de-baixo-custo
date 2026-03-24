import { Routes, Route } from 'react-router-dom'
import Manifesto from './pages/Manifesto'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Manifesto />} />
    </Routes>
  )
}

export default App
