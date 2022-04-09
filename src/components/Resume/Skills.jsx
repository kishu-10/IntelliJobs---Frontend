import React from "react";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";

const Skills = () => {
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
        Skills
      </button>
      <h3 className="text-primary">
        <Icon
          className="mr-2"
          icon="ri:user-star-fill"
          fontSize={30}
          color={"var(--primary)"}
          style={{ marginBottom: "4px" }}
        />
        Skills
      </h3>
      <p className="title-desc">
        Basic education infos, like your school, college and university.
      </p>
      <div className="row">
        <div className="col-lg">
          <Accordion iconPosition="right" initialItem={-1}>
            <Accordion.Item label="Skills">
              <div className="container education-card">
                <div className="form-row form-group">
                  <div className="col-md-4">
                    <label>Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                    />
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
          <div class="col-md-9 offset-md-11 pl-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
