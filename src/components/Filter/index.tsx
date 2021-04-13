import React from "react";

import Select from "../Select";
import ToggleArrow from "../ToggleArrow";
import Slider from "../Slider";
import { FilterType, OrderBy } from "../../types";
import { Wrapper } from "./styles";

type FilterProps = {
  onChange: (form: FilterType) => void;
  onClear: () => void;
  filter: FilterType;
};

export default function Filter({
  onClear,
  onChange,
  filter,
}: FilterProps): JSX.Element {
  return (
    <Wrapper>
      <h2 className="filter-title">Filter Results</h2>

      <div className="filter-form">
        <div className="input-group input-group__name">
          <label htmlFor="name">Name (contains)</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              onChange({
                ...filter,
                name: e.target.value,
              })
            }
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
              onToggle={(toggleState) => {
                onChange({
                  ...filter,
                  ascending: toggleState,
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
