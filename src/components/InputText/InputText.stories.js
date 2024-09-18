import React from "react";
import InputText from "./InputText";

export default {
  title: "Components/InputText",
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Input...",
  value: "",
  onChange: () => {},
  error: false,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: "Input...",
  value: "",
  onChange: () => {},
  error: true,
};
