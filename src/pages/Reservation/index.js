import React from "react";
import { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/Infoslice/InfoSlice";
import { removeUser } from "../../features/Infoslice/InfoSlice";
import Button from "@mui/material/Button";
import video from "../../videos/video4.mp4";
import Container from "@mui/material/Container";

const Reservation = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((info) => info.infoUser.submit);

  const currencies = [
    {
      value: "None",
      label: "None",
    },
    {
      value: "Germany",
      label: "Germany",
    },
    {
      value: "Bangladesh",
      label: "Bangladesh",
    },
    {
      value: "India",
      label: "India",
    },
    {
      value: "Italy",
      label: "Italy",
    },
  ];
  const persons = [
    {
      value: "None",
      label: "None",
    },
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
  ];
  const classs = [
    {
      value: "None",
      label: "None",
    },
    {
      value: "Normal",
      label: "Normal",
    },
    {
      value: "Economy",
      label: "Economy",
    },
    {
      value: "Business",
      label: "Business",
    },
  ];

  const initialValue = {
    destinationFrom: "",
    destinationTo: "",
    destinationTrips: "",
    destinationDate: "",
    destinationClass: "",
  };

  const [info, setInfo] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(value);
  };

  const validationScrema = () => {
    if (
      info.destinationFrom &&
      info.destinationTo &&
      info.destinationTrips &&
      info.destinationClass &&
      info.destinationDate
    ) {
      dispatch(addUser(info));
      localStorage.setItem("info", JSON.stringify(info));
    } else {
      alert("Please Full The From");
    }
  };

  const handleAddInfo = () => {
    validationScrema();
  };

  const handleRemove = (id) => {
    dispatch(removeUser(id));
    console.log(handleRemove);
  };

  return (
    <div>
      <div className="reserv-part">
        <video autoPlay loop muted id="video">
          <source src={video} type="video/mp4" />
        </video>
        <Container fixed>
          <div className="reserv-main-content">
            <div className="reservation">
              <div className="reserv-part2">
                <h2>Flight Reservation</h2>
                <p>
                  Please Make Sure you fill name in the same which is in your
                  Passport
                </p>
              </div>
              <div className="reserv-content">
                <div className="form">
                  <TextField
                    name="destinationFrom"
                    className="public_fromto"
                    onChange={handleChange}
                    id="outlined-select-currency"
                    select
                    label="Departure"
                    helperText="Select Your Destination"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name="destinationTo"
                    className="public_fromto"
                    onChange={handleChange}
                    id="outlined-select-currency"
                    select
                    label="Arrival"
                    helperText="Select Your Destination"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name="destinationTrips"
                    className="public_fromto"
                    onChange={handleChange}
                    id="outlined-select-currency"
                    select
                    label="Person"
                    helperText="Select Your Companion"
                  >
                    {persons.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name="destinationClass"
                    className="public_fromto"
                    onChange={handleChange}
                    id="outlined-select-currency"
                    select
                    label="Class"
                    helperText="select your Class"
                  >
                    {classs.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name="destinationDate"
                    type="date"
                    className="tic_date"
                    id="outlined-basic"
                    variant="outlined"
                    onChange={handleChange}
                  />

                  <div className="form-btn" sx={{ m: 1, minWidth: 200 }}>
                    <button type="submit" onClick={handleAddInfo}>
                      <AiOutlinePlusSquare className="button-flight" />
                      Booking
                    </button>
                  </div>
                </div>
              </div>
              <div className="reserv-card">
                {userInfo.map((item, id) => (
                  <div className="card-main">
                    <h2>Your Booking Details</h2>
                    <div className="item-main">
                      <div className="each-items" key={id}>
                        <div className="card1">
                          <h2>Departure</h2>
                          <h4>{item.destinationFrom}</h4>
                        </div>
                        <div className="card1">
                          <h2>Arrival</h2>
                          <h4>{item.destinationTo}</h4>
                        </div>
                        <div className="card1">
                          <h2>Persons</h2>
                          <h4>{item.destinationTrips}</h4>
                        </div>
                        <div className="card1">
                          <h2>Class</h2>
                          <h4>{item.destinationClass}</h4>
                        </div>
                        <div className="card1">
                          <h2>Date</h2>
                          <h4>{item.destinationDate}</h4>
                        </div>

                        <Button
                          onClick={() => handleRemove(id)}
                          variant="outlined"
                        >
                          remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Reservation;
