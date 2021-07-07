/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { ActiveLanguage, ActiveLanguageProps } from "./ActiveLanguage";

export default {
  title: "Components/ActiveLanguage",
  component: ActiveLanguage,
} as Meta;

/**
 * Defines the Template
 * @param args ActiveLanguageProps
 * @returns
 */
const Template: Story<ActiveLanguageProps> = (args) => (
  <ActiveLanguage {...args} />
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
