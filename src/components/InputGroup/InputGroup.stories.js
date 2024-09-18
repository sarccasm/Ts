import React from "react";
import InputGroup from "./InputGroup";

export default {
  title: "Components/InputGroup",
  component: InputGroup,
};

const Template = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  placeholder: "Enter your email",
  value: "",
  onChange: () => {},
  error: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Email",
  placeholder: "Enter your email",
  value: "",
  onChange: () => {},
  error: true,
};
