import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NameForm from './components/name-form';
import AgeForm from './components/age-form';
import ReactJSON from 'react-json-view';
import _ from 'lodash';

function App() {

  const [ nameForm, setNameForm ] = useState();
  const [ ageForm, setAgeForm ] = useState();
  const [ submitEnabled, setSubmitEnabled ] = useState(false);

  useEffect(() => {
    setSubmitEnabled(
      _.get(nameForm, 'valid') && _.get(ageForm, 'valid')
    );
  }, [nameForm, ageForm]);

  console.log('nameForm', nameForm);
  console.log('ageForm', ageForm);

  function submit() {
    console.log('Submit', nameForm, ageForm);
  }

  return (
    <div>
      <NameForm
        onChange={(data) => {
          console.log('NameForm.onChange', data);
          setNameForm(data);
        }}
      />
      <AgeForm
        onChange={(data) => {
          console.log('AgeForm.onChange', data);
          setAgeForm(data);
        }}
      />
      <button
        disabled={!submitEnabled}
        onClick={submit}
      >
        Submit
      </button>
      <ReactJSON src={nameForm} theme="monokai" />
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
