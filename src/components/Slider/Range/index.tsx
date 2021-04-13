import React, { useEffect } from "react";
import { Transition } from "react-transition-group";
import { Range as InputRange } from "react-range";

import { RangeTrack, RangeThumb } from "./styles";

type RangeProps = {
  show: boolean;
  wrapperRef?: React.MutableRefObject<HTMLDivElement>;
  min: number;
  max: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
  onFinalChange: (values: [number, number]) => void;
  onBlur?: () => void;
};
export default function Range({
  show,
  min,
  max,
  values,
  onChange,
  onFinalChange,
  onBlur,
  wrapperRef,
}: RangeProps): JSX.Element {
  useEffect(() => {
    if (wrapperRef && onBlur) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (!wrapperRef.current.contains(e.target as Node)) {
          onBlur();
        }
      };
      window.addEventListener("click", handleOutsideClick);

      return () => {
        window.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [onBlur, wrapperRef]);

  return (
    <Transition
      in={show}
      unmountOnExit
      timeout={300}
      addEndListener={() => null}
    >
      {(state) => (
        <InputRange
          allowOverlap={false}
          step={1}
          min={min}
          max={max}
          values={values}
          onChange={onChange}
          onFinalChange={onFinalChange}
          renderTrack={({ props, children }) => (
            <RangeTrack transitionState={state}>
              <div className="range-container">
                <div className="line" {...props}>
                  {children}
                </div>
              </div>
            </RangeTrack>
          )}
          renderThumb={({ props }) => <RangeThumb {...props}></RangeThumb>}
        />
      )}
    </Transition>
  );
}
