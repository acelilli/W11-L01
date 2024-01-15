// src/components/MainSearch.js
import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "../actions/index";
// prendo le azioni
import Job from "./Job";

const MainSearch = () => {
  // settiamo utilizzando useDispatch -> hook di Redux che serve a dispatchare le azioni dallo store al component!
  const dispatch = useDispatch();
  const query = useSelector((state) => state.data.query);
  const jobs = useSelector((state) => state.data.jobs);

  const handleChange = (e) => {
    // Non più setQuery, ma dispatch dell'azione
    dispatch(fetchDataRequest());
    dispatch({ type: "SET_QUERY", payload: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(fetchDataSuccess(data)); // Dispatch dell'azione di successo
      } else {
        dispatch(fetchDataFailure("Error fetching results")); // Dispatch dell'azione di errore
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message)); // Dispatch dell'azione di errore
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <p>No jobs available</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
