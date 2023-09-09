import React from 'react'
import './OrganizersPage.css'
import Headings from '../../components/Headings/Headings'

import OrganizerCard from '../../components/organizerCard/OrganizerCard';
import { OrganizerImg } from '../../assets/images';

function OrganizersPage({organizers}) {
  var organizercard = organizers.map((value, index) => {
    return <OrganizerCard organization_img={OrganizerImg} organization_name={value["organizer_info"]} organization_desp={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nostrum!"} />
  });

  return (
    <div className='OrganizersPage' id="OrganizersPage">
      <Headings title={"ORGANIZERS"} />
      <div className="orgranizers-body">
        {organizercard}
      </div>
    </div>
  )
}

export default OrganizersPage