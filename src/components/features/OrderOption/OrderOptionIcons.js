import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div>
    {required ? '' : (
      <div className={styles.icon.iconActive} onClick={() => setOptionValue('')}>
        <Icon name='times-circle'/>
        None
      </div>
    )}
    {values.map(value => (
      <div key={value.id}>
        {currentValue == value.id ? 
          <div className={`${styles.icon} ${styles.iconActive}`} key={value.id} onClick={() => setOptionValue(value.id)}>
            <Icon name={value.icon} /> {value.name} ({formatPrice(value.price)})
          </div>
          : 
          <div className={styles.icon} key={value.id} onClick={() => setOptionValue(value.id)}>
            <Icon name={value.icon} /> 
            {value.name} ({formatPrice(value.price)})
          </div>
        }
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