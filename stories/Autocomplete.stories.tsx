import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteSeparator,
} from '../src/autocomplete';
import { Label } from '../src/label';

const meta = {
  title: 'Example/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

// Grouped items demo
type Tag = { id: string; label: string; group: 'Status' | 'Priority' | 'Team' };
type TagGroup = { value: string; items: Tag[] };
const tagsData: Tag[] = [
  // Status
  { group: 'Status', id: 's-open', label: 'Open' },
  { group: 'Status', id: 's-in-progress', label: 'In progress' },
  { group: 'Status', id: 's-blocked', label: 'Blocked' },
  { group: 'Status', id: 's-resolved', label: 'Resolved' },
  { group: 'Status', id: 's-closed', label: 'Closed' },
  // Priority
  { group: 'Priority', id: 'p-low', label: 'Low' },
  { group: 'Priority', id: 'p-medium', label: 'Medium' },
  { group: 'Priority', id: 'p-high', label: 'High' },
  { group: 'Priority', id: 'p-urgent', label: 'Urgent' },
  // Team
  { group: 'Team', id: 't-design', label: 'Design' },
  { group: 'Team', id: 't-frontend', label: 'Frontend' },
  { group: 'Team', id: 't-backend', label: 'Backend' },
  { group: 'Team', id: 't-devops', label: 'DevOps' },
  { group: 'Team', id: 't-qa', label: 'QA' },
  { group: 'Team', id: 't-mobile', label: 'Mobile' },
  { group: 'Team', id: 't-data', label: 'Data' },
  { group: 'Team', id: 't-security', label: 'Security' },
  { group: 'Team', id: 't-platform', label: 'Platform' },
  { group: 'Team', id: 't-infra', label: 'Infrastructure' },
  { group: 'Team', id: 't-product', label: 'Product' },
  { group: 'Team', id: 't-marketing', label: 'Marketing' },
  { group: 'Team', id: 't-sales', label: 'Sales' },
  { group: 'Team', id: 't-support', label: 'Support' },
  { group: 'Team', id: 't-research', label: 'Research' },
  { group: 'Team', id: 't-content', label: 'Content' },
  { group: 'Team', id: 't-analytics', label: 'Analytics' },
  { group: 'Team', id: 't-operations', label: 'Operations' },
  { group: 'Team', id: 't-finance', label: 'Finance' },
  { group: 'Team', id: 't-hr', label: 'HR' },
  { group: 'Team', id: 't-legal', label: 'Legal' },
  { group: 'Team', id: 't-growth', label: 'Growth' },
  { group: 'Team', id: 't-partner', label: 'Partner' },
  { group: 'Team', id: 't-community', label: 'Community' },
  { group: 'Team', id: 't-docs', label: 'Docs' },
  { group: 'Team', id: 't-l10n', label: 'Localization' },
  { group: 'Team', id: 't-a11y', label: 'Accessibility' },
  { group: 'Team', id: 't-sre', label: 'SRE' },
  { group: 'Team', id: 't-release', label: 'Release' },
  { group: 'Team', id: 't-architecture', label: 'Architecture' },
  { group: 'Team', id: 't-ux', label: 'UX' },
  { group: 'Team', id: 't-ui', label: 'UI' },
  { group: 'Team', id: 't-management', label: 'Management' },
];

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Mango', value: 'mango' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
];
export const Default: Story = {
  render: () => (
    <Autocomplete items={items}>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

export const Small: Story = {
  render: () => (
    <Autocomplete items={items}>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
        size="sm"
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

export const Large: Story = {
  render: () => (
    <Autocomplete items={items}>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
        size="lg"
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Autocomplete items={items}>
      <div className="flex flex-col items-start gap-2">
        <Label htmlFor="fruits">Fruits</Label>
        <AutocompleteInput
          aria-label="Search items"
          id="fruits"
          placeholder="Search items…"
        />
      </div>
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

export const InlineAutocomplete: Story = {
  render: () => (
    <Autocomplete items={items} mode="both">
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

export const Autohighlight: Story = {
  render: () => (
    <Autocomplete items={items} autoHighlight>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

export const ClearButton: Story = {
  render: () => (
    <Autocomplete items={items}>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
        showClear
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

export const TriggerAndClearIcon: Story = {
  render: () => (
    <Autocomplete items={items}>
      <AutocompleteInput
        aria-label="Search items"
        placeholder="Search items…"
        showClear
        showTrigger
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};

function groupTags(tags: Tag[]): TagGroup[] {
  const groups: Record<string, Tag[]> = {};
  for (const tag of tags) {
    if (!groups[tag.group]) {
      groups[tag.group] = [];
    }
    // biome-ignore lint/style/noNonNullAssertion: will never be null
    groups[tag.group]!.push(tag);
  }
  const order: Array<TagGroup['value']> = ['Status', 'Priority', 'Team'];
  return order.map((value) => ({ items: groups[value] ?? [], value }));
}
const groupedTags: TagGroup[] = groupTags(tagsData);

export const GroupedItems: Story = {
  render: () => (
    <Autocomplete items={groupedTags}>
      <div className="flex flex-col items-start gap-2">
        <AutocompleteInput
          aria-label="Search tags"
          placeholder="e.g. feature"
        />
      </div>
      <AutocompletePopup>
        <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
        <AutocompleteList>
          {(group: TagGroup) => (
            <React.Fragment key={group.value}>
              <AutocompleteGroup items={group.items}>
                <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
                <AutocompleteCollection>
                  {(tag: Tag) => (
                    <AutocompleteItem key={tag.id} value={tag}>
                      {tag.label}
                    </AutocompleteItem>
                  )}
                </AutocompleteCollection>
              </AutocompleteGroup>
              {group.value !== 'Team' && <AutocompleteSeparator />}
            </React.Fragment>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  ),
};
