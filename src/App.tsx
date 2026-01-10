import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Ferienhaus from './pages/Ferienhaus'
import Hundeurlaub from './pages/Hundeurlaub'
import Umgebung from './pages/Umgebung'
import Preise from './pages/Preise'
import Impressum from './pages/Impressum'
import AGB from './pages/AGB'
import Hausordnung from './pages/Hausordnung'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ferienhaus" element={<Ferienhaus />} />
          <Route path="/hundeurlaub" element={<Hundeurlaub />} />
          <Route path="/umgebung" element={<Umgebung />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/hausordnung" element={<Hausordnung />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
