import React, { useRef, useEffect, useState } from "react";
import { TransitionStatus } from "react-transition-group";

import { Wrapper } from "./styles";
import { OrderBy } from "../../../types";

type DropdownProps = {
  transitionState: TransitionStatus;
  items: OrderBy[];
  selected: OrderBy;
  onSelect: (selected: OrderBy) => void;
  onBlur: () => void;
};

export default function Dropdown({
  transitionState,
  items,
  selected,
  onSelect,
  onBlur,
}: DropdownProps): JSX.Element {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const buttonRefs =
    (dropDownRef.current?.querySelectorAll(
      "button.dropdown-button"
    ) as NodeListOf<HTMLButtonElement>) || null;

  const [buttonIndex, setButtonIndex] = useState<number>(0);

  const options = items
    .filter((item) => item !== selected)
    .map((item) => (
      <button
        className="dropdown-button"
        key={item}
        onMouseDown={() => onSelect(item)}
      >
        {item}
      </button>
    ));

  useEffect(() => {
    if (buttonRefs && transitionState === "entered") {
      buttonRefs[buttonIndex].focus();
      buttonRefs[buttonIndex].addEventListener("blur", onBlur);

      return () => {
        buttonRefs[buttonIndex].removeEventListener("blur", onBlur);
      };
    }
  }, [transitionState, buttonRefs, buttonIndex, onBlur]);

  useEffect(() => {
    function onDown(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowDown":
          setButtonIndex((i) => (i + 1) % (items.length - 1));
          break;
        case "ArrowUp":
          setButtonIndex(
            (i) => (items.length - 1 + i - 1) % (items.length - 1)
          );
          break;
        case "Tab":
          if (buttonIndex + 1 === items.length - 1) {
            onBlur();
          } else {
            setButtonIndex((i) => i + 1);
          }
          break;
      }
      buttonRefs[buttonIndex].removeEventListener("blur", onBlur);
    }

    window.addEventListener("keydown", onDown);

    return () => {
      window.removeEventListener("keydown", onDown);
    };
  }, [buttonIndex, buttonRefs, items, onBlur]);

  return (
    <Wrapper ref={dropDownRef} transitionState={transitionState}>
      <div className="drop-menu">{options}</div>
    </Wrapper>
  );
}
