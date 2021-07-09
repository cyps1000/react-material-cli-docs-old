/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { Features, FeaturesProps } from "./Features";

export default {
  title: "Components/Features",
  component: Features,
} as Meta;

/**
 * Defines the Template
 * @param args FeaturesProps
 * @returns
 */
const Template: Story<FeaturesProps> = (args) => (
  <Features {...args} />
);

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
