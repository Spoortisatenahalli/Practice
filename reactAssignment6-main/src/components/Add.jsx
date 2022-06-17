import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Style.css";
import { store } from "./Detail";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

function AddStudent() {
  const [student, setStudent] = useContext(store);
  const { id } = useParams();
  const [name, setName] = React.useState("");
  const [Lastname, setAge] = React.useState("");
  const [POY, setCourse] = React.useState("");
  const [Email, setBatch] = React.useState("");

  const submit = () => {
    setStudent([
      ...student,
      {
        Id: id,
        Name: name,
        Lastname: Lastname,
        Email: Email,
        POY: POY,
      },
    ]);
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
      <div><Link to="/student" ><button className="button1 btn btn-danger">
         Cancel 
      </button></Link></div>
      <div><Link to="/student" ><button className="btn btn-success" onClick={submit}>
         Submit 
      </button></Link></div>
      </div>
    </>
  );
}

export default AddStudent