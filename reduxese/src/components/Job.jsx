// src/components/Job.js
import { useSelector } from "react-redux"; // per ottenere lo stato
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "../actions/index"; // Inviare azioni
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data, dispatch }) => {
  //devo accedere allo stato, quindi dalle const
  const query = useSelector((state) => state.data.query);

  const handleJobClick = () => {
    dispatch({ type: "DO_SOMETHING_WITH_QUERY", payload: query });
    dispatch(fetchDataRequest());
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
      onClick={handleJobClick}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
