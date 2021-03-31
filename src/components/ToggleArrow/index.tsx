import React, { useState } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "./styles";

type ArrowButtonProps = {
  onToggle: (down: boolean) => void;
};

export default function ToggleArrow({ onToggle }: ArrowButtonProps) {
  const [down, setDown] = useState<boolean>(true);

  return (
    <button
      onClick={() => {
        setDown(!down);
        onToggle(down);
      }}
    >
      <Icon isDown={down} className="arrow-icon" icon={faArrowDown} />
    </button>
  );
}