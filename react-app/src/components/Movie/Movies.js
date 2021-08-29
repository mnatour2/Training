import React from "react";
import { Table } from "react-bootstrap";

export default function Movies(props) {
  return (
    <div className="p-4">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Year</th>
            <th>Country</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {props.movies.map((movie) => (
            <tr>
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.year}</td>
              <td>{movie.country}</td>
              <td>{movie.poster}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
