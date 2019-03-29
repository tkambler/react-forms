import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import NameForm from './components/name-form';
import AgeForm from './components/age-form';
import ReactJSON from 'react-json-view';
import _ from 'lodash';
import { reducer, defaultState } from './reducer';

function App() {

  const [ state, dispatch ] = useReducer(reducer, defaultState);

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
        disabled={!state.submitEnabled}
        onClick={submit}
      >
        Submit
      </button>
      <ReactJSON src={state} theme="monokai" />
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
