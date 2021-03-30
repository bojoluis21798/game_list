import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import FilterType from "../../types/FilterType";
import { Wrapper } from "./styles";

type FilterProps = {
  onFilter: (form: FilterType) => void;
  onClear: () => void;
};

export default function Filter({ onFilter, onClear }: FilterProps) {
  const [form, setForm] = useState<FilterType>({
    name: "",
    score: {
      min: 1,
      max: 10,
    },
    orderBy: {
      type: "Release Date",
      ascending: true,
    },
  });

  useEffect(() => {
    onFilter(form);
  }, [form]);

  return (
    <Wrapper>
      <h2 className="filter-title">Filter Results</h2>

      <div className="filter-form">
        <div className="input-group input-group__name">
          <label htmlFor="name">Name (contains)</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="input-group input-group__score">
          <label htmlFor="minimum_score">Minimum Score</label>
          <input
            type="text"
            name="minimum_score"
            onChange={(e) =>
              setForm({
                ...form,
                score: {
                  min: parseInt(e.target.value),
                  max: parseInt(e.target.value),
                },
              })
            }
          />
        </div>

        <div className="input-group input-group__order">
          <label htmlFor="order_by">Order By</label>
          <div className="order-by-group">
            <button
              onClick={() => {
                setForm({
                  ...form,
                  orderBy: {
                    ...form.orderBy,
                    ascending: !form.orderBy.ascending,
                  },
                });
              }}
            >
              <FontAwesomeIcon
                icon={form.orderBy.ascending ? faArrowUp : faArrowDown}
              />
            </button>
            <input
              type="text"
              name="order_by"
              onChange={(e) => {
                setForm({
                  ...form,
                  orderBy: {
                    ...form.orderBy,
                    type: e.target.value as FilterType["orderBy"]["type"],
                  },
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
