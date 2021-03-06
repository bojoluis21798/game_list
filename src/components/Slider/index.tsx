import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";

import Range from "./Range";
import { Wrapper, RangeDisplay } from "./styles";

type SliderProps = {
  min: number;
  max: number;
  onFinalChange: (values: [number, number]) => void;
};

export default function Slider({
  min,
  max,
  onFinalChange,
}: SliderProps): JSX.Element {
  const sliderWrapperRef = useRef<HTMLDivElement>();
  const [show, setShow] = useState<boolean>(false);
  const [values, setValues] = useState<[number, number]>([min, max]);

  const [scoreMin, scoreMax] = values;

  return (
    <Wrapper ref={sliderWrapperRef}>
      <RangeDisplay onClick={() => setShow((show) => !show)}>
        {scoreMin} - {scoreMax}
      </RangeDisplay>

      <Transition
        in={show}
        unmountOnExit
        timeout={300}
        addEndListener={() => null}
      >
        {(state) => (
          <Range
            transitionState={state}
            wrapperRef={sliderWrapperRef}
            min={min}
            max={max}
            values={values}
            onChange={([min, max]) => setValues([min, max])}
            onFinalChange={onFinalChange}
            onBlur={() => setShow(false)}
          />
        )}
      </Transition>
    </Wrapper>
  );
}
