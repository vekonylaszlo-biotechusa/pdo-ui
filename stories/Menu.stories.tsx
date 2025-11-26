import type { Meta, StoryObj } from "@storybook/react";
import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../src/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
} from "../src/dialog";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "../src/menu";

const meta = {
  title: "Example/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Open menu</MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Playback</MenuGroupLabel>
          <MenuItem>
            <PlayIcon className="opacity-72" />
            Play
            <MenuShortcut>⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem disabled>
            <PauseIcon className="opacity-72" />
            Pause
            <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipBackIcon className="opacity-72" />
            Previous
            <MenuShortcut>⌘[</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipForwardIcon className="opacity-72" />
            Next
            <MenuShortcut>⌘]</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem>Shuffle</MenuCheckboxItem>
        <MenuCheckboxItem>Repeat</MenuCheckboxItem>
        <MenuCheckboxItem disabled>Enhanced Audio</MenuCheckboxItem>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Sort by</MenuGroupLabel>
          <MenuRadioGroup>
            <MenuRadioItem value="artist">Artist</MenuRadioItem>
            <MenuRadioItem value="album">Album</MenuRadioItem>
            <MenuRadioItem value="title">Title</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger>Add to Playlist</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>Jazz</MenuItem>
            <MenuSub>
              <MenuSubTrigger>Rock</MenuSubTrigger>
              <MenuSubPopup>
                <MenuItem>Hard Rock</MenuItem>
                <MenuItem>Soft Rock</MenuItem>
                <MenuItem>Classic Rock</MenuItem>
                <MenuSeparator />
                <MenuItem>Metal</MenuItem>
                <MenuItem>Punk</MenuItem>
                <MenuItem>Grunge</MenuItem>
                <MenuItem>Alternative</MenuItem>
                <MenuItem>Indie</MenuItem>
                <MenuItem>Electronic</MenuItem>
              </MenuSubPopup>
            </MenuSub>
            <MenuItem>Pop</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <TrashIcon />
          Delete
          <MenuShortcut>⌘⌫</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  ),
};

export const WithCheckboxes: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Open menu</MenuTrigger>
      <MenuPopup>
        <MenuCheckboxItem defaultChecked>Auto save</MenuCheckboxItem>
        <MenuCheckboxItem>Notifications</MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  ),
};

export function WithDialogComponent() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Menu>
        <MenuTrigger render={<Button variant="outline" />}>
          Open menu
        </MenuTrigger>
        <MenuPopup align="start">
          <MenuItem onClick={() => setDialogOpen(true)}>Open dialog</MenuItem>
        </MenuPopup>
      </Menu>
      <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>Change your preferences</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>Close</DialogClose>
          </DialogFooter>
        </DialogPopup>
      </Dialog>
    </>
  );
}

export const WithDialog: Story = {
  render: () => <WithDialogComponent />,
};

export const Touch: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Open menu</MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Playback</MenuGroupLabel>
          <MenuItem size="touch">
            <PlayIcon className="opacity-72" />
            Play
            <MenuShortcut>⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem size="touch" disabled>
            <PauseIcon className="opacity-72" />
            Pause
            <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem size="touch">
            <SkipBackIcon className="opacity-72" />
            Previous
            <MenuShortcut>⌘[</MenuShortcut>
          </MenuItem>
          <MenuItem size="touch">
            <SkipForwardIcon className="opacity-72" />
            Next
            <MenuShortcut>⌘]</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem size="touch">Shuffle</MenuCheckboxItem>
        <MenuCheckboxItem size="touch">Repeat</MenuCheckboxItem>
        <MenuCheckboxItem size="touch" disabled>
          Enhanced Audio
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Sort by</MenuGroupLabel>
          <MenuRadioGroup>
            <MenuRadioItem size="touch" value="artist">
              Artist
            </MenuRadioItem>
            <MenuRadioItem size="touch" value="album">
              Album
            </MenuRadioItem>
            <MenuRadioItem size="touch" value="title">
              Title
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger size="touch">Add to Playlist</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem size="touch">Jazz</MenuItem>
            <MenuSub>
              <MenuSubTrigger size="touch">Rock</MenuSubTrigger>
              <MenuSubPopup>
                <MenuItem size="touch">Hard Rock</MenuItem>
                <MenuItem size="touch">Soft Rock</MenuItem>
                <MenuItem size="touch">Classic Rock</MenuItem>
                <MenuSeparator />
                <MenuItem size="touch">Metal</MenuItem>
                <MenuItem size="touch">Punk</MenuItem>
                <MenuItem size="touch">Grunge</MenuItem>
                <MenuItem size="touch">Alternative</MenuItem>
                <MenuItem size="touch">Indie</MenuItem>
                <MenuItem size="touch">Electronic</MenuItem>
              </MenuSubPopup>
            </MenuSub>
            <MenuItem size="touch">Pop</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem size="touch" variant="destructive">
          <TrashIcon />
          Delete
          <MenuShortcut>⌘⌫</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  ),
};
