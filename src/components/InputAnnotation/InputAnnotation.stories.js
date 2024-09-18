import React from "react";
import InputAnnotation from "./InputAnnotation";

export default {
  title: "Components/InputAnnotation",
  component: InputAnnotation,
};

const Template = (args) => <InputAnnotation {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "This is a required field",
  type: "error",
};

export const Info = Template.bind({});
Info.args = {
  message: "This is some additional information",
  type: "info",
};
