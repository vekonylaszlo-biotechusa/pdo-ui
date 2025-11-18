import type { Meta, StoryObj } from '@storybook/react';
import {
  ArchiveIcon,
  EditIcon,
  EllipsisIcon,
  FilesIcon,
  FilmIcon,
  ShareIcon,
  TrashIcon,
} from 'lucide-react';
import { Button } from '../src/button';
import { Group, GroupSeparator } from '../src/group';
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../src/menu';

const meta = {
  title: 'Example/Group',
  component: Group,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    children: (
      <>
        <Button variant="outline">
          <FilesIcon />
          Files
        </Button>
        <GroupSeparator />
        <Button variant="outline">
          <FilmIcon />
          Media
        </Button>
        <GroupSeparator />
        <Menu>
          <MenuTrigger
            render={<Button aria-label="Menu" size="icon" variant="outline" />}
          >
            <EllipsisIcon className="size-4" />
          </MenuTrigger>
          <MenuPopup align="end">
            <MenuItem>
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem>
              <ArchiveIcon />
              Archive
            </MenuItem>
            <MenuItem>
              <ShareIcon />
              Share
            </MenuItem>
            <MenuItem variant="destructive">
              <TrashIcon />
              Delete
            </MenuItem>
          </MenuPopup>
        </Menu>
      </>
    ),
  },
  render: (args) => <Group {...args} aria-label="File actions" />,
};
