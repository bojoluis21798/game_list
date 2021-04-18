import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { Button, Icon } from "./styles";

type ArrowButtonProps = {
  onToggle: () => void;
  ascending: boolean;
};

export default function ToggleArrow({
  onToggle,
  ascending,
}: ArrowButtonProps): JSX.Element {
  return (
    <Button
      onClick={() => {
        onToggle();
      }}
    >
      <Icon isDown={!ascending} className="arrow-icon" icon={faArrowDown} />
    </Button>
  );
}
