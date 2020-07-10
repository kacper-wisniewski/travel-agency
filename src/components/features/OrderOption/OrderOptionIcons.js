import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div>
    {required ? '' : (
      <div className={styles.icon.iconActive} onClick={setOptionValue('')}>
        <Icon name='times-circle'/>
        None
      </div>
    )}
    {values.map(value => (
      // Problem z ustawieniem warunku dla styli
      <div className={styles.icon} key={value.id} onClick={setOptionValue(value.id)}>
        <Icon name={value.icon}/>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;