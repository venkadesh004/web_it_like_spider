import React, { useState } from 'react'
import './EventsPage.css'

import Event_announcement from "../../assets/lottie/events_announcements.json";
import Event_registration from "../../assets/lottie/events_registration.json";
import Event_rounds from "../../assets/lottie/events_rounds.json";
import Event_winners from "../../assets/lottie/events_winners.json";
import Lottie from 'react-lottie';

import { Circles } from '../../components';
import Headings from '../../components/Headings/Headings';

function EventsPage({start_date, end_date, registration_start_date, registration_end_date, records}) {

  // console.log(start_date, end_date, registration_start_date, registration_end_date, records);

  const [processState, setProcessState] = useState(0);
  const [prevProcessState, setPrevProcessState] = useState(-1);

  const datas = ["Announcement", "Registration", "Rounds", "Winners"];
  const data_information = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur temporibus dolorum asperiores provident. Alias fugit totam natus necessitatibus voluptate laborum?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde nisi exercitationem ullam, quos eos laudantium quisquam mollitia aut dignissimos, distinctio deserunt inventore voluptatem commodi.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur temporibus dolorum asperiores provident. Alias fugit totam natus necessitatibus voluptate laborum?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde nisi exercitationem ullam, quos eos laudantium quisquam mollitia aut dignissimos, distinctio deserunt inventore voluptatem commodi."
  ];
  const colors = ["#F99797", "#FAABAB", "#7CCCBE", "#97C2D9"];

  const date1 = [start_date, end_date];
  const date2 = [registration_start_date, registration_end_date];
  const date3 = records.map((value, index) => {
    return value["round_date"];
  });
  const date4 = ["2023-09-30"];

  const dates = [
    date1,
    date2,
    date3,
    date4
  ];

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: lotties[processState],
  //   renderSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };

  const [nextActive, setNextActive] = useState(true);
  const [prevActive, setPrevActive] = useState(false);

  const handleNextChange = () => {
    if (processState === 3) {
      setNextActive(false);
    } else {
      setNextActive(true);
      setPrevActive(true);

      setPrevProcessState(processState);
      setProcessState(processState+1);
    }
  }

  const handlePrevChange = () => {
    if (processState === 0) {
      setPrevActive(false);
    } else if (processState === 3 && prevProcessState === 2) {
      var val = processState;
      setProcessState(prevProcessState);
      setPrevProcessState(val);

      setNextActive(true);
      setPrevActive(true);
    } else {
      setNextActive(true);
      setPrevActive(true);

      setPrevProcessState(processState);
      setProcessState(processState-1);
    }
  }

  var dates_tag = dates[processState].map((value, index) => {
    return (
      <p>{value}</p>
    );
  });

  return (
    <div className='EventsPage' style={{backgroundColor: `${colors[processState]}`}} id="EventsPage">
      <Headings title={"EVENTS"} />
      <div className="events">
        <div className="announcement">
          <p>{datas[processState]}</p>
          <h2><span>Process</span> - {processState+1}</h2>
        </div>
        <div className="circles_outside">
          <div className="lotties">
            {/* <Lottie
              options={defaultOptions}
              height={100}
              width={100}
            /> */}
            <Circles processState={processState} prevProcessState={prevProcessState} dates={dates_tag} />
          </div>
        </div>
        <div className="about-data">
          <p>{data_information[processState]}</p>
          <div className="stateChangeButtons">
            <button onClick={handlePrevChange} className={prevActive ? "activeButton" : "deactiveButton"}>Prev</button>
            <button onClick={handleNextChange} className={nextActive ? "activeButton" : "deactiveButton"}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage