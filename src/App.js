import Pagina from './Componentes/Pagina.jsx';
import './App.css';

import Termos from './Componentes/Termo.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
     
        <Router>
      <Routes>
      <Route path='/' element={<Pagina />} />
        <Route path='/Termos' element={<Termos />} />
      </Routes>
    </Router>

  );
}

export default App;
