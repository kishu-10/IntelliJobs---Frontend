import React from "react";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";

const Education = () => {
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
        Education
      </button>
      <h3 className="text-primary">
        <Icon
          className="mr-2"
          icon="fa6-solid:user-graduate"
          fontSize={25}
          color={"var(--primary)"}
          style={{ paddingBottom: "1.5px" }}
        />
        Education
      </h3>
      <p className="title-desc">
        Basic education infos, like your school, college and university.
      </p>
      <div className="row">
        <div className="col-lg">
          <Accordion iconPosition="right" initialItem={-1}>
            <Accordion.Item label="Education">
              <div className="container education-card">
                <div className="form-row form-group">
                  <div className="col-md-4">
                    <label>University</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Degree</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                    />
                  </div>
                </div>
                <div className="form-row form-group">
                  <div className="col-md-4">
                    <label>Field of Study</label>
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
          {/* <Accordion iconPosition="right" multiple initialItem={0}>
                
                    <Accordion.Item
                        key={field.key}
                        icon={
                            <AccordionMenu>
                                <Menu.Item
                                    onClick={() => removeItem(i, field.id)}
                                    icon={<MdDelete />}
                                >
                                    Delete
                                </Menu.Item>
                            </AccordionMenu>
                        }
                        label={
                            <EducationAccordionLabel i={i} control={control} />
                        }
                    >
                        
                    </Accordion.Item>
            </Accordion> */}
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

export default Education;
