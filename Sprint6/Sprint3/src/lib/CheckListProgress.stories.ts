import type { Meta, StoryObj } from '@storybook/sveltekit';
import ChecklistProgress from './ChecklistProgress.svelte';

const meta = {
  title: 'components/ChecklistProgress',
  component: ChecklistProgress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Progress is computed live as items are checked, but the visible label — and any animated progress bar — only updates when **Submit version** is pressed. This "submit gate" means ticking or unticking boxes never changes what the user sees until they explicitly commit their changes.'
      }
    }
  }
} satisfies Meta<ChecklistProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMixed: Story = {
  args: {
    items: [
      { id: '1', label: 'Step 1', done: true },
      { id: '2', label: 'Step 2', done: false },
      { id: '3', label: 'Step 3', done: true },
      { id: '4', label: 'Step 4', done: false },
      { id: '5', label: 'Step 5', done: true }
    ]
  }
};

export const NoneChecked: Story = {
  args: {
    items: [
      { id: '1', label: 'Step 1', done: false },
      { id: '2', label: 'Step 2', done: false },
      { id: '3', label: 'Step 3', done: false }
    ]
  }
};

export const AllChecked: Story = {
  args: {
    items: [
      { id: '1', label: 'Step 1', done: true },
      { id: '2', label: 'Step 2', done: true },
      { id: '3', label: 'Step 3', done: true }
    ]
  }
};

export const LongLabels: Story = {
  args: {
    items: [
      { id: '1', label: 'Complete comprehensive project setup including environment configuration, dependency management, and initial scaffolding', done: false },
      { id: '2', label: 'Write thorough test coverage including unit tests, integration tests, and end-to-end testing scenarios', done: false },
      { id: '3', label: 'Implement all core features according to specifications with proper error handling and edge case management', done: false }
    ]
  }
};