import React from "react";

import Select from "../Select";
import ToggleArrow from "../ToggleArrow";
import Slider from "../Slider";
import { FilterType, OrderBy } from "../../types";
import { Wrapper } from "./styles";

let delayID: ReturnType<typeof setTimeout> = null;

type FilterProps = {
  onChange: (form: FilterType) => void;
  onClear: () => void;
  filter: FilterType;
  className: string;
};

export default function Filter({
  onClear,
  onChange,
  filter,
  className = "",
}: FilterProps): JSX.Element {
  return (
    <Wrapper className={className}>
      <h2 className="filter-title">Filter Results</h2>

      <div className="filter-form">
        <div className="input-group input-group__name">
          <label htmlFor="name">Name (contains)</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              if (delayID) clearTimeout(delayID);

              delayID = setTimeout(() => {
                onChange({
                  ...filter,
                  name: e.target.value,
                });
              }, 500);
            }}
          />
        </div>

        <div className="input-group input-group__score">
          <label htmlFor="minimum_score">Minimum Score</label>
          <Slider
            min={1}
            max={10}
            onFinalChange={([min, max]) =>
              onChange({
                ...filter,
                score: { min, max },
              })
            }
          />
        </div>

        <div className="input-group input-group__order">
          <label htmlFor="order_by">Order By</label>
          <div className="order-by-group">
            <ToggleArrow
              ascending={filter.ascending}
              onToggle={() => {
                onChange({
                  ...filter,
                  ascending: !filter.ascending,
                });
              }}
            />
            <Select
              items={[OrderBy.RELEASE_DATE, OrderBy.NAME, OrderBy.SCORE]}
              selected={filter.orderBy}
              onSelect={(selected) => {
                onChange({
                  ...filter,
                  orderBy: selected as FilterType["orderBy"],
                });
              }}
            />
          </div>
        </div>

        <div className="input-group">
          <button
            className="clear_button"
            onClick={(e: React.SyntheticEvent) => {
              e.preventDefault();
              onClear();
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
