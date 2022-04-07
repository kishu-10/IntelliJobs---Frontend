import React from "react";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";

const Experience = () => {
  return (
    <div className="section--profile">
      <button
        className="btn btn-sm btn-primary"
        to=""
        style={{ float: "right" }}
      >
        <Icon
          icon="fluent:add-12-filled"
          fontSize={14}
          style={{ paddingBottom: "1.5px" }}
        />{" "}
        Experience
      </button>
      <h3 className="text-primary">
        <Icon
          className="mr-2"
          icon="ic:round-work"
          fontSize={25}
          color={"var(--primary)"}
          style={{ marginBottom: "4px" }}
        />
        Work Experience
      </h3>
      <p className="title-desc">
        Basic work experience infos, like your previous and current office
      </p>
      <div className="row">
        <div className="col-lg">
          <Accordion iconPosition="right" initialItem={-1}>
            <Accordion.Item label="Experience">
              <div className="container education-card">
                <div className="form-row form-group">
                  <div className="col-md-6">
                    <label>Job Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Company</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                    />
                  </div>
                </div>
                <div className="form-row form-group">
                  <div className="col-md-4">
                    <label>Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Start Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="first_name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>End Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="first_name"
                    />
                  </div>
                </div>
                <div className="form-row form-group">
                  <div className="col-lg">
                    <label>Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="form-row mt-4 ml-5">
                  <div className="col-md-9 offset-md-11">
                    <button className="btn btn-sm font-14 ml-4 btn-danger">
                      <Icon icon="fluent:delete-24-filled" color="white" />
                    </button>
                  </div>
                </div>
              </div>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Experience;
