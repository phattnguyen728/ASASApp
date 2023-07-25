import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import ModelForm from './ModelForm';
import ModelsList from './ModelsList';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm';
import Nav from './Nav';
import React, { useEffect, useState } from "react";

function App() {
  const [models, setModels] = useState([]);

  async function getModels() {
    const modelUrl = 'http://localhost:8100/api/models/'
    const response = await fetch(modelUrl)
    if (response.ok) {
      const data = await response.json();
      setModels(data.models)
    }
  }

  useEffect(() => {
    getModels();
  }, [])

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
          <Route path="/models/create" element={<ModelForm getModels={getModels} />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
