import React from 'react'
import './OrganizerCard.css';

function OrganizerCard({organization_name, organization_desp, organization_img}) {
  return (
    <div className='OrganizerCard'>
        <div className="content-main">
            <img src={organization_img} alt="" />
            <div className="organizercard-content">
                <div className="organization-name">
                    {organization_name}
                </div>
                <div className="organization-desp">
                    {organization_desp}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrganizerCard