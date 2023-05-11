import React from "react";
import { Button } from "react-bootstrap";

export default function SummaryForm({ setSummaryForm, formData })
{
  const {
    problem,
    problem_diagnosed,
    physical_trauma,
    mental_trauma,
    problem_experience,
    when_experience,
    problem_intense,
  } = formData;
  return (
    <>
      <Button onClick={() => setSummaryForm(false)}>Go Back</Button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Problems</th>
            <th scope="col">{problem}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col"> Have you been diagnosed with this problem?</th>
            <th scope="col"> {problem_diagnosed}</th>
          </tr>
          <tr>
            <th scope="col"> Did the problem start after a physical trauma?</th>
            <th scope="col">{physical_trauma}</th>
          </tr>
          <tr>
            <th scope="col">Did the problem start after a mental trauma?</th>
            <th scope="col"> {mental_trauma}</th>
          </tr>{" "}
          <tr>
            <th scope="col"> How often do you experience the problem?</th>
            <th scope="col">{problem_experience}</th>
          </tr>{" "}
          <tr>
            <th scope="col"> When do you experience the problem?</th>
            <th scope="col"> {when_experience}</th>
          </tr>
          <tr>
            <th scope="col">
              How intense is the experience of the problem on average on a 0-10
              scale?
            </th>
            <th scope="col"> {problem_intense}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
