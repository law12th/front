import React from 'react'
import '../patientslg.css'
import {useNavigate} from 'react-router-dom'

function Proceed() {
    const navigate = useNavigate();
  return (
    <div className='loginb'>
        <div className='form'>
      <h1>Proceed to make an appointment</h1>
      <p>Your appointment will be taken up by available doctors</p>
      <button className='btn'onClick={() => {navigate('/addAppointment')}}>Proceed</button>
      </div>
    </div>
  )
}

export default Proceed
