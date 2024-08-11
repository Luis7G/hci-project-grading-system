import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeachersPage from "./pages/DocentesPage";
import HomePage from "./pages/InicioPage";
import InvestigacionesPage from "./pages/InvestigacionesPage";
import EstudiantesPage from "./pages/EstudiantesPage";
import MateriasPage from "./pages/MateriasPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/investigaciones" element={<InvestigacionesPage />} />
        <Route path="/estudiantes" element={<EstudiantesPage />} />
        <Route path="/materias" element={<MateriasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
