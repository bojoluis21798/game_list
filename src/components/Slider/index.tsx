import React, { useState, useRef } from "react";

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

      <Range
        show={show}
        wrapperRef={sliderWrapperRef}
        min={min}
        max={max}
        values={values}
        onChange={([min, max]) => setValues([min, max])}
        onFinalChange={onFinalChange}
        onBlur={() => setShow(false)}
      />
    </Wrapper>
  );
}
