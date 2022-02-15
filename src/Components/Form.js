import React from 'react'
import { Input, Header, Button } from "semantic-ui-react";

function Form(props) {
  return (
    <>
      <Header size="large">Add Contact</Header>
      <div className="input">
        <Input
          icon="users"
          iconPosition="left"
          type="text"
          placeholder="Name"
          name="name"
          color="black"
          value={props.state.name}
          onChange={props.handleChange}
        />
      </div>
      <br />
      <div className="input">
        <Input
          icon="phone"
          iconPosition="left"
          type="tel"
          placeholder="Phone No"
          name="phone"
          color="black"
          value={props.state.phone}
          onChange={props.handleChange}
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
          value={props.state.email}
          onChange={props.handleChange}
          required
        />
      </div>
      <br />
      {/* <Button primary onClick={handleSubmit}>
        Save
      </Button>
      <Button secondary onClick={handleView}>
        View
      </Button> */}
    </>
  )
}

export default Form