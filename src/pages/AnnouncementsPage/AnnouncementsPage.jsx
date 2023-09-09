import React from 'react'
import './AnnouncementsPage.css';
import Headings from '../../components/Headings/Headings';

import Lottie from 'react-lottie';
import defaultOptionsForPages from '../../utils/lottieConfigs';

function AnnouncementsPage({announcements}) {

  // console.log("Announcements: ", announcements);

  var announcement_list = announcements.map((value, index) => {
    return (<p className='announcement_single_val'>&#8226; {value["announcement_text"]}</p>);
  });

  return (
    <div className='AnnouncementsPage' id="AnnouncementsPage">
      <Headings title={"ANNOUNCEMENTS"} />
      <div className="announcements-content">
        <div className="announcements-body">
          {announcement_list}
        </div>
        <div className="announcements-breaker">

        </div>
        <div className="announcements-lottie">
          <Lottie
            options={defaultOptionsForPages[2]}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default AnnouncementsPage