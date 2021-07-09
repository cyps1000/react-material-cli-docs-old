/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { GetStartedSection, GetStartedSectionProps } from "./GetStartedSection";

export default {
  title: "Components/GetStartedSection",
  component: GetStartedSection,
} as Meta;

/**
 * Defines the Template
 * @param args GetStartedSectionProps
 * @returns
 */
const Template: Story<GetStartedSectionProps> = (args) => (
  <GetStartedSection {...args} />
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
