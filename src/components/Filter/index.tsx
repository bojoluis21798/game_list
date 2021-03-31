import React, { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import FilterType from "../../types/FilterType";
import { Wrapper } from "./styles";

const initialState: FilterType = {
  name: "",
  score: {
    min: 1,
    max: 10,
  },
  orderBy: {
    type: "Release Date",
    ascending: true,
  },
};

type Action = {
  type: ActionType;
  payload?: string;
};

enum ActionType {
  CHANGE_NAME,
  CHANGE_SCORE,
  TOGGLE_ASCENDING,
  CHANGE_ORDER_BY,
}

function reducer(state: FilterType, action: Action): FilterType {
  switch (action.type) {
    case ActionType.CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.CHANGE_SCORE:
      return {
        ...state,
        score: {
          min: parseInt(action.payload),
          max: parseInt(action.payload),
        },
      };
    case ActionType.TOGGLE_ASCENDING:
      return {
        ...state,
        orderBy: {
          ...state.orderBy,
          ascending: !state.orderBy.ascending,
        },
      };
    case ActionType.CHANGE_ORDER_BY:
      return {
        ...state,
        orderBy: {
          ...state.orderBy,
          type: action.payload as FilterType["orderBy"]["type"],
        },
      };
    default:
      return state;
  }
}

type FilterProps = {
  onFilter: (form: FilterType) => void;
  onClear: () => void;
};

export default function Filter({ onFilter, onClear }: FilterProps) {
  const [form, dispatch] = useReducer(reducer, initialState);

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
            onChange={(e) =>
              dispatch({
                type: ActionType.CHANGE_NAME,
                payload: e.target.value,
              })
            }
          />
        </div>

        <div className="input-group input-group__score">
          <label htmlFor="minimum_score">Minimum Score</label>
          <input
            type="text"
            name="minimum_score"
            onChange={(e) =>
              dispatch({
                type: ActionType.CHANGE_SCORE,
                payload: e.target.value,
              })
            }
          />
        </div>

        <div className="input-group input-group__order">
          <label htmlFor="order_by">Order By</label>
          <div className="order-by-group">
            <button
              onClick={() => {
                dispatch({
                  type: ActionType.TOGGLE_ASCENDING,
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
                dispatch({
                  type: ActionType.CHANGE_ORDER_BY,
                  payload: e.target.value,
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
