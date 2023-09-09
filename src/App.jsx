import "./App.css";
import React from "react";
import axios from "axios";

import { MainContainer, Registration } from "./pages";
import Lottie from "react-lottie";
import { Loader } from "./assets/lottie";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hackathon Contest",
      start_date: "2023-08-26",
      end_date: "2023-08-26",
      registration_start_date: "2023-08-26",
      registration_end_date: "2023-08-26",
      contact_number: "9876543210",
      records: [
        {
          round_number: 1,
          round_date: "2023-08-28",
        },
      ],
      announcements: [
        {
          announcement_text: "This is first announcement!",
        },
      ],
      organizers: [
        {
          organizer_info: "IE STUDENT CHAPTER,",
        },
      ],
      flagger: true,
    };
  }

  componentDidMount = () => {
    axios
      .get("https://web-it-like-spider.onrender.com/hackathon/home/")
      .then((result) => {
        // console.log(result.data);
        this.setState({
          name: result.data.name,
          start_date: result.data.start_date,
          end_date: result.data.end_date,
          registration_start_date: result.data.registration_start_date,
          registration_end_date: result.data.registration_end_date,
          contact_number: result.data.contact_number,
          records: result.data.rounds,
          announcements: result.data.announcements,
          organizers: result.data.organizers,
          flagger: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const defaultOptionsForLoadingPage = {
      loop: true,
      autoplay: true,
      animationData: Loader,
      rendererSettings: {
        perserveAspectRatio: "xMidYMid slice",
      },
    };

    if (this.state.flagger === false) {
      return (
        <div className="loader">
          <Lottie
            options={defaultOptionsForLoadingPage}
            height={500}
            width={500}
          />
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <MainContainer
          name={this.state.name}
          start_date={this.state.start_date}
          end_date={this.state.end_date}
          registration_start_date={this.state.registration_start_date}
          registration_end_date={this.state.registration_end_date}
          contact_number={this.state.contact_number}
          records={this.state.records}
          announcements={this.state.announcements}
          organizers={this.state.organizers}
        />
      );
    }
  }
}
