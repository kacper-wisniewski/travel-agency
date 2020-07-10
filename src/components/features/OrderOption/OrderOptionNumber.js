import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
//import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  <div className={styles.input}>
    <input className={styles.inputSmall} type='number' value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}/> 
    {
    // Nie wiem jaką podać wartość ceny
    }
  </div>
);

OrderOptionNumber.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;