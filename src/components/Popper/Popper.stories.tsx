/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { Popper, PopperProps } from "./Popper";

export default {
  title: "Organisms/Popper",
  component: Popper
} as Meta;

/**
 * Defines the Template
 * @param args PopperProps
 * @returns
 */
const Template: Story<PopperProps> = (args) => <Popper {...args} />;

/**
 * Default case
 */
export const Default = Template.bind({});

/**
 * Put your component props in here
 *
 * Example:
 * Default.args = {
 *  text: "Hello World"
 * }
 *
 * Assuming that the component expects a prop text that is a string.
 */
Default.args = {};
