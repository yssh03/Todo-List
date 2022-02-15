import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Header, Button, Form } from "semantic-ui-react";

function AddContacts() {
  const [state, setState] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const isAdd = path === "/add";

  useEffect(() => {
    path === `/add/${id}` && setState(location.state);
  }, [location]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdd) dataStore();
    else {
      editTask(id);
      alert("Contact updated!!");
    }
  };

  const dataStore = () => {
    let localData = JSON.parse(localStorage.getItem("contacts") ?? "[]");
    localData.push({
      id: nanoid(),
      name: state.name,
      phone: state.phone,
      email: state.email,
    });

    localStorage.setItem("contacts", JSON.stringify(localData));
    alert(`Contact saved!!`);
  };

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

  return (
    <>
      <Header size="large">{isAdd ? "Add Contact" : "Edit Contact"}</Header>
      <div className="input">
        <Form.Input
          icon="users"
          iconPosition="left"
          type="text"
          placeholder="Name"
          name="name"
          color="black"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="input">
        <Form.Input
          icon="phone"
          iconPosition="left"
          type="tel"
          max={5}
          placeholder="Phone No"
          name="phone"
          color="black"
          value={state.phone}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="input">
        <Form.Input
          icon="mail"
          iconPosition="left"
          type="email"
          placeholder="Email"
          name="email"
          color="black"
          value={state.email}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <Button primary onClick={handleSubmit}>
        {isAdd ? "Save" : "Edit"}
      </Button>
      <Button secondary onClick={() => navigate("/", { state })}>
        View
      </Button>
    </>
  );
}

export default AddContacts;
