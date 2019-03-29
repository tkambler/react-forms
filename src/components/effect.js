import React, { Component } from 'react';
import { connect } from 'formik';
import _ from 'lodash';

class Effect extends Component {

  render() {
    return null;
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.formik.values, this.props.formik.values)) {
      return this.notifyChange();
    }
  }

  componentDidMount() {
    return this.notifyChange();
  }

  notifyChange() {
    let valid;
    if (this.props.schema) {
      try {
        this.props.schema.validateSync(this.props.formik.values);
        valid = true;
      } catch(err) {
        valid = false;
      }
    }
    const data = {
      state: this.props.formik.values
    };
    if (_.isBoolean(valid)) {
      data.valid = valid;
    }
    this.props.onChange(data);
  }

}

export default connect(Effect);
