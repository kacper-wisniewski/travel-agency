import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker selected={currentValue} onChange={setOptionValue}/> 
  </div>
);

OrderOptionDate.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;