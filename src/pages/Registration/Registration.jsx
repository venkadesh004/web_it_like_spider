import React from "react";
import "./Registration.css";

import axios from "axios";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team_name: '',
      team_member_1_name: '',
      team_member_1_department: '',
      team_member_1_phone: '',
      team_member_1_email: '',
      team_member_1_register_number: '',
      team_member_2_name: '',
      team_member_2_department: '',
      team_member_2_phone: '',
      team_member_2_email: '',
      team_member_2_register_number: '',
      team_member_3_name: '',
      team_member_3_department: '',
      team_member_3_phone: '',
      team_member_3_email: '',
      team_member_3_register_number: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://web-it-like-spider.onrender.com/hackathon/register/', this.state).then(output => {
      // console.log(output.data);
      alert(output.data["success"]);
      window.location.href = '/';
    }).catch(err => {
      console.log(err);
      alert(err["response"]["data"]["error"]);
    });
  }

  render() {
    return (
      <div className="Registration">
        <div className="registration-box">
          <form
            onSubmit={this.handleSubmit}
          >
            <h1>REGISTRATION FORM</h1>
            <input
              type="text"
              placeholder="Enter the Team Name"
              name="team_name"
              onChange={this.handleChange}
            />
            <div className="team_data">
              <div className="team_member_details">
                <h3>Member 1</h3>
                <input type="text" placeholder="Name" name="team_member_1_name" onChange={this.handleChange} />
                <input
                  type="text"
                  placeholder="Department"
                  name="team_member_1_department"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="team_member_1_phone"
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="team_member_1_email"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="Register Number"
                  name="team_member_1_register_number"
                  onChange={this.handleChange}
                />
              </div>
              <div className="team_member_details">
                <h3>Member 2</h3>
                <input type="text" placeholder="Name" name="team_member_2_name" onChange={this.handleChange} />
                <input
                  type="text"
                  placeholder="Department"
                  name="team_member_2_department"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="team_member_2_phone"
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="team_member_2_email"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="Register Number"
                  name="team_member_2_register_number"
                  onChange={this.handleChange}
                />
              </div>
              <div className="team_member_details">
                <h3>Member 3</h3>
                <input type="text" placeholder="Name" name="team_member_3_name" onChange={this.handleChange} />
                <input
                  type="text"
                  placeholder="Department"
                  name="team_member_3_department"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="team_member_3_phone"
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="team_member_3_email"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  placeholder="Register Number"
                  name="team_member_3_register_number"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
