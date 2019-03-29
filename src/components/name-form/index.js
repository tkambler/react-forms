import React, { Fragment } from 'react';
import { Formik } from 'formik';
import Effect from 'app/components/effect';
import * as yup from 'yup';
import './styles';

const schema = yup.object().shape({
  first_name: yup.string().required().label('First Name')
});

export default function NameForm({
  onChange
}) {

  return (
    <div className="name-form">
      <Formik
        initialValues={{
          first_name: 'John'
        }}
        schema={schema}
      >
        {
          (formik) => {

            console.log('formik', formik);

            return (
              <Fragment>
                <Effect
                  onChange={onChange}
                  schema={schema}
                />
                <div className="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    autoFocus
                  />
                </div>
              </Fragment>
            );

          }
        }
      </Formik>
    </div>
  );

}
