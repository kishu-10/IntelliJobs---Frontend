import React, { useEffect } from "react";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { showError, showSuccess } from "../../utils/toast";

function ErrorMessage() {
  return <p className="error">This field is required</p>;
}

const Skills = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skills: [{ name: "" }],
    },
  });
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "skills",
    keyName: "key",
  });
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/cv-builder/skills/`,
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
    };
    fetchSkills();
  }, [replace]);

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/cv-builder/skills/",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        showSuccess("Skill added successfully.");
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Accordion iconPosition="right" initialItem={-1}>
              {fields.map((field, index) => (
                <Accordion.Item
                  label={field.title ? field.title : "New Skill"}
                  key={field.key}
                >
                  <div className="container education-card" key={field.key}>
                    <div className="form-row form-group">
                      <div className="col-md-4">
                        <label>Title</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(`skills.${index}.title`, {
                            required: true,
                          })}
                        />
                        {errors.skills?.[index]?.title && <ErrorMessage />}
                      </div>
                    </div>
                    <div className="form-row mt-4 ml-5">
                      <div className="col-md-9 offset-md-11">
                        <button
                          className="btn btn-sm font-14 ml-4 btn-danger"
                          onClick={() => {
                            remove(index);
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

export default Skills;
