export function reducer(state, action) {

  switch (action.type) {
    case 'setNameForm':
      const res = {
        ...state,
        nameForm: action.payload
      };
      res.submitEnabled = res.nameForm.valid && res.ageForm.valid;
      return res;
    case 'setAgeForm':
      const res = {
        ...state,
        ageForm: action.payload
      };
      res.submitEnabled = res.nameForm.valid && res.ageForm.valid;
      return res;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }

}

export const defaultState = {
  nameForm: {
    valid: false
  },
  ageForm: {
    valid: false
  },
  submitEnabled: false
};
