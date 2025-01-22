"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function DropDownButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-end">
      <button onClick={() => setIsOpen((prev) => !prev)}>
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
            className="py-2 text-sm text-primary"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a href="#how-to-use" className="block px-4 py-2">
                How to use
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Earnings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownButton;
