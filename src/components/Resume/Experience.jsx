import React, { useCallback, useEffect } from "react";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { showError, showSuccess } from "../../utils/toast";

function ErrorMessage() {
  return <p className="error">This field is required</p>;
}

const Experience = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      experiences: [{ name: "" }],
    },
  });
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "experiences",
    keyName: "key",
  });

  const fetchExperiences = useCallback(async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/cv-builder/experience/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      replace(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [replace]);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/cv-builder/experience/",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        fetchExperiences();
        showSuccess("Experience added successfully.");
      })
      .catch((error) => {
        showError("Error");
      });
  };

  const deleteExperience = (expId) => {
    axios({
      method: "delete",
      url: `http://127.0.0.1:8000/api/cv-builder/experience/${expId}`,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        showSuccess("Experience deleted successfully.");
      })
      .catch((error) => {
        showError("Error");
      });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Accordion iconPosition="right" initialItem={-1}>
              {fields.map((field, index) => (
                <Accordion.Item
                  label={
                    field.title
                      ? field.title + " - " + field.company
                      : "New Experience"
                  }
                  key={field.key}
                >
                  <div className="container education-card" key={field.key}>
                    <div className="form-row form-group">
                      <div className="col-md-6">
                        <label>Job Title</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`experiences.${index}.title`, {
                            required: true,
                          })}
                        />
                        {errors.experiences?.[index]?.title && <ErrorMessage />}
                      </div>
                      <div className="col-md-6">
                        <label>Company</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`experiences.${index}.company`, {
                            required: true,
                          })}
                        />
                        {errors.experiences?.[index]?.company && (
                          <ErrorMessage />
                        )}
                      </div>
                    </div>
                    <div className="form-row form-group">
                      <div className="col-md-4">
                        <label>Address</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`experiences.${index}.address`, {
                            required: true,
                          })}
                        />
                        {errors.experiences?.[index]?.address && (
                          <ErrorMessage />
                        )}
                      </div>
                      <div className="col-md-4">
                        <label>Start Date</label>
                        <input
                          className="form-control"
                          type="date"
                          {...register(`experiences.${index}.start_date`, {
                            required: true,
                          })}
                        />
                        {errors.experiences?.[index]?.start_date && (
                          <ErrorMessage />
                        )}
                      </div>
                      <div className="col-md-4">
                        <label>End Date</label>
                        <input
                          className="form-control"
                          type="date"
                          {...register(`experiences.${index}.end_date`)}
                        />
                        {errors.experiences?.[index]?.end_date && (
                          <ErrorMessage />
                        )}
                      </div>
                    </div>
                    <div className="form-row form-group">
                      <div className="col-lg">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows="4"
                          {...register(`experiences.${index}.description`)}
                        />
                        {errors.experiences?.[index]?.description && (
                          <ErrorMessage />
                        )}
                      </div>
                    </div>
                    <div className="form-row mt-4 ml-5">
                      <div className="col-md-9 offset-md-11">
                        <button
                          className="btn btn-sm font-14 ml-4 btn-danger"
                          onClick={() => {
                            remove(index);
                            deleteExperience(field.id);
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

export default Experience;
