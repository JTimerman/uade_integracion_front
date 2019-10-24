import { ADD_FILTER } from "../actions/actionTypes.json";

const initialState = {
  holders: {},
  employees: {}
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          [action.filterType]: action.filter
        }
      };

    default:
      return state;
  }
}
