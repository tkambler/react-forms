import { combineReducers } from 'app/lib/util';

const reducers = {
  nameForm: (state, action) => {

    const actions = {
      setNameForm: () => {
        return action.payload;
      }
    };

    return actions[action.type] ? actions[action.type]() : state;

  },
  ageForm: (state, action) => {

    const actions = {
      setAgeForm: () => {
        return action.payload;
      }
    };

    return actions[action.type] ? actions[action.type]() : state;

  },
};

export const reducer = combineReducers(reducers);

export const defaultState = {
  nameForm: {
    valid: false
  },
  ageForm: {
    valid: false
  },
};
