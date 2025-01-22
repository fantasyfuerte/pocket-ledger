"use client";

import { useState } from "react";
import {
  Gi3dGlasses,
  GiClockwork,
  GiHamburgerMenu,
  GiStrong,
} from "react-icons/gi";

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
            className="p-2 text-sm text-primary font-semibold"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="flex gap-1">
              <Gi3dGlasses size={24} className="text-primary mt-1" />
              <a
                href="https://pocket-ledger.vercel.app/#how-to-use"
                className="py-2"
              >
                How to use
              </a>
            </li>
            <li className="flex gap-1">
              <GiClockwork size={24} className="text-primary mt-1" />
              <a href="/tracker/#history" className="py-2">
                History
              </a>
            </li>
            <li className="flex gap-1">
              <GiStrong size={24} className="text-primary mt-1" />
              <a href="https://instagram.com/fuerte.ts" className="py-2">
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
