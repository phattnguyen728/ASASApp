import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import ModelForm from './ModelForm';
import ModelsList from './ModelsList';
import AutomobilesList from './AutomobilesList';
import AutomobileForm from './AutomobileForm';
import SalespeopleList from './SalespeopleList';
import SalespersonForm from './SalespersonForm';
import SalesList from './SalesList';
import SalesForm from './SalesForm';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm';
import Nav from './Nav';
import React, { useEffect, useState } from "react";

function App() {
  const [models, setModels] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [sales, setSales] = useState([]);
  const [customers, setCustomers] = useState([]);

  async function getModels() {
    const modelUrl = 'http://localhost:8100/api/models/'
    const response = await fetch(modelUrl)
    if (response.ok) {
      const data = await response.json();
      setModels(data.models)
    }
  }
    async function getAutomobiles() {
    const autoUrl = 'http://localhost:8100/api/automobiles/'
    const response = await fetch(autoUrl)
    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.autos)
    }
  }

  async function getSalespeople() {
    const salespeopleUrl = 'http://localhost:8090/api/salespeople/'
    const response = await fetch(salespeopleUrl)
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople)
    }
  }

  async function getSales() {
    const salesUrl = 'http://localhost:8090/api/sales/'
    const response = await fetch(salesUrl)
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales)
    }
  }
  async function getCustomers() {
    const customerUrl = 'http://localhost:8090/api/customers/'
    const response = await fetch(customerUrl)
    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers)
    }
  }

  useEffect(() => {
    getModels();
    getAutomobiles();
    getSalespeople();
    getSales();
    getCustomers();
  }, []);

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
          <Route path="/models" element={<ModelsList models={models} />} />
          <Route path="/models/create" element={<ModelForm getModels={getModels} />} />
          <Route path="/automobiles" element={<AutomobilesList automobiles={automobiles} />} />
          <Route path="/automobiles/create" element={<AutomobileForm getAutomobiles={getAutomobiles} />} />
          <Route path="/salespeople" element={<SalespeopleList salespeople={salespeople} />} />
          <Route path="/salespeople/create" element={<SalespersonForm getSalespeople={getSalespeople} />} />
          <Route path="/sales" element={<SalesList sales={sales} />} />
          <Route path="/sales/create" element={<SalesForm automobiles={automobiles} salespeople={salespeople} customers={customers} getSales={getSales} />} />
          <Route path="/customers" element={<CustomerList customers={customers} />} />
          <Route path="/customers/create" element={<CustomerForm getCustomers={getCustomers} />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
