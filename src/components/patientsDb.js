import React, {useState} from 'react'

import '../adminDb.css'


const PatientsDb = () => {
  

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Patient name</th>
            <th>Doctor name</th>
            <th>Appointment description</th>
            <th>Appointment time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
         
          
        </tbody>
      </table>
    </div>
  );
};

export default PatientsDb;