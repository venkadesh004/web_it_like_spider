import "./MainContainer.css";

import {LandingPage, EventsPage, AnnouncementsPage, OrganizersPage, Footer} from '../../pages';

import { useEffect } from "react";
import $ from 'jquery';

function MainContainer({name, start_date, end_date, registration_start_date, registration_end_date, contact_number, records, announcements, organizers}) {
  var top = 0;

  // console.log(name, start_date, end_date, registration_start_date, registration_end_date, contact_number, records, announcements, organizers);

  const sectionHeight = window.innerHeight;
  const pageArrays = [0, sectionHeight, sectionHeight*2, sectionHeight*3];
  const pageIDs = ["#LandingPage", "#EventsPage", "#AnnouncementsPage", "#OrganizersPage"];

  const handleNavigation = () => {
    if (pageArrays[top] < window.scrollY) {
      top++;
      $('html, body').animate({scrollTop: $(pageIDs[top]).position().top}, 1000); 
    }
    pageArrays.forEach((element, index) => {
      if (element === window.scrollY) {
        top = index;
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    }
  }, [handleNavigation]);

  return (
    <div className="MainContainer">
      <LandingPage name={name} />
      <EventsPage start_date={start_date} end_date={end_date} registration_end_date={registration_end_date} registration_start_date={registration_start_date} records={records} />
      <AnnouncementsPage announcements={announcements} />
      <OrganizersPage organizers={organizers} />
      <Footer contact_number={contact_number} />
    </div>
  );
}

export default MainContainer;
