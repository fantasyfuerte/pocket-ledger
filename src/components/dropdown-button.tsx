"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function DropDownButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-end absolute top-0 right-0 m-4">
      <button
        className="outline-none"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <GiHamburgerMenu
          size={24}
          className="text-primary active:text-primary/45"
        />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 bg-middleColor divide-y divide-gray-100 rounded-lg shadow w-44 top-10"
        >
          <ul
            className="py-2 text-sm text-primary font-semibold"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="https://pocket-ledger.vercel.app/#how-to-use"
                className="block px-4 py-2"
              >
                How to use
              </a>
            </li>
            <li>
              <a href="/tracker/#history" className="block px-4 py-2">
                History
              </a>
            </li>
            <li>
              <a href="https://instagram.com/fuerte.ts" className="block px-4 py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownButton;
