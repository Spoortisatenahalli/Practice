import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Style.css";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { store } from "./Detail";

function EditStudent() {
  const [student, setStudent] = useContext(store);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [Lastname, setAge] = useState("");
  const [POY, setCourse] = useState("");
  const [Email, setBatch] = useState("");

  useEffect(() => {
    student.forEach((element) => {
      if (element.Id === id) {
        setName(element.Name);
        setAge(element.lastname);
        setCourse(element.POY);
        setBatch(element.Email);
      }
    });
  }, [id, student]);

  const submit = () => {
    setStudent((previousV) =>
      previousV.map((data) =>
        data.Id === id
          ? {
              Id: id,
              Name: name,
              Lastname: Lastname,
              Email: Email,
              POY: POY,
            }
          : data
      )
    );
  };

  return (
    <>
      <Box
        className="container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Lastname"
          value={Lastname}
          onChange={(e) => setAge(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="POY"
          value={POY}
          onChange={(e) => setCourse(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Email"
          value={Email}
          onChange={(e) => setBatch(e.target.value)}
        />
      </Box>
      <div className="btUp">
        <div><Link to="/student">
          <button className="btn btn-warning">
             Cancel 
          </button></Link>
        </div>
        <div><Link to="/student">
          <button className="btn btn-success " onClick={submit}>
             Update 
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default EditStudent;
