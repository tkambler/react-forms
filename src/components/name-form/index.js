import React from 'react';
import * as yup from 'yup';
import Form from 'app/components/form';

const schema = yup.object().shape({
  first_name: yup.string().required().label('First Name')
});

export default function NameForm({
  onChange
}) {

  return (
    <Form
      initialValues={{
        first_name: 'John'
      }}
      schema={schema}
      onChange={onChange}
    >
      <Form.TextField
        label="First Name"
        name="first_name"
      />
    </Form>
  );

}
