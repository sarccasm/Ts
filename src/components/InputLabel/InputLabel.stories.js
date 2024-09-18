import React from "react";
import InputLabel from "./InputLabel";

export default {
  title: "Components/InputLabel",
  component: InputLabel,
};

const Template = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
};

export const Required = Template.bind({});
Required.args = {
  label: "Email",
  required: true,
};
