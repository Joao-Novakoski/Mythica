import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Races from './pages/Races'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/races" element={<Races />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
