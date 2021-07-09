/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { PackageVersion, PackageVersionProps } from "./PackageVersion";

export default {
  title: "Components/PackageVersion",
  component: PackageVersion,
} as Meta;

/**
 * Defines the Template
 * @param args PackageVersionProps
 * @returns
 */
const Template: Story<PackageVersionProps> = (args) => (
  <PackageVersion {...args} />
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
