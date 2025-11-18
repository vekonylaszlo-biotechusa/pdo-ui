import type { Meta, StoryObj } from '@storybook/react';
import { ChevronsUpDownIcon } from 'lucide-react';
import { Button } from '../src/button';
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from '../src/combobox';

const meta = {
  title: 'Example/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
];

export const Default: Story = {
  render: () => (
    <Combobox items={items}>
      <ComboboxInput placeholder="Select an item..." />
      <ComboboxPopup>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  ),
};

export const MultiSelect: Story = {
  render: () => (
    <Combobox items={items} multiple>
      <ComboboxChips>
        <ComboboxValue>
          {(value: { value: string; label: string }[]) => (
            <>
              {value?.map((item) => (
                <ComboboxChip key={item.value} aria-label={item.value}>
                  {item.label}
                </ComboboxChip>
              ))}
              <ComboboxInput
                placeholder={
                  value.length > 0 ? undefined : 'Select a Select an item...'
                }
                aria-label="Select an item"
              />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxPopup>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => <ComboboxItem value={item}>{item.label}</ComboboxItem>}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  ),
};

interface Country {
  code: string;
  value: string | null;
  continent: string;
  label: string;
}

const countries: Country[] = [
  { code: '', continent: '', label: 'Select country', value: null },
  { code: 'af', continent: 'Asia', label: 'Afghanistan', value: 'afghanistan' },
  { code: 'al', continent: 'Europe', label: 'Albania', value: 'albania' },
  { code: 'dz', continent: 'Africa', label: 'Algeria', value: 'algeria' },
  { code: 'ad', continent: 'Europe', label: 'Andorra', value: 'andorra' },
  { code: 'ao', continent: 'Africa', label: 'Angola', value: 'angola' },
  {
    code: 'ar',
    continent: 'South America',
    label: 'Argentina',
    value: 'argentina',
  },
  { code: 'am', continent: 'Asia', label: 'Armenia', value: 'armenia' },
  { code: 'au', continent: 'Oceania', label: 'Australia', value: 'australia' },
  { code: 'at', continent: 'Europe', label: 'Austria', value: 'austria' },
  { code: 'az', continent: 'Asia', label: 'Azerbaijan', value: 'azerbaijan' },
  {
    code: 'bs',
    continent: 'North America',
    label: 'Bahamas',
    value: 'bahamas',
  },
  { code: 'bh', continent: 'Asia', label: 'Bahrain', value: 'bahrain' },
  { code: 'bd', continent: 'Asia', label: 'Bangladesh', value: 'bangladesh' },
  {
    code: 'bb',
    continent: 'North America',
    label: 'Barbados',
    value: 'barbados',
  },
  { code: 'by', continent: 'Europe', label: 'Belarus', value: 'belarus' },
  { code: 'be', continent: 'Europe', label: 'Belgium', value: 'belgium' },
  { code: 'bz', continent: 'North America', label: 'Belize', value: 'belize' },
  { code: 'bj', continent: 'Africa', label: 'Benin', value: 'benin' },
  { code: 'bt', continent: 'Asia', label: 'Bhutan', value: 'bhutan' },
];

export const InputInsidePopup: Story = {
  render: () => (
    <Combobox defaultValue={countries[0]} items={countries}>
      <ComboboxTrigger
        render={
          <Button
            className="w-full justify-between font-normal"
            variant="outline"
          />
        }
      >
        <ComboboxValue />
        <div className="flex">
          <ChevronsUpDownIcon className="-me-1 size-4 opacity-72" />
        </div>
      </ComboboxTrigger>
      <ComboboxPopup aria-label="Select country">
        <div className="border-b p-2">
          <ComboboxInput
            className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
            placeholder="e.g. United Kingdom"
            showTrigger={false}
          />
        </div>
        <ComboboxEmpty>No countries found.</ComboboxEmpty>
        <ComboboxList>
          {(country: Country) => (
            <ComboboxItem key={country.code} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  ),
};
