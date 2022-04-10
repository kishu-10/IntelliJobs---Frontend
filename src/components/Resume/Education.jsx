import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useForm, useFieldArray } from "react-hook-form";

function ErrorMessage(){
  return <p className="error">This field is required</p>
}
const Education = () => {
  const [education, setEducation] = useState([]);
  const { control, register, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      educations: [
        {
          name: "unhijm",
        },
      ],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "educations", // unique name for your Field Array
      keyName: "key",
    }
  );

  const onSubmit = data => console.log(data);

  return (
    <div className="section--profile">
      <button
        className="btn btn-sm btn-primary"
        to=""
        style={{ float: "right" }}
        onClick={() => {
          append({});
        }}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Accordion iconPosition="right" initialItem={-1}>
              {fields.map((field, i) => (
                <Accordion.Item label="Education" key={field.key}>
                  <div className="container education-card" key={field.key}>
                    <div className="form-row form-group">
                      <div className="col-md-4">
                        <label>University</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`educations.${i}.university`, {
                            required: true,
                          })}
                        />
                        {errors.educations?.[i]?.university && <ErrorMessage />}
                      </div>
                      <div className="col-md-4">
                        <label>Address</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`educations.${i}.address`, {
                            required: true,
                          })}
                        />
                        {errors.educations?.[i]?.address && <ErrorMessage />}
                      </div>
                      <div className="col-md-4">
                        <label>Degree</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`educations.${i}.degree`, {
                            required: true,
                          })}
                        />
                        {errors.educations?.[i]?.degree && <ErrorMessage />}
                      </div>
                    </div>
                    <div className="form-row form-group">
                      <div className="col-md-4">
                        <label>Field of Study</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`educations.${i}.subject`, {
                            required: true,
                          })}
                        />
                        {errors.educations?.[i]?.subject && <ErrorMessage />}
                      </div>
                      <div className="col-md-4">
                        <label>Start Date</label>
                        <input
                          className="form-control"
                          type="date"
                          {...register(`educations.${i}.start_date`, {
                            required: true,
                          })}
                        />
                        {errors.educations?.[i]?.start_date && <ErrorMessage />}
                      </div>
                      <div className="col-md-4">
                        <label>End Date</label>
                        <input
                          className="form-control"
                          type="date"
                          {...register(`educations.${i}.end_date`)}
                        />
                        {errors.educations?.[i]?.end_date && <ErrorMessage />}
                      </div>
                    </div>
                    <div className="form-row form-group">
                      <div className="col-lg">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          {...register(`educations.${i}.description`, {
                            required: true,
                          })}
                        />
                        {errors.educations?.[i]?.description && <ErrorMessage />}
                      </div>
                    </div>
                    <div className="form-row mt-4 ml-5">
                      <div className="col-md-9 offset-md-11">
                        <button
                          className="btn btn-sm font-14 ml-4 btn-danger"
                          onClick={() => {
                            remove(i);
                          }}
                        >
                          <Icon icon="fluent:delete-24-filled" color="white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Accordion.Item>
              ))}
            </Accordion>
            <div className="col-md-9 offset-md-11 pl-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;
