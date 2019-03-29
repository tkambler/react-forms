import React, { useReducer, useMemo } from 'react';
import ReactDOM from 'react-dom';
import NameForm from './components/name-form';
import AgeForm from './components/age-form';
import ReactJSON from 'react-json-view';
import _ from 'lodash';
import { reducer, defaultState } from './reducer';

function App() {

  const [ state, dispatch ] = useReducer(reducer, defaultState);
  const submitEnabled = useMemo(() => {
    return state.nameForm.valid && state.ageForm.valid;
  }, [state]);

  console.log('state', state);
  console.log('submitEnabled', submitEnabled);

  function submit() {
    console.log('Submit');
  }

  return (
    <div>
      <NameForm
        onChange={(data) => {
          dispatch({
            type: 'setNameForm',
            payload: data
          });
        }}
      />
      <AgeForm
        onChange={(data) => {
          dispatch({
            type: 'setAgeForm',
            payload: data
          });
        }}
      />
      <button
        disabled={submitEnabled}
        onClick={submit}
      >
        Submit
      </button>
      <ReactJSON src={{
        ...state,
        submitEnabled,
      }} theme="monokai" />
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
