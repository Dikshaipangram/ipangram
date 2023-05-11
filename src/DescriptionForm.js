import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ButtonHandler from "./ButtonHandler";
import SummaryForm from "./SummaryForm";

export default function DescriptionForm() {
  const [{ items }, setItems] = useState({ items: [] });
  const [summaryForm, setSummaryForm] = useState(false);
  const [formData, setFormData] = useState({
    problem: [],
    problem_diagnosed: null,
    physical_trauma: null,
    mental_trauma: null,
    problem_experience: null,
    when_experience: null,
    problem_intense: null,
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addHandler = () => {
    items.push(desc);
    setItems({ items: [...items] });
  };
  const desc = (
    <div>
      <div className="d-flex justify-content-center">
        <Card className="text-center w-50 shadow border-0 my-2">
          <Card.Body>
            <Card.Title className="text-primary">
              Pain & Functional Description
            </Card.Title>
            <Card.Text className="w-50 lh-sm mx-auto text-dark">
              The description of the current situation gives your Optimum
              Trainer a picture of and clues to the underlying causes of your
              problems
            </Card.Text>
            <Card.Text className="lh-sm">
              If you have problems with pain/aches,stiffness,weakness or
              functional problems,describe this/these below.(List the symptoms
              in descending order with the most troublesome first)
            </Card.Text>
            <textarea
              className="w-100"
              onChange={(e) => onChangeHandler(e)}
              name="problem"
            ></textarea>
            <div className="row my-2">
              <div className="col-6  text-start">
                Have you been diagnosed with this problem?
              </div>
              {["Not relevant", "Yes", "No"].map((item) => {
                return (
                  <>
                    <div className="col-2">
                      <div className="form-check text-nowrap">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="problem_diagnosed"
                          id="formRadioChecked"
                          value={item}
                          onChange={(e) => onChangeHandler(e)}
                        />
                        <label
                          className="form-check-label"
                          for="formRadioChecked"
                        >
                          {item}
                        </label>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="row my-2">
              <div className="col-6 text-start">
                Did the problem start after a physical trauma?
              </div>
              {["Not relevant", "Yes", "No"].map((item) => {
                return (
                  <>
                    <div className="col-2">
                      <div className="form-check text-nowrap">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="physical_trauma"
                          id="formRadioChecked"
                          value={item}
                          onChange={(e) => onChangeHandler(e)}
                        />
                        <label
                          className="form-check-label"
                          for="formRadioChecked"
                        >
                          {item}
                        </label>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="row my-2">
              <div className="col-6 text-start">
                Did the problem start after a mental trauma?
              </div>
              {["Not relevant", "Yes", "No"].map((item) => {
                return (
                  <>
                    <div className="col-2">
                      <div className="form-check text-nowrap">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="mental_trauma"
                          id="formRadioChecked"
                          value={item}
                          onChange={(e) => onChangeHandler(e)}
                        />
                        <label
                          className="form-check-label"
                          for="formRadioChecked"
                        >
                          {item}
                        </label>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="row my-2">
              <div className="col-6 text-start">
                How often do you experience the problem?
              </div>
            </div>

            <div className="row my-2">
              <div className="col-2">
                {" "}
                <div className="form-check text-nowrap">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="problem_experience"
                    id="formRadioDefault"
                    value="Not relevant"
                    onChange={(e) => onChangeHandler(e)}
                  />
                  <label className="form-check-label" for="formRadioDefault">
                    Not relevant
                  </label>
                </div>
              </div>
              <div className="col-2">
                <div className="form-check text-nowrap">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="problem_experience"
                    value="Daily"
                    onChange={(e) => onChangeHandler(e)}
                    id="formRadioChecked"
                  />
                  <label className="form-check-label" for="formRadioChecked">
                    Daily
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check text-nowrap">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="formRadioChecked"
                    name="problem_experience"
                    value="Several Times/week"
                    onChange={(e) => onChangeHandler(e)}
                  />
                  <label className="form-check-label" for="formRadioChecked">
                    Several Times/week
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check text-nowrap">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="problem_experience"
                    value=" A few times/month"
                    onChange={(e) => onChangeHandler(e)}
                    id="formRadioChecked"
                  />
                  <label className="form-check-label" for="formRadioChecked">
                    A few times/month
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check text-nowrap">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="problem_experience"
                    value=" A few times/year"
                    onChange={(e) => onChangeHandler(e)}
                    id="formRadioChecked"
                  />
                  <label className="form-check-label" for="formRadioChecked">
                    A few times/year
                  </label>
                </div>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-4 text-start text-nowrap">
                When do you experience the problem?
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="when_experience"
                    value="Not relevant"
                    onChange={(e) => onChangeHandler(e)}
                    id="formCheckDefault"
                  />
                  <label className="form-check-label" for="formCheckDefault">
                    Not relevant
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="when_experience"
                    value=" When lying down"
                    onChange={(e) => onChangeHandler(e)}
                    id="formCheckChecked"
                  />
                  <label className="form-check-label" for="formCheckChecked">
                    When lying down
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="when_experience"
                    value="When sitting"
                    onChange={(e) => onChangeHandler(e)}
                    id="formCheckChecked"
                  />
                  <label className="form-check-label" for="formCheckChecked">
                    When sitting
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="when_experience"
                    value="Under Standing"
                    onChange={(e) => onChangeHandler(e)}
                    id="formCheckChecked"
                  />
                  <label className="form-check-label" for="formCheckChecked">
                    Under Standing
                  </label>
                </div>{" "}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="when_experience"
                    value="In Walking"
                    onChange={(e) => onChangeHandler(e)}
                    id="formCheckChecked"
                  />
                  <label className="form-check-label" for="formCheckChecked">
                    In Walking
                  </label>
                </div>
              </div>
              <div className="col-8 my-4">
                <div className="border border-2 rounded p-2" style={{ color:"#DEE2E6"}}>
                  Other? For example in rotations, side bends, wing stairs,when working with the arms above the head.
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-6 text-start text-nowrap">
                How intense is the experience of the problem on average on a
                0-10 scale?
              </div>
            </div>
            <span className="d-flex justify-content-evenly">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                return (
                  <>
                    <div
                      className="d-flex flex-column"
                      style={{ marginRight: "30px" }}
                    >
                      <label>{item}</label>
                      <input
                        type="radio"
                        name="problem_intense"
                        value={item}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    </div>
                    <i></i>
                  </>
                );
              })}
            </span>
          </Card.Body>
        </Card>
      </div>
      <ButtonHandler addHandler={addHandler} setSummaryForm={setSummaryForm} />
    </div>
  );

  return (
    <>
      {summaryForm ? (
        <SummaryForm setSummaryForm={setSummaryForm} formData={formData} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="container">
              {desc}
                {items}
          </div>
        </form>
      )}
    </>
  );
}
