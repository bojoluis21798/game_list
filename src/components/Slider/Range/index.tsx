import React, { useEffect } from "react";
import { TransitionStatus } from "react-transition-group";
import { Range as InputRange } from "react-range";

import { RangeTrack, RangeThumb } from "./styles";

type RangeProps = {
  transitionState: TransitionStatus;
  wrapperRef?: React.MutableRefObject<HTMLDivElement>;
  min: number;
  max: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
  onFinalChange: (values: [number, number]) => void;
  onBlur?: () => void;
};
export default function Range({
  transitionState,
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
    <InputRange
      allowOverlap={false}
      step={1}
      min={min}
      max={max}
      values={values}
      onChange={onChange}
      onFinalChange={onFinalChange}
      renderTrack={({ props, children }) => (
        <RangeTrack transitionState={transitionState}>
          <div className="range-container">
            <div className="line" {...props}>
              {children}
            </div>
          </div>
        </RangeTrack>
      )}
      renderThumb={({ props }) => <RangeThumb {...props}></RangeThumb>}
    />
  );
}
