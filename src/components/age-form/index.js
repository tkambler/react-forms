import React from 'react';
import * as yup from 'yup';
import Form from 'app/components/form';

const schema = yup.object().shape({
  age: yup.string().required().label('Age')
});

export default function AgeForm({
  onChange
}) {

  return (
    <Form
      initialValues={{
        age: '25'
      }}
      schema={schema}
      onChange={onChange}
    >
      <Form.TextField
        label="Age"
        name="age"
      />
    </Form>
  );

}
