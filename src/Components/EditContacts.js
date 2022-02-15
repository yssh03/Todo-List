import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { Input, Header, Button } from "semantic-ui-react";
import TextField from '@mui/material/TextField';

function EditContacts() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );
  const location = useLocation();
  const [state, setState] = useState({
    id: id,
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    setState(location.state);
  }, [location]);

  const editTask = (id) => {
    const updatedData = data.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          name: state.name,
          email: state.email,
          phone: state.phone,
        };
      }
      return contact;
    });
    setData(updatedData);
    localStorage.setItem("contacts", JSON.stringify(updatedData));
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id);
    alert("Contact updated!!")
  };

  const handleView = () => {
    navigate("/", { state });
  };
  return (
    <>
    {/* {
      false && <Header size="large">Edit Contact</Header>
    } */}
      
      <div className="input">
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
      
          // icon="users"
          // iconPosition="left"
          type="text"
          // placeholder="Name"
          name="name"
          // color="black"
          value={state.name}
          onChange={handleChange}
        />
      {/*  </div>
      <br />
      <div className="input">
        <Input
          icon="phone"
          iconPosition="left"
          type="tel"
          placeholder="Phone No"
          name="phone"
          color="black"
          value={state.phone}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="input">
        <Input
          icon="mail"
          iconPosition="left"
          type="email"
          placeholder="Email"
          name="email"
          color="black"
          value={state.email}
          onChange={handleChange}
          required
        /> */}
      </div>
      <br />
      {/* <Button primary onClick={handleSubmit}>
        Edit
      </Button>
      <Button secondary onClick={handleView}>
        View
      </Button> */}
    </>
  );
}

export default EditContacts;
