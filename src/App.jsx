
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import SobreMi from './components/SobreMi'
import Portfolio from './components/Portfolio'
import Educacion from './components/Educacion'
import Skills from './components/Skills'
import Contacto from './components/Contacto'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacto" element={<Contacto />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
