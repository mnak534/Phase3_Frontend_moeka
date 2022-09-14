import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import SimpleForm from './SimpleForm'
import {expect} from '@storybook/jest'

export default { component: SimpleForm } as ComponentMeta<typeof SimpleForm>

export const Search: ComponentStoryObj<typeof SimpleForm> = {
  args: {
    title: 'Pokemon'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByRole('textbox'), 'ditto', {
      delay: 400
    })
    userEvent.click(canvas.getByText('🔎'))

    expect(await (await canvas.findByTestId('print-name')).textContent).toEqual(
      'Height: 30 cmWeight: 4 kg'
    )
  }
}