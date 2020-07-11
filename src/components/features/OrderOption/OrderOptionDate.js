import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker selected={currentValue} onChange={setOptionValue}/> 
  </div>
);

OrderOptionText.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;