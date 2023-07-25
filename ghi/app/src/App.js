import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import ModelForm from './ModelForm';
import ModelsList from './ModelsList';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="/models" element={<ModelsList />} />
          <Route path="/models/create" element={<ModelForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
