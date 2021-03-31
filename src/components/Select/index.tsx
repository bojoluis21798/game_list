import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { Wrapper, Dropdown } from "./styles";
import { OrderBy } from "../../types";

type SelectProps = {
  items: OrderBy[];
  selected: OrderBy;
  onSelect: (selected: string) => void;
};

const Select = ({ items, selected, onSelect }: SelectProps) => {
  const [show, setShow] = useState<boolean>(false);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  const options = items
    .filter((item) => item !== selected)
    .map((item, index) => (
      <button
        {...(index === 0 ? { ref: firstButtonRef } : {})}
        key={item}
        onMouseDown={() => {
          onSelect(item);
          setShow(false);
        }}
        onBlur={() => {
          setShow(false);
        }}
      >
        {item}
      </button>
    ));

  if (firstButtonRef.current && show) {
    firstButtonRef.current.focus();
  }

  return (
    <Wrapper>
      <button className="select-button" onMouseDown={() => setShow(!show)}>
        <h2>{selected}</h2>
        <FontAwesomeIcon className="drop-icon" icon={faCaretDown} />
      </button>
      <Transition in={show} timeout={300} unmountOnExit addEndListener={null}>
        {(state) => (
          <Dropdown state={state}>
            <div className="drop-menu">{options}</div>
          </Dropdown>
        )}
      </Transition>
    </Wrapper>
  );
};

export default Select;
