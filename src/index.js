import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NameForm from './components/name-form';

function App() {

  const [ nameForm, setNameForm ] = useState();

  console.log('nameForm', nameForm);

  return (
    <div>
      <NameForm
        onChange={(data) => {
          console.log('onChange', data);
          setNameForm(data);
        }}
      />
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
