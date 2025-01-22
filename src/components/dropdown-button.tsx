import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function DropDownButton() {
  return (
    <button>
      <GiHamburgerMenu
        size={24}
        className="text-primary active:text-primary/45"
      />
    </button>
  );
}

export default DropDownButton;
