import React from "react";
import { Table } from "react-bootstrap";

export default function ActorTable(props) {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Date of birth</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {props.actors.map((actor) => (
            <tr>
              <td>{actor.id}</td>
              <td>{actor.name}</td>
              <td>{actor.dob}</td>
              <td>{actor.image}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
