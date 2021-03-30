import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  margin: 0.5rem;
  padding: 1rem;

  .filter-form {
    display: flex;
    flex-wrap: wrap;
  }

  .input-group {
    width: 100%;
    margin: 0.5rem 0;

    label {
      display: block;
      margin: 0.5rem 0;
    }

    input {
      width: 100%;
    }

    .clear_button {
      width: 100%;
    }
  }

  .order-by-group {
    display: flex;
  }
`;

export type FilterForm = {
  name: string;
  score: {
    min: number;
    max: number;
  };
  orderBy: {
    type: "Release Date" | "Score" | "Name";
    ascending: boolean;
  };
};

type FilterProps = {
  onFilter: (form: FilterForm) => void;
  onClear: () => void;
};

const Filter = ({ onFilter, onClear }: FilterProps) => {
  const [form, setForm] = useState<FilterForm>({
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
                    type: e.target.value as FilterForm["orderBy"]["type"],
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
};

export default Filter;
