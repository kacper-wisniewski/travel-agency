import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input type="text" className={styles.input} value={currentValue} onChange={event => setOptionValue(event.currentTarget.value)}/>
  </div>
);

OrderOptionText.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;