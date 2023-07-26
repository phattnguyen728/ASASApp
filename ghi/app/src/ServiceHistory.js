import React, { useState, useEffect } from 'react';

export default function ServiceHistory() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/"

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='my-5 container'>
      <h1>Service History</h1>
      <div className='text-left my-2'>
        <input
          value={search}
          type="text"
          onChange={e => setSearch(e.target.value)}
          placeholder='Search by VIN'
        />
        <i className="bi bi-search"></i>
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>VIN</th>
            <th>Is VIP?</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.filter(
            appointment => search === "" || appointment.vin.includes(search)).map(
              appointment => {
                return (
                  <tr key={appointment.vin}>
                    <td> {appointment.vin} </td>
                    <td> {appointment.is_vip ? "Yes" : "No"} </td>
                    <td> {appointment.customer} </td>
                    <td> {new Date(appointment.date_time).toLocaleDateString()} </td>
                    <td> {new Date(appointment.date_time).toLocaleTimeString()} </td>
                    <td> {appointment.technician.first_name + " " + appointment.technician.last_name} </td>
                    <td> {appointment.reason} </td>
                    <td> {appointment.status} </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>
  )
}
