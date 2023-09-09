import React from 'react'
import './Footer.css'

function Footer({contact_number}) {
  return (
    <div className='Footer'>
        <p>©Copyrights 2023, Developed By Team NIGHTOWLS</p>
        <p>Any Queries, Contact: {contact_number}</p>
    </div>
  )
}

export default Footer