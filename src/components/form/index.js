import React, { Fragment } from 'react';
import { Formik, connect } from 'formik';
import Effect from 'app/components/effect';
import './styles';

function TextField({
  label,
  name,
  formik,
}) {

  return (
    <div className="field">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        autoFocus
      />
    </div>
  );

}

export default function Form({
  children,
  initialValues,
  onChange,
  schema,
}) {

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        schema={schema}
      >
        {
          (formik) => {

            // console.log('formik', formik);

            return (
              <Fragment>
                <Effect
                  onChange={onChange}
                  schema={schema}
                />
                {children}
              </Fragment>
            );

          }
        }
      </Formik>
    </div>
  );

}

Form.TextField = connect(TextField);
