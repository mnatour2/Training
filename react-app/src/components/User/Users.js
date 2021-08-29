import React from "react";
import { Table } from "react-bootstrap";

export default function Users(props) {
  return (
    <div className="p-4">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Profile picture</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.profilePic}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
