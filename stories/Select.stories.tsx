import type { Meta, StoryObj } from '@storybook/react';
import {
  ClockIcon,
  Code2Icon,
  GlobeIcon,
  LayersIcon,
  ZapIcon,
} from 'lucide-react';
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../src/select';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: 'Select framework', value: null },
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Astro', value: 'astro' },
];

export const Default: Story = {
  render: () => (
    <Select defaultValue="next" items={items}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  ),
};

const languages = {
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  java: 'Java',
  javascript: 'JavaScript',
  php: 'PHP',
  python: 'Python',
  rust: 'Rust',
  swift: 'Swift',
  typescript: 'TypeScript',
};
type Language = keyof typeof languages;
const values = Object.keys(languages) as Language[];
function renderValue(value: Language[]) {
  if (value.length === 0) {
    return 'Select languages…';
  }
  const firstLanguage = value[0] ? languages[value[0]] : '';
  const additionalLanguages =
    value.length > 1 ? ` (+${value.length - 1} more)` : '';
  return firstLanguage + additionalLanguages;
}

export const Multiple: Story = {
  render: () => (
    <Select
      aria-label="Select languages"
      defaultValue={['javascript', 'typescript']}
      multiple
    >
      <SelectTrigger>
        <SelectValue>{renderValue}</SelectValue>
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {values.map((value) => (
          <SelectItem key={value} value={value}>
            {languages[value]}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Select defaultValue="next" items={items}>
      <SelectTrigger>
        <ClockIcon />
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  ),
};

const itemsWIcons = [
  { icon: LayersIcon, label: 'Components', value: 'components' },
  { icon: ZapIcon, label: 'Performance', value: 'performance' },
  { icon: GlobeIcon, label: 'Network', value: 'network' },
  { icon: Code2Icon, label: 'Development', value: 'development' },
];

export const OptionsWithIcon: Story = {
  render: () => (
    <Select
      aria-label="Select category"
      defaultValue={itemsWIcons[0]}
      itemToStringValue={(item) => item.value}
    >
      <SelectTrigger>
        <SelectValue>
          {(item) => (
            <span className="flex items-center gap-2">
              <item.icon className="size-4 opacity-72" />
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {itemsWIcons.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex items-center gap-2">
              <item.icon className="size-4 opacity-72" />
              <span className="truncate">{item.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  ),
};

const itemsWObjects = [
  { description: 'npx create-next-app', label: 'Next.js', value: 'next' },
  { description: 'npm create vite@latest', label: 'Vite', value: 'vite' },
  { description: 'npm create astro@latest', label: 'Astro', value: 'astro' },
  { description: 'npx create-remix', label: 'Remix', value: 'remix' },
];

export const WithObjects: Story = {
  render: () => (
    <Select
      aria-label="Select framework with command"
      defaultValue={itemsWObjects[0]}
      itemToStringValue={(item) => item.value}
    >
      <SelectTrigger>
        <SelectValue>
          {(item) => (
            <span className="flex flex-col">
              <span className="truncate">{item.label}</span>
              <span className="truncate text-muted-foreground text-xs">
                {item.description}
              </span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        {itemsWObjects.map((item) => (
          <SelectItem key={item.value} value={item}>
            <span className="flex flex-col">
              <span className="truncate">{item.label}</span>
              <span className="truncate text-muted-foreground text-xs">
                {item.description}
              </span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  ),
};
