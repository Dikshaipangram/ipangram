import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonHandler({ addHandler, setSummaryForm }) {
  return (
    <>
      {" "}
      <div className="plus d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary btn-sm my-2"
          style={{ borderRadius: "100%", fontWeight: "bold" }}
          onClick={() => addHandler()}
        >
          +
        </button>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <Button variant="primary btn-sm text-light" style={{width:150}}>Back</Button>
        <Button
          variant="primary  mx-2 btn-sm text-light"
          onClick={() => setSummaryForm(true)}
          style={{ width: 150 }}
        >
          Next
        </Button>
      </div>
    </>
  );
}
