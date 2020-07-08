import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = ({baseCost, tripOptions}) => {
  console.log(tripOptions);
  console.log(baseCost);
  const totalPrice = calculateTotal(formatPrice(baseCost), tripOptions);
  return (<h2 className={styles.component}>Total: <strong>{totalPrice}</strong></h2>);
};

OrderSummary.propTypes = {
  baseCost: PropTypes.string,
  tripOptions: PropTypes.node,
  calculateTotal: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default OrderSummary;