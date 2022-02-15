import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Icon, Button, Table } from "semantic-ui-react";

function ViewContacts() {
  const navigate = useNavigate();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );

  const handleDelete = (id) => {
    const removeContact = data.filter((contact) => {
      return contact.id !== id;
    });
    setData(removeContact);
    localStorage.setItem("contacts", JSON.stringify(removeContact));
  };

  return (
    <>
      <div>
        <Header size="large">Contact List</Header>
        <Table basic="very" striped textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phone No</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((contact) => (
              <Table.Row key={contact.id}>
                <Table.Cell>{contact.name}</Table.Cell>
                <Table.Cell>{contact.phone}</Table.Cell>
                <Table.Cell>{contact.email}</Table.Cell>

                <Table.Cell>
                  <Button
                    icon="edit outline"
                    color="blue"
                    onClick={() => {
                      navigate(`/add/${contact.id}`, { state: contact });
                    }}
                  />
                  <Button
                    icon="delete"
                    color="red"
                    onClick={() => handleDelete(contact.id)}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  onClick={() => navigate("/add")}
                >
                  <Icon name="user" /> Add User
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </>
  );
}

export default ViewContacts;
