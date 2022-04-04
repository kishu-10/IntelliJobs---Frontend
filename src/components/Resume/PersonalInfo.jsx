import React from "react";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";

const PersonalInfo = () => {
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
      <h2 className="mb-4 text-primary">Personal Info</h2>
      <Accordion iconPosition="left" disableIconRotation>
        <Accordion.Item
          label="Education"
          icon={
            <Icon
              icon="fa6-solid:user-graduate"
              fontSize={20}
              color={"var(--primary)"}
            />
          }
        >
          Colors, fonts, shadows and many other parts are customizable to fit
          your design needs
        </Accordion.Item>

        <Accordion.Item label="Flexibility">
          Configure components appearance and behavior with vast amount of
          settings or overwrite any part of component styles
        </Accordion.Item>

        <Accordion.Item label="No annoying focus ring">
          With new :focus-visible pseudo-class focus ring appears only when user
          navigates with keyboard
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PersonalInfo;
