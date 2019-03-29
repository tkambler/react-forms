import React, { Component } from 'react';
import { connect } from 'formik';
import _ from 'lodash';

class Effect extends Component {

  render() {
    console.log('xxx', this.props);
    return null;
  }

  componentDidUpdate(prevProps) {
    if (_.isEqual(prevProps.formik.values, this.props.formik.values)) {
      return;
    }
    let valid;
    if (this.props.schema) {

    }
    this.props.onChange({
      state: this.props.formik.values
    });
  }

  componentDidMount() {
    this.props.onChange(this.props.formik.values);
  }

}

export default connect(Effect);
