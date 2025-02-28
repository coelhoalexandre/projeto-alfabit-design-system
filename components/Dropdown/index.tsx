import React, { useState, Fragment } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { dropdownStyles } from "./Dropdown.style";

export type DropdownProps = {
  list: string[];
};

export default function Dropdown({ list, ...rest }: DropdownProps) {
  const [selectedItem, setSelectedItem] = useState(list[0]);
  const [query, setQuery] = useState("");

  const filteredItem =
    query === ""
      ? list
      : list.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });

  const onChange = (value: string | null) => {
    if (value) setSelectedItem(value);
  };

  return (
    <Combobox value={selectedItem} onChange={onChange} {...rest}>
      <div className={dropdownStyles.container}>
        <div className={dropdownStyles.containerMenu}>
          <ComboboxInput
            className={dropdownStyles.input}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className={dropdownStyles.button}>
            <ChevronDownIcon
              className={`h-5 w-5 text-primary ${"rotate-180"}`}
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions className={dropdownStyles.optionsContainer}>
            {filteredItem.length === 0 && query !== "" ? (
              <div className={dropdownStyles.noResult}>Nenhum selecionado.</div>
            ) : (
              filteredItem.map((item) => (
                <ComboboxOption
                  className={({ focus }) =>
                    `${dropdownStyles.option} ${
                      focus ? "bg-dark text-gray-primary" : "text-gray-900"
                    }`
                  }
                  key={item}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-primary" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </Transition>
      </div>
    </Combobox>
  );
}
