import React, { useState } from "react";
import { Transition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "./Dropdown";
import { Wrapper } from "./styles";
import { OrderBy } from "../../types";

type SelectProps = {
  items: OrderBy[];
  selected: OrderBy;
  onSelect: (selected: OrderBy) => void;
};

export default function Select({
  items,
  selected,
  onSelect,
}: SelectProps): JSX.Element {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Wrapper>
      <button
        className="select-button"
        onMouseDown={() => setShow(!show)}
        onKeyPress={(e) => e.key === "Enter" && setShow(!show)}
      >
        <h2>{selected}</h2>
        <FontAwesomeIcon className="drop-icon" icon={faCaretDown} />
      </button>
      <Transition in={show} timeout={300} unmountOnExit addEndListener={null}>
        {(state) => (
          <Dropdown
            transitionState={state}
            items={items}
            selected={selected}
            onSelect={(item) => {
              onSelect(item);
              setShow(false);
            }}
            onBlur={() => setShow(false)}
          />
        )}
      </Transition>
    </Wrapper>
  );
}
