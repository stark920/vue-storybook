import type { Meta, StoryObj } from '@storybook/vue3'

import MyButton from './MyButton.vue'

const meta = {
  title: 'Custom/MyButton',
  component: MyButton,
  tags: ['autodocs'],
} satisfies Meta<typeof MyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}
