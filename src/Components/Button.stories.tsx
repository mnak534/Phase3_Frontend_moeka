// Button.stories.ts|tsx
import { Meta, Story } from '@storybook/react';
import { Button, Props } from './Button';
import { ComponentStory, ComponentStoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library'
import {expect} from '@storybook/jest'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick : {action: 'clicked'},
    children: {
      defaultValue: 'DEFAULT TEXT'
    },
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  }
};
export default meta;

/*export default {
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;*/

//const Template: Story<Props> = (args) => <Button {...args}/>
//export const Primary = Template.bind({})

//Accessibilities
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const testHover: ComponentStoryObj<typeof Button> = {
  
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('button-test'))
    expect(await canvas.getByTestId('button-test2').textContent).toEqual(
      'default(visited)'
    )
  }
}

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  link: 'https://storybook.js.org/addons/chromatic',
  text: 'Accessible',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  link: 'https://storybook.js.org/addons/chromatic',
  text: 'Inaccessible',
}
