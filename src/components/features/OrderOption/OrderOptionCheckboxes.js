import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';


const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
         
        {currentValue.indexOf(value.id) > -1 ? 
          <input type='checkbox' value={value.id} key={value.id} defaultChecked onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/> : 
          <input type='checkbox' value={value.id} key={value.id} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/>
        }
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;